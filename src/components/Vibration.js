import { Vibration } from 'react-native';
import { timeToMillis } from '../utils/time';

const handleVibration = (currentTimeMillis, vibrations, setVibrationIntervalRef) => {
  const currentVibration = vibrations.find(
    (vibration) =>
      currentTimeMillis >= timeToMillis(vibration.start) &&
      currentTimeMillis <= timeToMillis(vibration.end)
  );
  if (currentVibration && !setVibrationIntervalRef().current) {
    const vibrationPattern = [0, 1000, 500, 1000];
    Vibration.vibrate(vibrationPattern, true);
    setVibrationIntervalRef({ current: true });
  } else if (!currentVibration && setVibrationIntervalRef().current) {
    Vibration.cancel();
    setVibrationIntervalRef({ current: null });
  }
};

export default handleVibration;