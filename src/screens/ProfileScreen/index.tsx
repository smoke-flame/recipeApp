import React, {useCallback, useEffect, useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Auth} from 'aws-amplify';
import DatePicker, {getToday} from 'react-native-modern-datepicker';
import {useTypedDispatch} from 'hooks/useTypedDispatch';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {setUser} from 'store/user/userSlice';
import UserAvatar from 'components/UserAvatar';
import RadioGroup from 'components/RadioGroup';
import UInput from 'components/UInput';
import UIButton from 'components/UIButton';
import {genders, initialValues} from 'screens/ProfileScreen/constants';
import {gender, IChangeUserValues} from 'screens/ProfileScreen/types';
import {styles} from './ProfileScreen.style';

const ProfileScreen = () => {
  const dispatch = useTypedDispatch();
  const user = useTypedSelector(state => state.userReducer.user);
  const [changeUserValues, setChangeUserValues] =
    useState<IChangeUserValues>(initialValues);
  const [datePickerVisible, setDatePickerVisble] = useState<boolean>(false);

  const openDatePicker = useCallback(() => setDatePickerVisble(true), []);
  const closeDatePicker = useCallback(() => setDatePickerVisble(false), []);

  const logout = useCallback(async () => {
    await Auth.signOut();
    dispatch(setUser(null));
  }, [dispatch]);

  const handleInputChange = useCallback(
    (key: keyof IChangeUserValues, value: string) => {
      setChangeUserValues(prev => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );
  const handleGenderChange = useCallback((newGender: string) => {
    setChangeUserValues(prev => ({
      ...prev,
      gender: newGender as gender,
    }));
  }, []);

  const handleDateChange = useCallback(
    (birthdayDate: string) => {
      if (birthdayDate === changeUserValues.birthdayDate) return;
      setChangeUserValues(prev => ({
        ...prev,
        birthdayDate,
      }));
      closeDatePicker();
    },
    [closeDatePicker, changeUserValues],
  );

  const handleModalPress = useCallback(
    (e: GestureResponderEvent) => {
      if (e.target === e.currentTarget) {
        closeDatePicker();
      }
    },
    [closeDatePicker],
  );

  const handleDateInputPress = useCallback(() => {
    openDatePicker();
  }, [openDatePicker]);

  useEffect(() => {
    if (!user) return;

    const {name, id, image, email} = user;
    setChangeUserValues(prev => ({...prev, name, id, image, email}));
    // eslint-disable-next-line
  }, []);

  if (!user) return null;

  return (
    <>
      <ScrollView contentContainerStyle={styles.root}>
        <View>
          <View style={styles.avatarContainer}>
            <UserAvatar user={user} size="lg" />
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
          <View style={styles.changeForm}>
            <UInput
              value={changeUserValues.name}
              onChangeText={value => handleInputChange('name', value)}
              label="Name"
              placeholder="Enter Name"
              style={styles.input}
            />
            <UInput
              value={changeUserValues.id}
              label="ID"
              style={styles.input}
              disabled
            />
            <RadioGroup
              items={genders}
              onChange={handleGenderChange}
              value={changeUserValues.gender}
              style={styles.gender}
            />
            <Pressable style={styles.input} onPress={handleDateInputPress}>
              <Text style={styles.dateLabel}>Date of birth</Text>
              <Text style={styles.dateText}>
                {changeUserValues.birthdayDate?.split(' ')[0] || ''}
              </Text>
            </Pressable>
            <UIButton title="Update Profile" />
          </View>
        </View>
        <UIButton title="Sign Out" onPress={logout} color="red" />
      </ScrollView>
      {datePickerVisible && (
        <Pressable style={styles.datePicker} onPress={handleModalPress}>
          <DatePicker
            mode="datepicker"
            onSelectedChange={handleDateChange}
            selected={changeUserValues.birthdayDate || undefined}
            maximumDate={getToday()}
          />
        </Pressable>
      )}
    </>
  );
};

export default ProfileScreen;
