import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import UInput from 'components/UInput';
import {IFormValues, resetStep} from 'screens/ResetPasswordScreen/types';
import UIButton from 'components/UIButton';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from 'constants/styles';
import {useTypedNavigation} from 'hooks/useTypedNavigation';
import {Auth} from 'aws-amplify';
import {AwsAuthError} from 'types/errors';
import {errorAlert, successAlert} from 'libs/notifications';
import {styles} from './ResetPasswordScreen.style';

const ResetPasswordScreen = () => {
  const navigation = useTypedNavigation();
  const [step, setStep] = useState<resetStep>('email');
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    password: '',
    code: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (key: keyof IFormValues, value: string) => {
      setFormValues(prev => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const back = useCallback(() => navigation.goBack(), [navigation]);

  const sendEmail = useCallback(async () => {
    try {
      setIsLoading(true);
      await Auth.forgotPassword(formValues.email);
      successAlert('Confirmation code has been sent to your email address.');
      setStep('code');
    } catch (e) {
      const {message} = e as AwsAuthError;
      errorAlert(message);
    } finally {
      setIsLoading(false);
    }
  }, [formValues.email]);

  const proceedWithCode = useCallback(() => setStep('password'), []);

  const sendPassword = useCallback(async () => {
    try {
      setIsLoading(true);
      await Auth.forgotPasswordSubmit(
        formValues.email,
        formValues.code,
        formValues.password,
      );
      successAlert("You've successfully changed your password.");
      navigation.navigate('SignIn');
    } catch (e) {
      const {message} = e as AwsAuthError;
      errorAlert(message);
    } finally {
      setIsLoading(false);
    }
  }, [navigation, formValues]);

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
            isLoading={isLoading}
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
            onPress={proceedWithCode}
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
            secureTextEntry
          />
          <UIButton
            title="Set New Password"
            icon={
              <AntDesignIcon name="arrowright" size={21} color={colors.white} />
            }
            onPress={sendPassword}
            isLoading={isLoading}
          />
        </>
      )}
    </View>
  );
};

export default ResetPasswordScreen;
