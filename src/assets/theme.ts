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
    ...Theme.colors,
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

export const useAppTheme = (): TAppTheme => {
  return AppTheme;
};
