import { StyleSheet, ViewStyle, ImageStyle, Platform, StatusBar } from 'react-native';

interface Styles {
  container: ViewStyle;
  button: ViewStyle;
  icon: ImageStyle;
}

const containerPaddingTop = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create<Styles>({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingTop: containerPaddingTop,
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});

export default styles;
