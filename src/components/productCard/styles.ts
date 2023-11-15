import {AppTheme} from '@assets';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, height: 300, marginHorizontal: 5, borderRadius: 4, borderWidth: 0.2, borderColor: AppTheme.colors.outline},
  productImg: {width: '100%', height: 200, borderTopRightRadius: 4, borderTopLeftRadius: 4},
  discountChip: {borderRadius: 29, paddingHorizontal: 3, paddingVertical: 1, backgroundColor: AppTheme.colors.error, marginLeft: 6},
  favouriteIcon: {position: 'absolute', left: 10, top: 10, zIndex: 1},
});
