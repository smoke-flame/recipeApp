import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  userBlock: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInitial: {
    color: colors.white,
    fontSize: fontSizes.xl,
    fontWeight: '500',
  },
});
