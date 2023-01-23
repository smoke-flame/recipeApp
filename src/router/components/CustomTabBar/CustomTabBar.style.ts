import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styles';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  tabBar: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    width: '100%',
    height: 4,
    borderRadius: 5,
    backgroundColor: 'transparent',
    transform: [{translateY: 10}],
  },
  activeBorder: {
    backgroundColor: colors.primary,
  },
});
