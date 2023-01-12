import React, {useCallback} from 'react';
import {View} from 'react-native';
import UIButton from '../../components/UIButton';
import {Auth} from 'aws-amplify';
import {useTypedDispatch} from '../../hooks/useTypedDispatch';
import {setUser} from '../../store/user/userSlice';

const ProfileScreen = () => {
  const dispatch = useTypedDispatch();

  const logout = useCallback(async () => {
    await Auth.signOut();
    dispatch(setUser(null));
  }, [dispatch]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
      }}>
      <UIButton title="Sign Out" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
