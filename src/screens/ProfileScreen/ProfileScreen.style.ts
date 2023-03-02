import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 20,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  gender: {
    marginBottom: spacing(2),
  },
  datePicker: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.7)',
  },
  dateInput: {},
  dateLabel: {
    fontSize: fontSizes.md,
    marginBottom: spacing(0.5),
    color: colors.textColor,
  },
  dateText: {
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
});
