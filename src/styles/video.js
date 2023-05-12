import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  videoContainer: {
    position: 'relative',
    width: Math.max(width, height),
    height: Math.min(width, height),
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
