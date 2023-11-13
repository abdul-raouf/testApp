import {FashionCatalogScreen, HomeScreen} from '@screens';
import {TBottomTabConfig} from '@types';
import {SCREENS} from '@utils';

export const BOTTOM_TABS: TBottomTabConfig[] = [
  {
    title: 'Home',
    name: SCREENS.HOME_SCREEN,
    component: HomeScreen,
    icon: {type: 'Entypo', name: 'home'},
  },
  {
    title: 'Catalog',
    name: SCREENS.FASHION_CATALOG,
    component: FashionCatalogScreen,
    icon: {type: 'MaterialIcons', name: 'leaderboard'},
  },
];
