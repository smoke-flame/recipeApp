import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  ResetPasswordScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from 'screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'router/types';

const WelcomeStack = createNativeStackNavigator<RootStackParamList>();

export const GuestNavigation: FC = () => {
  return (
    <NavigationContainer>
      <WelcomeStack.Navigator screenOptions={{headerShown: false}}>
        <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
        <WelcomeStack.Screen name="SignIn" component={SignInScreen} />
        <WelcomeStack.Screen name="SignUp" component={SignUpScreen} />
        <WelcomeStack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
        />
      </WelcomeStack.Navigator>
    </NavigationContainer>
  );
};
