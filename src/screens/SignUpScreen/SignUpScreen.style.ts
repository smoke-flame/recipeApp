import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
  back: {
    marginBottom: 30,
  },
  title: {
    color: colors.textColor,
    fontWeight: '700',
    fontSize: 28,
    marginBottom: spacing(1),
  },
  subTitle: {
    color: colors.textColor,
    fontWeight: '400',
    fontSize: fontSizes.sm,
    marginBottom: 30,
    maxWidth: 230,
  },
  input: {
    paddingVertical: 15,
    marginBottom: 20,
  },
  confirm: {
    color: '#FF9C00',
    fontSize: fontSizes.sm,
    marginVertical: 10,
    textAlign: 'center',
  },
  orWrapper: {
    position: 'relative',
    height: 14,
    marginTop: spacing(2.75),
    marginBottom: spacing(2.75),
    flexDirection: 'row',
    justifyContent: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  orText: {
    textAlign: 'center',
    position: 'relative',
    color: colors.gray,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    fontSize: fontSizes.sm,
    lineHeight: fontSizes.sm,
  },
  orLine: {
    position: 'absolute',
    height: 1,
    width: '100%',
    backgroundColor: colors.gray,
    top: 7,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 25,
  },
  icon: {
    width: 54,
    height: 54,
  },
  iconWrapper: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
    elevation: 10,
  },
  firstIconWrapper: {
    marginRight: spacing(3),
  },
  footerText: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: fontSizes.md,
  },
  link: {
    color: '#FF9C00',
  },
});
