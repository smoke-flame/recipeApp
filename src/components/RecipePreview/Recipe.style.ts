import {StyleSheet} from 'react-native';
import {colors, fontSizes} from 'constants/styles';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  topContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  topWrapper: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  price: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: colors.textColor,
    fontSize: fontSizes.md,
  },
  healthy: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
