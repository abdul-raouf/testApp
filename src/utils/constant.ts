import {Platform} from 'react-native';

export enum SCREENS {
  HOME_SCREEN = 'HOME_SCREEN',
  FASHION_CATALOG = 'FASHION_CATALOG',
  MENU_SCREEN = 'MENU_SCREEN',

  BOTTOM_TABS = 'BOTTOM_TABS',
}
export const isIOS = Platform.OS === 'ios';
