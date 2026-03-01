import React, { Component, ReactNode } from 'react';
import {
  Animated,
  ImageBackground,
  Keyboard,
  View,
  Text,
  EmitterSubscription,
  Platform,
} from 'react-native';
import styles, {
  largeBackgroundImageWidth,
  largeImageWidth,
  smallBackgroundImageWidth,
  smallImageWidth,
} from './styles';

const ANIMATION_DURATION = 250;

type KeyboardListener = EmitterSubscription | null;

class Logo extends Component {
  keyboardShowListener: KeyboardListener;

  keyboardHideListener: KeyboardListener;

  containerImageWidth: Animated.Value;

  imageWidth: Animated.Value;

  constructor(props: {}) {
    super(props);
    this.keyboardShowListener = null;
    this.keyboardHideListener = null;
    this.containerImageWidth = new Animated.Value(largeBackgroundImageWidth);
    this.imageWidth = new Animated.Value(largeImageWidth);
  }

  componentDidMount(): void {
    let showEventType: 'keyboardWillShow' | 'keyboardDidShow' = 'keyboardWillShow';
    let hideEventType: 'keyboardWillHide' | 'keyboardDidHide' = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      showEventType = 'keyboardDidShow';
      hideEventType = 'keyboardDidHide';
    }

    this.keyboardShowListener = Keyboard.addListener(showEventType, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideEventType, this.keyboardHide);
  }

  componentWillUnmount(): void {
    if (this.keyboardShowListener) this.keyboardShowListener.remove();
    if (this.keyboardHideListener) this.keyboardHideListener.remove();
  }

  keyboardShow = (): void => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: smallImageWidth,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: smallBackgroundImageWidth,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = (): void => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: largeImageWidth,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: largeBackgroundImageWidth,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render(): ReactNode {
    const containerImageStyle = [
      styles.imageContainer,
      {
        width: this.containerImageWidth,
      },
    ];
    const imageStyle = [
      styles.image,
      {
        width: this.imageWidth,
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
  }
}

export default Logo;
