import React from 'react';
import { View, Text, TouchableHighlight, TextInput, TextInputProps } from 'react-native';
import { func, string, bool } from 'prop-types';
import color from 'color';
import styles, { variables } from './styles';

const InputWithButton = (props: Props): JSX.Element => {
  const { buttonText, editable = true, onPress } = props;

  const underlayColor = color(variables.buttonBackgroundColorBase)
    .darken(variables.buttonBackgroundColorModifier)
    .toString();

  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: func,
  buttonText: string,
  editable: bool,
};

interface Props extends TextInputProps {
  buttonText: string;
  onPress: () => void;
}

export default InputWithButton;
