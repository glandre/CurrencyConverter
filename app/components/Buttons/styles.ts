import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: theme.white,
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});

interface Styles {
  container: ViewStyle;
  wrapper: ViewStyle;
  icon: ImageStyle;
  text: TextStyle;
}

export default styles;
