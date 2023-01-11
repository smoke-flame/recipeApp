import React, {forwardRef, ReactNode} from 'react';

import {Text, TextInput, TextInputProps, View} from 'react-native';
import {styles} from './UInput.style';
import {colors} from '../../constants/styles';

interface IProps extends TextInputProps {
  label?: string;
  leftIcon?: ReactNode;
}

const UInput = forwardRef<TextInput, IProps>(
  (
    {secureTextEntry, style, value, onChangeText, placeholder, leftIcon, label},
    ref,
  ) => {
    return (
      <View style={styles.root}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={{position: 'relative'}}>
          <TextInput
            secureTextEntry={secureTextEntry}
            value={value}
            style={[styles.input, style, leftIcon ? styles.inputPadding : {}]}
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholder}
            onChangeText={onChangeText}
            autoCorrect
          />
          {leftIcon && <View style={styles.overlayIcon}>{leftIcon}</View>}
        </View>
      </View>
    );
  },
);

export default UInput;
