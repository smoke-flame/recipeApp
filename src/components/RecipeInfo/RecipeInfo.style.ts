import {colors, fontSizes} from '../../constants/styles';
import {spacing} from '../../helpers/spacing';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  labelContainer: {
    width: '90%',
    backgroundColor: 'rgba(37,38,37, 0.85)',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  labelText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: '500',
    marginBottom: spacing(1),
    maxWidth: '90%',
  },
  description: {
    color: colors.light,
    fontSize: fontSizes.sm,
  },
});
