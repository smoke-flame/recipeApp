import {StyleSheet} from 'react-native';
import {spacing} from 'helpers/spacing';

export const styles = StyleSheet.create({
  root: {
    paddingBottom: 20,
  },
  header: {
    position: 'relative',
    marginBottom: spacing(2),
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topIcons: {
    position: 'absolute',
    zIndex: 10,
    top: 30,
    left: 0,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  back: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255, 0.65)',
    borderWidth: 1,
  },
  recipeImg: {
    width: '100%',
    aspectRatio: 1,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
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
