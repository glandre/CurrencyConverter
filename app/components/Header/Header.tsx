import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { func } from 'prop-types';
import styles from './styles';

const Header = ({ onPress }: Props): JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

interface Props {}

Header.propTypes = {
  onPress: func.isRequired,
};

export default Header;
