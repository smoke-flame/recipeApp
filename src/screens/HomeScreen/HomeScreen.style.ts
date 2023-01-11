import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../constants/styles';
import {spacing} from '../../helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing(2),
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greetings: {
    fontSize: fontSizes.xxl,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing(1),
  },
  whatToCook: {
    fontSize: fontSizes.md,
    color: colors.light,
    fontWeight: '400',
  },
  input: {
    marginBottom: spacing(1),
  },
  recipeItem: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: spacing(1),
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - 250,
  },
  emptyText: {
    fontSize: fontSizes.xxl,
    color: colors.titleColor,
    fontWeight: '500',
    textAlign: 'center',
  },
});
