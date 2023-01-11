import React, {FC, ReactNode, useCallback} from 'react';

import {
  ActivityIndicator,
  ButtonProps,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './UIButton.style';
import {colors} from '../../constants/styles';

interface IProps extends ButtonProps {
  icon?: ReactNode;
  isLoading?: boolean;
}

const UIButton: FC<IProps> = ({isLoading, title, icon, onPress}) => {
  const handlePress = useCallback(
    (e: GestureResponderEvent) => {
      if (isLoading) {
        return;
      }
      onPress && onPress(e);
    },
    [isLoading, onPress],
  );
  return (
    <TouchableOpacity onPress={handlePress} style={{width: '100%'}}>
      <View style={styles.root}>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <>
              <Text style={styles.text}>{title}</Text>
              {icon && <View style={styles.icon}>{icon}</View>}
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UIButton;
