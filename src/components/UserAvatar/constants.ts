import {IFontSizeConfig, ISizeConfig} from 'components/UserAvatar/types';
import {fontSizes} from 'constants/styles';

export const avatarConfig: ISizeConfig = {
  sm: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  md: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  lg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
};
export const fontSizeConfig: IFontSizeConfig = {
  sm: {
    fontSize: fontSizes.xl,
  },
  md: {
    fontSize: fontSizes.xxl,
  },
  lg: {
    fontSize: 45,
  },
};
