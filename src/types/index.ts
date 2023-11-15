import {IconProps} from 'react-native-vector-icons/Icon';

export type IconType = 'Feather' | 'FontAwesome' | 'Ionicons' | 'Foundation' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Entypo' | 'AntDesign' | 'Octicons' | 'FontAwesome5' | 'SimpleLineIcons';

export type VectorIconType = {
  iconType: IconType;
} & IconProps;

export type TSVGIcon = {
  height?: number;
  width?: number;
  color?: AppTheme.TColors;
};

export type TBottomTabConfig = {
  title: string;
  name: string;
  component: () => JSX.Element;
  icon: {type: IconType; name: string};
};

export type TProduct = {
  id: string;
  title: string;
  price: number;
  image: string;
  discount: number;
  oldPrice: number;
};
