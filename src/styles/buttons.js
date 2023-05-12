import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const buttonStyles = StyleSheet.create({
  button: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: 'green',
  },
  secondaryButton: {
    backgroundColor: 'red',
  },
});

export default buttonStyles;
