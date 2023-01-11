import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../../constants/styles';
import {spacing} from '../../helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    height: '100%',
  },
  container: {
    flex: 1,
    paddingVertical: 100,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
  },
  welcomeText: {
    color: colors.white,
    fontSize: fontSizes.xl,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 64,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 64,
    marginBottom: spacing(2),
  },
  subTitle: {
    color: colors.white,
    fontSize: fontSizes.xl,
    marginBottom: 64,
  },
  button: {
    maxWidth: 250,
    width: '100%',
  },
});
