import {TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {colors} from 'constants/styles';
import {styles} from './CustomTabBar.style';

export const CustomTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => (
  <View style={styles.root}>
    {state.routes.map((route, index) => {
      const {options} = descriptors[route.key];
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <TouchableOpacity
          key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          style={styles.tabBar}>
          <View style={styles.tabItem}>
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? colors.primary : colors.inactive,
                size: 40,
              })}
            <View style={[styles.border, isFocused && styles.activeBorder]} />
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
);
