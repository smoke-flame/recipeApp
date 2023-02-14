import {TextStyle, ViewStyle} from 'react-native';

export type AvatarSize = 'sm' | 'md' | 'lg';

export type ISizeConfig = {
  [key in AvatarSize]: ViewStyle;
};

export type IFontSizeConfig = {
  [key in AvatarSize]: TextStyle;
};
