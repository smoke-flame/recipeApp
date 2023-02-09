import React, {FC} from 'react';
import {FullRecipeScreen, HomeScreen} from 'screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'router/types';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const HomeNavigation: FC = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="Feed" component={HomeScreen} />
    <HomeStack.Screen name="FullRecipe" component={FullRecipeScreen} />
  </HomeStack.Navigator>
);
