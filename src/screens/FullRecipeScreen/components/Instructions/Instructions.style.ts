import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  title: {
    fontSize: fontSizes.xxl,
    fontWeight: '600',
    color: colors.titleColor,
    textAlign: 'center',
    marginBottom: spacing(1),
  },
  list: {
    paddingHorizontal: 15,
  },
  step: {
    fontSize: fontSizes.xl,
    color: colors.textColor,
    marginBottom: spacing(2),
  },
});
