import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const StartingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.version_1}
        onPress={() => navigation.navigate('Version_1')}>
        <Text style={styles.button_text}>Versie 1 🧟</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.version_2}
        onPress={() => navigation.navigate('Version_2')}>
        <Text style={styles.button_text}>Versie 2 🧟</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  version_1: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#24272F',
    backgroundColor: '#ffffff',
  },
  version_2: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#24272F',
    backgroundColor: '#ffffff',
  },
  button_text: {
    fontSize: 30,
    color: '#24272F',
  },
  button_text_2: {
    fontSize: 30,
    color: '#ffffff',
  }
});

export default StartingScreen;