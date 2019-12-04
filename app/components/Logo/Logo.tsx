import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';

const Logo = (): JSX.Element => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      style={styles.containerImage}
      source={require('./images/background.png')}
    >
      <Image style={styles.image} resizeMode="contain" source={require('./images/logo.png')} />
    </ImageBackground>

    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
