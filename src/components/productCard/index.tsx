import {TProduct} from '@types';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import AppText from '@components/AppText';
import Spacer from '@components/Spacer';
import {commonStyles} from '@styles';
import {CartIcon, FavouriteIcon} from '@icons';
import {useAppTheme} from '@assets';

interface IProductCardProps {
  product: TProduct;
  onPress?: () => void;
}
const ProductCard = (props: IProductCardProps) => {
  const {product, onPress} = props;
  const {discount = 0, image = '', oldPrice, price = 0, title = ''} = product;
  const {colors} = useAppTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <FavouriteIcon size={20} color={colors.outline} style={styles.favouriteIcon} />
      <Image source={{uri: image}} resizeMode="cover" style={styles.productImg} />
      <Spacer top={8} horizontal={5}>
        <AppText size={14}>{title}</AppText>

        {/* Current Price */}
        <Spacer right={10}>
          <View style={commonStyles.row}>
            <AppText size={12} textTransform="uppercase">
              QAR
            </AppText>
            <AppText color="error" size={18} variant="medium">
              {price}
            </AppText>
          </View>

          <View style={commonStyles.rowBetween}>
            {/* Old Pricing */}
            <View style={commonStyles.row}>
              <AppText size={12} variant="medium" color="outline" textDecorationLine="line-through">
                {`QAR ${oldPrice}`}
              </AppText>
              <View style={styles.discountChip}>
                <AppText size={12} color="background" variant="medium">{`-${discount}%`}</AppText>
              </View>
            </View>

            <CartIcon size={20} />
          </View>
        </Spacer>
      </Spacer>
    </TouchableOpacity>
  );
};

export default ProductCard;
