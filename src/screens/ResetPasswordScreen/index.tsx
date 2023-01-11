import React, {useCallback, useState} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ResetPasswordScreen.style';
import UInput from '../../components/UInput';
import {IFormValues, resetStep} from './types';
import UIButton from '../../components/UIButton';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/styles';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';

// Ionicons
const ResetPasswordScreen = () => {
  const navigate = useTypedNavigation();
  const [step, setStep] = useState<resetStep>('email');
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    password: '',
    code: '',
  });

  const handleInputChange = useCallback(
    (key: keyof IFormValues, value: string) => {
      setFormValues(prev => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const back = useCallback(() => navigate.goBack(), [navigate]);

  const sendEmail = useCallback(() => setStep('code'), []);
  const sendCode = useCallback(() => setStep('password'), []);
  const sendPassword = useCallback(() => alert('success'), []);

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.back} onPress={back}>
        <Ionicon name="arrow-back" size={21} color={colors.textColor} />
      </TouchableOpacity>
      <Text style={styles.title}>Forgot password?</Text>
      <Text style={styles.subTitle}>Restore it in 3 simple steps</Text>

      {step === 'email' && (
        <>
          <UInput
            value={formValues.email}
            onChangeText={value => handleInputChange('email', value)}
            style={styles.input}
            label="Email"
            placeholder="Enter Email"
          />
          <UIButton
            title="Send Code"
            icon={
              <AntDesignIcon name="arrowright" size={21} color={colors.white} />
            }
            onPress={sendEmail}
          />
        </>
      )}
      {step === 'code' && (
        <>
          <UInput
            value={formValues.code}
            onChangeText={value => handleInputChange('code', value)}
            style={styles.input}
            label="Code"
            placeholder="Enter Code"
          />
          <UIButton
            title="Confirm Code"
            icon={
              <AntDesignIcon name="arrowright" size={21} color={colors.white} />
            }
            onPress={sendCode}
          />
        </>
      )}
      {step === 'password' && (
        <>
          <UInput
            value={formValues.password}
            onChangeText={value => handleInputChange('password', value)}
            style={styles.input}
            label="Password"
            placeholder="Enter New Password"
          />
          <UIButton
            title="Set New Password"
            icon={
              <AntDesignIcon name="arrowright" size={21} color={colors.white} />
            }
            onPress={sendPassword}
          />
        </>
      )}
    </View>
  );
};

export default ResetPasswordScreen;
