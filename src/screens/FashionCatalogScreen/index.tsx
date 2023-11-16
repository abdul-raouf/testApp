import React from 'react';
import {FlatList, View} from 'react-native';

import {ProductCard, ScreenWrapper, SearchBar, Chips} from '@components';
import AppHeader from '@navigation/appHeader';
import {Log, PRODUCT_DUMMY_DATA} from '@utils';
import {TProduct} from '@types';

import {styles} from './styles';
import FilterButton from './components/FilterButton';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const onSearch = (text: string) => {
    Log(text);
  };
  const [selectedChip, setSelectedChip] = React.useState<string>('All');
  const chips = ['All', 'Women', 'Men', 'Kids', 'Bags & Accessories'];
  const renderItem = ({item, index}: {item: TProduct; index: number}) => {
    const isLastOddItem = (index + 1) % 2 !== 0 && index + 1 === PRODUCT_DUMMY_DATA.length;

    return (
      <>
        <ProductCard product={item} />
        {isLastOddItem && <View style={styles.emptyListItem} />}
      </>
    );
  };

  return (
    <ScreenWrapper>
      <AppHeader title={<SearchBar onSearch={onSearch} />} rightAccessory={<FilterButton />} />
      <ScrollView horizontal style={styles.chipsView}>
        {chips.map(chip => (
          <Chips key={chip} label={chip} selected={selectedChip === chip} onPress={() => setSelectedChip(chip)} />
        ))}
      </ScrollView>
      <FlatList<TProduct> data={PRODUCT_DUMMY_DATA} keyExtractor={(item, index) => item.id + index.toString()} renderItem={renderItem} numColumns={2} contentContainerStyle={styles.productList} />
    </ScreenWrapper>
  );
};

export default HomeScreen;
