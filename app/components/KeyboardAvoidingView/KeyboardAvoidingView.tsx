import React, { FC } from 'react';
import { KeyboardAvoidingView as KAView, KeyboardAvoidingViewProps } from 'react-native';
import styles from './styles';

const KeyboardAvoidingView: FC<KeyboardAvoidingViewProps> = props => (
  <KAView style={styles.container} {...props} />
);

export default KeyboardAvoidingView;
