import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    color: colors.titleColor,
    textAlign: 'center',
    marginBottom: spacing(3),
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing(10),
  },
  emptyIcon: {
    marginBottom: 40,
  },
  emptyText: {
    fontSize: fontSizes.xl,
    color: colors.titleColor,
  },
  firstEmptyText: {
    marginBottom: spacing(1),
  },
  link: {
    color: '#FF9C00',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recipeItem: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: spacing(1),
  },
});
