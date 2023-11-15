import React from 'react';

import {ScreenWrapper, SearchBar} from '@components';

import AppHeader from '@navigation/appHeader';
import {Log} from '@utils';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';

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
    image: 'Image',
    discount: '10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: 'Image',
    discount: '10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: 'Image',
    discount: '10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: 'Image',
    discount: '10%',
    oldPrice: '59.75',
  },
  {
    id: '2',
    name: 'Mens Shirt',
    price: '49.75',
    image: 'Image',
    discount: '10%',
    oldPrice: '59.75',
  },
];

type ItemProps = {
  item: ItemData;
};

const Item = ({item}: ItemProps) => (
  <TouchableOpacity style={styles.list}>
    <View style={styles.itemContainer}>
      {/* <Image source={{uri: image}} style={styles.productImage} /> */}
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>QAR {item.price}</Text>
      <Text style={styles.productOldPrice}>QAR {item.oldPrice}</Text>
      <Text style={styles.productDiscount}>{item.discount}</Text>
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
      <FlatList data={DATA} renderItem={renderItem} numColumns={2} />
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  list: {
    margin: 10,
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    margin: 10,
    width: 180,
  },
  productImage: {
    width: '100%',
    height: 150,
    // Add styles to match the design
  },
  productName: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  productPrice: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',

    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  productOldPrice: {
    textDecorationLine: 'line-through',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',

    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  productDiscount: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',

    fontStyle: 'normal',
    letterSpacing: -0.408,
  },
  // Add styles for buttons and additional info
});

export default HomeScreen;
