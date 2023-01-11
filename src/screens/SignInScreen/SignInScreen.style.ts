import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../constants/styles';
import {spacing} from '../../helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
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
  lastInput: {
    marginBottom: 20,
  },
  forgot: {
    color: '#FF9C00',
    fontSize: fontSizes.sm,
    marginBottom: 25,
  },
});
