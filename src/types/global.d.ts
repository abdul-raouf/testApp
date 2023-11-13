import {TAppThemeColors, TAppTheme} from '@assets/theme';

declare global {
  namespace AppTheme {
    type TColors = keyof TAppThemeColors;
    type ThemeType = {theme?: TAppTheme};
  }
}
