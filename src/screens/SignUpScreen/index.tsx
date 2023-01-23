import React, {useCallback, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './SignUpScreen.style';
import UInput from 'components/UInput';
import {IFormValues} from './types';
import UIButton from 'components/UIButton';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from 'constants/styles';
import GoogleIcon from 'assets/img/google.svg';
import FacebookIcon from 'assets/img/facebook.svg';
import {Link} from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useTypedNavigation} from 'hooks/useTypedNavigation';
import {Auth} from 'aws-amplify';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const SignUpScreen = () => {
  const navigation = useTypedNavigation();
  const [codeSent, setCodeSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
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

  const back = useCallback(() => navigation.goBack(), [navigation]);

  const moveToConfirm = useCallback(() => setCodeSent(true), []);

  const handleSocialAuth = useCallback(() => alert('Under constructions'), []);

  const signUp = useCallback(async () => {
    const {name, confirmPassword, password, email} = formValues;
    if (password !== confirmPassword) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: "Confirm password doesn't match",
      });
      return;
    }
    try {
      setLoading(true);
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Confirmation code has been sent to your email address.',
        autoClose: 2000,
      });
      moveToConfirm();
    } catch (e) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Something went wrong',
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  }, [formValues, moveToConfirm]);

  const confirmAccount = useCallback(async () => {
    const {email, code} = formValues;
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, code);
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: "You've successfully signed up.",
        autoClose: 2000,
      });
      navigation.navigate('SignIn');
    } catch (e) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Wrong email or code.',
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  }, [formValues]);

  if (codeSent) {
    return (
      <View style={styles.root}>
        <TouchableOpacity style={styles.back} onPress={back}>
          <Ionicon name="arrow-back" size={21} color={colors.textColor} />
        </TouchableOpacity>
        <Text style={styles.title}>Confirm an account</Text>
        <Text style={styles.subTitle}>
          Please type code that we've just sent on your email address
        </Text>
        <UInput
          value={formValues.email}
          onChangeText={value => handleInputChange('email', value)}
          style={styles.input}
          label="Email"
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <UInput
          value={formValues.code}
          onChangeText={value => handleInputChange('code', value)}
          style={styles.input}
          label="Code"
          placeholder="Enter Code"
          keyboardType="numeric"
        />
        <UIButton
          title="Confirm Account"
          icon={
            <AntDesignIcon name="arrowright" size={21} color={colors.white} />
          }
          onPress={confirmAccount}
          isLoading={loading}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subTitle}>
        Let’s help you set up your account, it won’t take long.
      </Text>
      <UInput
        value={formValues.name}
        onChangeText={value => handleInputChange('name', value)}
        style={styles.input}
        label="Name"
        placeholder="Enter Name"
      />
      <UInput
        value={formValues.email}
        onChangeText={value => handleInputChange('email', value)}
        style={styles.input}
        label="Email"
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <UInput
        value={formValues.password}
        onChangeText={value => handleInputChange('password', value)}
        style={styles.input}
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
      />
      <UInput
        value={formValues.confirmPassword}
        onChangeText={value => handleInputChange('confirmPassword', value)}
        style={styles.input}
        label="Confirm Password"
        placeholder="Retype Password"
        secureTextEntry
      />
      <UIButton
        title="Sign up"
        icon={
          <AntDesignIcon name="arrowright" size={21} color={colors.white} />
        }
        onPress={signUp}
        isLoading={loading}
      />
      <TouchableOpacity onPress={moveToConfirm}>
        <Text style={styles.confirm}>Confirm existing account</Text>
      </TouchableOpacity>
      <View style={styles.orWrapper}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or Sign up With</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleSocialAuth}
          style={[styles.iconWrapper, styles.firstIconWrapper]}>
          <GoogleIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSocialAuth} style={styles.iconWrapper}>
          <FacebookIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        Already a member?{' '}
        <Link to="/SignIn" style={styles.link}>
          Sign in
        </Link>
      </Text>
    </ScrollView>
  );
};

export default SignUpScreen;
