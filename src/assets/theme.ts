import {MD3LightTheme as Theme, configureFonts} from 'react-native-paper';

export const FONTS = {
  Thin: 'Poppins-Thin',
  Regular: 'Poppins-Regular',
  Medium: 'Poppins-SemiBold',
  Bold: 'Poppins-Bold',
  'Italic-Regular': 'Poppins-Italic',
};

const fontsConfig = {
  italic: {fontFamily: FONTS['Italic-Regular'], fontWeight: '400'},
  bold: {fontFamily: FONTS.Bold, fontWeight: '700'},
  regular: {fontFamily: FONTS.Regular, fontWeight: '400'},
  medium: {fontFamily: FONTS.Medium, fontWeight: '600'},
  thin: {fontFamily: FONTS.Thin, fontWeight: '300'},
};

export const AppTheme = {
  ...Theme,
  colors: {
    primary: 'rgb(85, 101, 0)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(210, 239, 78)',
    onPrimaryContainer: 'rgb(24, 30, 0)',
    secondary: 'rgb(92, 97, 69)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(225, 230, 195)',
    onSecondaryContainer: 'rgb(25, 29, 8)',
    tertiary: 'rgb(58, 102, 93)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(189, 236, 224)',
    onTertiaryContainer: 'rgb(0, 32, 27)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 252, 244)',
    onBackground: 'rgb(27, 28, 23)',
    surface: 'rgb(255, 252, 244)',
    onSurface: 'rgb(27, 28, 23)',
    surfaceVariant: 'rgb(227, 227, 211)',
    onSurfaceVariant: 'rgb(70, 72, 60)',
    outline: 'rgb(119, 120, 106)',
    outlineVariant: 'rgb(199, 200, 183)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(48, 49, 43)',
    inverseOnSurface: 'rgb(243, 241, 232)',
    inversePrimary: 'rgb(183, 211, 51)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(247, 244, 232)',
      level2: 'rgb(241, 240, 225)',
      level3: 'rgb(236, 235, 217)',
      level4: 'rgb(235, 234, 215)',
      level5: 'rgb(231, 231, 210)',
    },
    surfaceDisabled: 'rgba(27, 28, 23, 0.12)',
    onSurfaceDisabled: 'rgba(27, 28, 23, 0.38)',
    backdrop: 'rgba(48, 49, 38, 0.4)',
    accentGreen: '#46C779',
    brightGreen: '#07ED6F',
    accentRed: '#FF8989',
    yellow: '#F2BE22',
    transparent: 'transparent',
    white: 'rgb(255, 255, 255)',
  },
  roundness: 2,
  fonts: configureFonts({
    config: {
      fontSize: 16,
      ...fontsConfig,
    },
  }),
};

export type TAppTheme = typeof AppTheme;
export type TAppThemeColors = typeof AppTheme.colors;

export const useAppTheme = (): TAppTheme => AppTheme;
