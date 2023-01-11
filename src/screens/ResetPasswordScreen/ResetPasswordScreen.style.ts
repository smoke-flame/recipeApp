import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../constants/styles';
import {spacing} from '../../helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
  back: {
    marginBottom: 30,
  },
  title: {
    color: colors.textColor,
    fontWeight: '700',
    fontSize: 32,
    marginBottom: spacing(1),
  },
  subTitle: {
    color: colors.textColor,
    fontWeight: '400',
    fontSize: fontSizes.xl,
    marginBottom: 50,
  },
  input: {
    paddingVertical: 15,
    marginBottom: 30,
  },
});
