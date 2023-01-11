import {ReactNode} from 'react';
import {RouteProp} from '@react-navigation/native';

export type IconsLibrary = {[key: string]: ReactNode};

export type RootStackParamList = {
  FullRecipe: {id: number};
  Feed: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
