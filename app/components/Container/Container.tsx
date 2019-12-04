import React, { FC } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { node } from 'prop-types';
import styles from './styles';

const dismissKeyboard = (): void => Keyboard.dismiss();

const Container: FC<{}> = ({ children }) => (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: node,
};

export default Container;
