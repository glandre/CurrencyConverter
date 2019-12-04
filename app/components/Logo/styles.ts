import { StyleSheet, Dimensions, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import theme from '../../theme';

interface Style {
  container: ViewStyle;
  containerImage: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

const backgroundImageWidth = Dimensions.get('window').width / 2;
const imageWidth = backgroundImageWidth / 2;

export default StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: backgroundImageWidth,
    height: backgroundImageWidth,
  },
  image: {
    width: imageWidth,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: theme.white,
  },
});
