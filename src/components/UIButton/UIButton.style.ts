import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../constants/styles';
import {spacing} from '../../helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.xl,
  },
  icon: {
    marginLeft: spacing(1),
  },
});
