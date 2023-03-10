import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import UInput from 'components/UInput';
import {IFormValues} from 'screens/SignInScreen/types';
import UIButton from 'components/UIButton';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from 'constants/styles';
import GoogleIcon from 'assets/img/google.svg';
import FacebookIcon from 'assets/img/facebook.svg';
import {Link} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import {setUser} from 'store/user/userSlice';
import {useTypedDispatch} from 'hooks/useTypedDispatch';
import {User} from 'models';
import {AuthUser} from 'types/user';
import {AwsAuthError} from 'types/errors';
import {errorAlert, successAlert} from 'libs/notifications';
import {styles} from './SignInScreen.style';

const SignInScreen = () => {
  const dispatch = useTypedDispatch();
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (key: keyof IFormValues, value: string) => {
      setFormValues(prev => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const handleSocialAuth = useCallback(
    () => errorAlert('Under constructions'),
    [],
  );

  const signIn = useCallback(async () => {
    const {email, password} = formValues;
    try {
      setLoading(true);
      const user: AuthUser = await Auth.signIn(email, password);
      successAlert("You've successfully logged in");
      const {name, email: userEmail, sub} = user.attributes;
      const [dbUser] = await DataStore.query(User, usr => usr.userId.eq(sub));
      if (dbUser) {
        dispatch(setUser(dbUser));
        return;
      }
      const newUser = await DataStore.save(
        new User({
          userId: sub,
          name,
          email: userEmail,
          likedRecipes: [],
          image: null,
        }),
      );
      dispatch(setUser(newUser));
    } catch (e) {
      const {message} = e as AwsAuthError;
      errorAlert(message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, formValues]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subTitle}>Welcome back!</Text>
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
        style={[styles.input, styles.lastInput]}
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
      />
      <Link to="/ResetPassword" style={styles.forgot}>
        Forgot password?
      </Link>
      <UIButton
        title="Sign in"
        icon={
          <AntDesignIcon name="arrowright" size={21} color={colors.white} />
        }
        onPress={signIn}
        isLoading={loading}
      />
      <View style={styles.orWrapper}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or Sign in With</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleSocialAuth}
          style={[styles.iconWrapper, styles.firstIconWrapper]}>
          <GoogleIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={handleSocialAuth}>
          <FacebookIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        Don???t have an account?{' '}
        <Link to="/SignUp" style={styles.link}>
          Sign up
        </Link>
      </Text>
    </View>
  );
};

export default SignInScreen;
