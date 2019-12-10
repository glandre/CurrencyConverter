import React, { useRef, useEffect } from 'react';
import {
  Animated,
  ImageBackground,
  Keyboard,
  View,
  Text,
  Platform,
  KeyboardEventName,
} from 'react-native';
import styles, {
  largeBackgroundImageWidth,
  largeImageWidth,
  smallBackgroundImageWidth,
  smallImageWidth,
} from './styles';
import { Attributes } from './types';

const ANIMATION_DURATION = 250;

const Logo = (): JSX.Element => {
  const ref = useRef<Attributes>({
    keyboardShowListener: null,
    keyboardHideListener: null,
    containerImageWidth: new Animated.Value(largeBackgroundImageWidth),
    imageWidth: new Animated.Value(largeImageWidth),
  });

  useEffect((): VoidFunction => {
    // did mount:
    let showEventType: KeyboardEventName = 'keyboardWillShow';
    let hideEventType: KeyboardEventName = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      showEventType = 'keyboardDidShow';
      hideEventType = 'keyboardDidHide';
    }

    const keyboardShowListener = Keyboard.addListener(showEventType, keyboardShow);
    const keyboardHideListener = Keyboard.addListener(hideEventType, keyboardHide);

    // will unmount:
    return (): void => {
      if (keyboardShowListener) keyboardShowListener.remove();
      if (keyboardHideListener) keyboardHideListener.remove();
    };
  }, []);

  const keyboardShow = (): void => {
    Animated.parallel([
      Animated.timing(ref.current.imageWidth, {
        toValue: smallImageWidth,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(ref.current.containerImageWidth, {
        toValue: smallBackgroundImageWidth,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const keyboardHide = (): void => {
    Animated.parallel([
      Animated.timing(ref.current.imageWidth, {
        toValue: largeImageWidth,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(ref.current.containerImageWidth, {
        toValue: largeBackgroundImageWidth,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  // render:
  const containerImageStyle = [
    styles.imageContainer,
    {
      width: ref.current.containerImageWidth,
    },
  ];
  const imageStyle = [
    styles.image,
    {
      width: ref.current.imageWidth,
    },
  ];

  return (
    <View style={styles.container}>
      <Animated.View style={containerImageStyle}>
        <ImageBackground
          resizeMode="contain"
          style={styles.imageBackground}
          source={require('./images/background.png')}
        >
          <Animated.Image
            style={imageStyle}
            resizeMode="contain"
            source={require('./images/logo.png')}
          />
        </ImageBackground>
      </Animated.View>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

export default Logo;
