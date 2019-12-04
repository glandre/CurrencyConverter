import React from 'react';
import { Image, Text, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import { string, func } from 'prop-types';
import styles from './styles';

const ClearButton = ({ onPress, text }: Props): JSX.Element => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

ClearButton.propTypes = {
  onPress: func.isRequired,
  text: string.isRequired,
};

export default ClearButton;
