import React, {FC, ReactNode} from 'react';

import {ButtonProps, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './UIButton.style';

interface IProps extends ButtonProps {
  icon?: ReactNode;
}

const UIButton: FC<IProps> = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width: '100%'}}>
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
          {icon && <View style={styles.icon}>{icon}</View>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UIButton;
