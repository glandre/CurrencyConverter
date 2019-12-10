import { StyleSheet, Dimensions, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import theme from '../../theme';

interface Style {
  container: ViewStyle;
  imageContainer: ViewStyle;
  imageBackground: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

const backgroundImageWidth = Dimensions.get('window').width / 2;

export const largeBackgroundImageWidth = backgroundImageWidth;
export const largeImageWidth = backgroundImageWidth / 2;

export const smallBackgroundImageWidth = backgroundImageWidth / 2;
export const smallImageWidth = backgroundImageWidth / 4;

export default StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageContainer: {
    width: largeBackgroundImageWidth,
    height: largeBackgroundImageWidth,
  },
  imageBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: largeImageWidth,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: theme.white,
  },
});
