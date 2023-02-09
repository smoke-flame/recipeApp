import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing(1),
  },
  headerText: {
    color: colors.light,
  },
  headerTitle: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    color: colors.titleColor,
  },
  list: {
    paddingHorizontal: 15,
  },
  step: {
    marginBottom: spacing(2),
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  stepTitle: {
    fontSize: fontSizes.sm,
    fontWeight: '600',
    marginBottom: spacing(1),
  },
  stepText: {
    fontSize: fontSizes.sm,
    color: colors.light,
  },
});
