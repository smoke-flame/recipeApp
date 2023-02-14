import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Auth} from 'aws-amplify';
import {useTypedDispatch} from 'hooks/useTypedDispatch';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {setUser} from 'store/user/userSlice';
import UserAvatar from 'components/UserAvatar';
import UInput from 'components/UInput';
import UIButton from 'components/UIButton';
import {initialValues} from 'screens/ProfileScreen/constants';
import {IChangeUserValues} from 'screens/ProfileScreen/types';
import {styles} from './ProfileScreen.style';

const ProfileScreen = () => {
  const dispatch = useTypedDispatch();
  const user = useTypedSelector(state => state.userReducer.user);
  const [changeUserValues, setChangeUserValues] =
    useState<IChangeUserValues>(initialValues);

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

  useEffect(() => {
    if (!user) return;

    const {name, id, image, email} = user;
    setChangeUserValues(prev => ({...prev, name, id, image, email}));
    // eslint-disable-next-line
  }, []);

  if (!user) return null;

  return (
    <View style={styles.root}>
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
        <UIButton title="Update Profile" />
      </View>
      <UIButton title="Sign Out" onPress={logout} color="red" />
    </View>
  );
};

export default ProfileScreen;
