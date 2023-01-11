import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../../../constants/styles';
import {spacing} from '../../../../helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    marginBottom: spacing(1),
  },
  ingredientsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: spacing(2),
  },
  ingredients: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    color: colors.titleColor,
  },
  ingredientsCount: {
    fontSize: fontSizes.sm,
    fontWeight: '400',
    color: colors.titleColor,
  },
  ingredientList: {
    paddingHorizontal: 15,
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing(1),
  },
  ingredientLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ingredientImageWrapper: {
    width: 50,
    height: 50,
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginRight: spacing(1),
  },
  ingredientImage: {
    width: '100%',
    aspectRatio: 1,
  },
  ingredientName: {
    fontSize: fontSizes.md,
    fontWeight: '600',
    color: colors.titleColor,
    maxWidth: '80%',
  },
});
