import React from 'react';
import {CustomTabBar} from 'router/components/CustomTabBar';
import {HomeNavigation} from 'router/components/HomeNavigation/HomeNavigation';
import {FavoriteScreen, ProfileScreen, SearchScreen} from 'screens';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconsLibrary} from 'router/types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const AuthorizedNavigation = () => {
  const tabBarIcon = (route: RouteProp<ParamListBase>, color: string) => {
    const iconsLibrary: IconsLibrary = {
      Home: <MaterialIcon name="home" size={33} color={color} />,
      Search: <FeatherIcon name="search" size={28} color={color} />,
      Favorites: <FontAwesomeIcon name="bookmark" size={27} color={color} />,
      Profile: <FontAwesomeIcon name="user" size={27} color={color} />,
    };
    return iconsLibrary[route.name];
  };
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
