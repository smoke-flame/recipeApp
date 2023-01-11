import React, {useCallback, useState} from 'react';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './SignUpScreen.style';
import UInput from '../../components/UInput';
import {IFormValues} from './types';
import UIButton from '../../components/UIButton';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../constants/styles';
// @ts-ignore
import GoogleIcon from '../../assets/img/google.svg';
// @ts-ignore
import FacebookIcon from '../../assets/img/facebook.svg';
import {Link} from '@react-navigation/native';

const SignUpScreen = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
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

  const handleSocialAuth = useCallback(() => alert('Under constructions'), []);

  const signUp = useCallback(() => alert('Under constructions'), []);

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
      {/*<Text style={styles.forgot}>Forgot password?</Text>*/}
      <UIButton
        title="Sign up"
        icon={
          <AntDesignIcon name="arrowright" size={21} color={colors.white} />
        }
        onPress={signUp}
      />
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
