import React, {FC} from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  FavoriteScreen,
  FullRecipeScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  SignInScreen,
  WelcomeScreen,
} from '../screens';
import {CustomTabBar} from './CustomTabBar';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {IconsLibrary, RootStackParamList} from './types';
import SignUpScreen from '../screens/SignUpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import {useTypedSelector} from '../hooks/useTypedSelector';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const WelcomeStack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigation: FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Feed" component={HomeScreen} />
      <HomeStack.Screen name="FullRecipe" component={FullRecipeScreen} />
    </HomeStack.Navigator>
  );
};

const GuestNavigation: FC = () => {
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

const Navigator: FC = () => {
  const user = useTypedSelector(state => state.userReducer.user);

  const tabBarIcon = (route: RouteProp<ParamListBase>, color: string) => {
    const iconsLibrary: IconsLibrary = {
      Home: <MaterialIcon name="home" size={33} color={color} />,
      Search: <FeatherIcon name="search" size={28} color={color} />,
      Favorites: <FontAwesomeIcon name="bookmark" size={27} color={color} />,
      Profile: <FontAwesomeIcon name="user" size={27} color={color} />,
    };
    return iconsLibrary[route.name];
  };

  if (!user) {
    return <GuestNavigation />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => tabBarIcon(route, color),
        })}
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
