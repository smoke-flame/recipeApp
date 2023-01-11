import React, {useCallback, useState} from 'react';

import {Text, View} from 'react-native';
import {styles} from './SignInScreen.style';
import UInput from '../../components/UInput';
import {IFormValues} from './types';
import UIButton from '../../components/UIButton';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../constants/styles';

const SignInScreen = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    password: '',
  });

  const handleEmailChange = useCallback(
    (email: string) =>
      setFormValues(prev => ({
        ...prev,
        email,
      })),
    [],
  );
  const handlePasswordChange = useCallback(
    (password: string) =>
      setFormValues(prev => ({
        ...prev,
        password,
      })),
    [],
  );

  const register = useCallback(() => {}, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subTitle}>Welcome back!</Text>
      <UInput
        value={formValues.email}
        onChangeText={handleEmailChange}
        style={styles.input}
        label="Email"
        placeholder="Enter Email"
      />
      <UInput
        value={formValues.password}
        onChangeText={handlePasswordChange}
        style={[styles.input, styles.lastInput]}
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
      />
      <Text style={styles.forgot}>Forgot password?</Text>
      <UIButton
        title="Sign in"
        icon={
          <AntDesignIcon name="arrowright" size={21} color={colors.white} />
        }
        onPress={register}
      />
    </View>
  );
};

export default SignInScreen;
