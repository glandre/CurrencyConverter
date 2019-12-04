import { StyleSheet, TextStyle } from 'react-native';
import theme from '../../theme';

interface Styles {
  smallText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  smallText: {
    color: theme.white,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;
