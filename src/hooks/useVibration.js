import { useEffect } from 'react';
import { Vibration } from 'react-native';

const useVibration = () => {
  useEffect(() => {
    return () => {
      Vibration.cancel();
    };
  }, []);
};

export default useVibration;
