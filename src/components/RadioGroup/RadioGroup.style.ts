import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: fontSizes.md,
    fontWeight: '400',
    color: colors.textColor,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: spacing(1),
  },
  itemText: {
    fontWeight: '400',
    fontSize: fontSizes.md,
    textTransform: 'capitalize',
  },
  activeItem: {
    borderColor: colors.primary,
  },
  activeCircle: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderColor: 'transparent',
    marginRight: spacing(1) + 3,
    marginLeft: 3,
  },
});
