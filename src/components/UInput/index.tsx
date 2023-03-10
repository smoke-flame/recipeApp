import React, {forwardRef, ReactNode} from 'react';

import {Text, TextInput, TextInputProps, View} from 'react-native';
import {colors} from 'constants/styles';
import {styles} from './UInput.style';

interface IProps extends TextInputProps {
  label?: string;
  leftIcon?: ReactNode;
  disabled?: boolean;
}

const UInput = forwardRef<TextInput, IProps>(
  (
    {
      disabled,
      secureTextEntry,
      style,
      value,
      onChangeText,
      placeholder,
      leftIcon,
      label,
      ...rest
    },
    ref,
  ) => (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={{position: 'relative'}}>
        <TextInput
          secureTextEntry={secureTextEntry}
          value={value}
          style={[
            styles.input,
            style,
            leftIcon ? styles.inputPadding : {},
            disabled ? styles.disabled : {},
          ]}
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          onChangeText={onChangeText}
          autoCorrect
          editable={!disabled}
          {...rest}
        />
        {leftIcon && <View style={styles.overlayIcon}>{leftIcon}</View>}
      </View>
    </View>
  ),
);

export default UInput;
