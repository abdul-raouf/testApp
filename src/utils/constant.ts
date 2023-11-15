import {TProduct} from '@types';
import {Platform} from 'react-native';

export enum SCREENS {
  HOME_SCREEN = 'HOME_SCREEN',
  FASHION_CATALOG = 'FASHION_CATALOG',
  MENU_SCREEN = 'MENU_SCREEN',

  BOTTOM_TABS = 'BOTTOM_TABS',
}
export const isIOS = Platform.OS === 'ios';

export const PRODUCT_DUMMY_DATA: TProduct[] = [
  {
    discount: 10,
    id: 'P-232',
    image: 'https://thehouseofrare.com/cdn/shop/products/BLUERABBIT.jpg',
    oldPrice: 100,
    price: 50,
    title: "Man's T SHirt",
  },
  {
    discount: 10,
    id: 'P-5324',
    image: 'https://thehouseofrare.com/cdn/shop/products/BLUERABBIT.jpg',
    oldPrice: 100,
    price: 50,
    title: "Man's T SHirt",
  },
  {
    discount: 10,
    id: 'P-354',
    image: 'https://thehouseofrare.com/cdn/shop/products/BLUERABBIT.jpg',
    oldPrice: 100,
    price: 50,
    title: "Man's T SHirt",
  },
]; // to be removed once api is linked,
