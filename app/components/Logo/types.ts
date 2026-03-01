import { EmitterSubscription, Animated } from 'react-native';

type KeyboardListener = EmitterSubscription | null;

export type Attributes = {
  keyboardShowListener: KeyboardListener;
  keyboardHideListener: KeyboardListener;
  containerImageWidth: Animated.Value;
  imageWidth: Animated.Value;
};

export type VoidFunction = () => void;
