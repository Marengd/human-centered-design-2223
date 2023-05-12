import * as Haptics from 'expo-haptics';
import { timeToMillis } from '../utils/time';


const handleHapticFeedback = async (currentTimeMillis, hapticFeedbacks) => {
    const currentHapticFeedback = hapticFeedbacks.find(
      (haptic) =>
        currentTimeMillis >= timeToMillis(haptic.start) &&
        currentTimeMillis <= timeToMillis(haptic.end)
    );
    if (currentHapticFeedback) {
      await Haptics.impactAsync(currentHapticFeedback.type);
    }
  };

export default handleHapticFeedback;