import { Dimensions, StyleSheet } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 30,
  },
  line: {
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
    height: 5,
    backgroundColor: '#111',
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginTop: 20,
    marginBottom: 'auto',
    marginLeft: 30,
    position: 'relative',
    minWidth: 75,
    minHeight: 75,
    backgroundColor: 'black',
  },
  iconWrapper: {
    marginTop: 30,
    marginLeft: 30,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'lightgrey',
  },
});
