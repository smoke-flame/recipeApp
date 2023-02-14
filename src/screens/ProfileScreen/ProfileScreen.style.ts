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
  avatarContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  userName: {
    marginTop: spacing(2),
    fontSize: fontSizes.xxl,
    fontWeight: '500',
    color: colors.textColor,
  },
  userEmail: {
    fontSize: fontSizes.xl,
    color: colors.light,
  },
  changeForm: {
    marginVertical: spacing(3),
  },
  input: {
    marginBottom: spacing(2),
  },
});
