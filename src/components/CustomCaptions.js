import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { timeToMillis } from '../utils/time';

const CustomCaptions = ({ currentTime, captions }) => {
  const currentTimeMillis = currentTime * 1000;
  const currentCaption = captions.find(
    (caption) =>
      currentTimeMillis >= timeToMillis(caption.start) &&
      currentTimeMillis <= timeToMillis(caption.end)
  );

  return (
    <View style={styles.container}>
      {currentCaption && <Text style={styles.caption}>{currentCaption.text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    alignItems: 'center'
  },
  caption: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
    maxWidth: '90%', 
  },
});


export default CustomCaptions;

export { timeToMillis };