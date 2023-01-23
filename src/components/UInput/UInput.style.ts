import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    fontSize: fontSizes.md,
    fontWeight: '400',
    color: colors.textColor,
    borderRadius: 10,
  },
  overlayIcon: {
    position: 'absolute',
    top: '50%',
    left: 8,
    width: 16,
    transform: [{translateY: -13}],
  },
  inputPadding: {
    paddingLeft: 32,
  },
  label: {
    fontSize: fontSizes.md,
    marginBottom: spacing(1.5),
    color: colors.textColor,
  },
});
