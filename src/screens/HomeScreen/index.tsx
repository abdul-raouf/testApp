import React from 'react';

import {ScreenWrapper, SearchBar, Spacer} from '@components';

import AppHeader from '@navigation/appHeader';
import {Log} from '@utils';
import {IMAGES} from '@assets/images';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, Text, View} from 'react-native';

type ItemData = {
  id: string;
  name: string;
  price: string;
  image: any;
  discount: string;
  oldPrice: string;
};

const DATA: ItemData[] = [
  {
    id: '1',
    name: 'Mens Plain T Shirt',
    price: '49.75',
    image: IMAGES.dressMan,
    discount: '10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: IMAGES.dressMan,
    discount: '10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: IMAGES.dressMan,
    discount: '-10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: IMAGES.dressMan,
    discount: '-10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: IMAGES.dressMan,
    discount: '-10%',
    oldPrice: '59.75',
  },
];

type ItemProps = {
  item: ItemData;
};

const Item = ({item}: ItemProps) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.QR}>QAR</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <Text style={styles.productPrice}>QAR {item.price}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.productOldPrice}>{item.oldPrice}</Text>
        <View style={{}}>
          <Text style={styles.productDiscount}>{item.discount}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const onSearch = (text: string) => {
    Log(text);
  };

  const renderItem = ({item}: {item: ItemData}) => <Item item={item} />;

  return (
    <ScreenWrapper>
      <AppHeader title={<SearchBar onSearch={onSearch} />} />
      <FlatList data={DATA} renderItem={renderItem} numColumns={2} contentContainerStyle={{rowGap: 5}} ItemSeparatorComponent={() => <Spacer top={10} />} />
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  list: {
    // margin: 10,
    // justifyContent: 'center'
  },
  itemContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    width: 200,
    backgroundColor: 'grey',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productName: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  QR: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Roboto',
    paddingTop: 7,
    paddingRight: 5,
    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  productPrice: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto',

    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  productOldPrice: {
    textDecorationLine: 'line-through',
    color: 'black',
    fontSize: 14,
    fontFamily: 'Roboto',

    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  productDiscount: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Roboto',
    marginLeft: 10,
    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  // Add styles for buttons and additional info
});

export default HomeScreen;
