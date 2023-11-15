import {StyleSheet} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: isIphoneX() ? 60 : 60, paddingBottom: 10},
});
