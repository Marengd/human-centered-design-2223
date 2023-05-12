// Import dependencies
import React, { useState } from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';

import styles from '../../styles/video';
import CustomCaptions from '../../components/CustomCaptions';
import { Captions_The_Last_Of_Us_V2 as captions } from '../../data/version_2/Captions_The_Last_Of_Us_V2';
import { Haptic_The_Last_Of_Us_V2 as hapticFeedbacks } from '../../data/version_2/Haptic_The_Last_Of_Us_V2';
import { Vibration_The_Last_Of_Us_V2 as vibrations } from '../../data/version_2/Vibration_The_Last_Of_Us_V2';
import video_fragement_1 from '../../../assets/fragments/The_Last_Of_Us_Fragment_1.mp4';
import handleHapticFeedback from '../../components/HapticFeedback';
import handleVibration from '../../components/Vibration';
import useScreenOrientation from '../../hooks/useScreenOrientation';
import useVibration from '../../hooks/useVibration';

const Version_2 = ({ navigation }) => {
  
  const [currentTime, setCurrentTime] = useState(0);
  const [vibrationIntervalRef, setVibrationIntervalRef] = useState({ current: null });

  useScreenOrientation();
  useVibration();

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={video_fragement_1}
          shouldPlay
          style={styles.video}
          resizeMode={Video.RESIZE_MODE_COVER}
          onPlaybackStatusUpdate={async (status) => {
            setCurrentTime(status.positionMillis / 1000);
            const currentTimeMillis = status.positionMillis;
            handleVibration(currentTimeMillis, vibrations, () => vibrationIntervalRef);
            await handleHapticFeedback(currentTimeMillis, hapticFeedbacks);
            if (status.didJustFinish) {
              navigation.goBack();
            }
          }}
          progressUpdateIntervalMillis={100}
          onError={(error) => console.error(error)}
        />
        <CustomCaptions currentTime={currentTime} captions={captions} />
      </View>
    </View>
  );
};

export default Version_2;