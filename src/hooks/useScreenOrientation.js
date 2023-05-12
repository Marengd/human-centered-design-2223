import { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

const useScreenOrientation = () => {
  useEffect(() => {
    async function lockOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    lockOrientation();
    return async () => {
      await ScreenOrientation.unlockAsync();
    };
  }, []);
};

export default useScreenOrientation;
