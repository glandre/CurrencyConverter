import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import theme from '../../theme';

interface Style {
  container: ViewStyle;
  containerDisabled: ViewStyle;
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
  input: ViewStyle;
  border: ViewStyle;
}

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export const variables = {
  buttonBackgroundColorBase: theme.white,
  buttonBackgroundColorModifier: 0.1,
};

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: theme.white,
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: theme.lightGray,
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.white,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: theme.primaryBlue,
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: theme.inputText,
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: theme.border,
  },
});

export default styles;
