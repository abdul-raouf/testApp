import React, {useState} from 'react';
import {When} from 'react-if';
import {View} from 'react-native';
import {Searchbar, SearchbarProps} from 'react-native-paper';

import AppText, {IAppTextProps} from '@components/AppText';
import {useDebounce} from '@utils';
import {useAppTheme} from '@assets';

interface ISearchBarProps extends Omit<SearchbarProps, 'onChangeText' | 'value' | 'theme'> {
  label?: string;
  labelProps?: IAppTextProps;
  flex?: number;

  onSearch: (text: string) => void;
}

const SearchBar = (props: ISearchBarProps) => {
  const {label, labelProps, flex = 1, onSearch, ...searchBarProps} = props;

  const [search, setSearch] = useState('');
  const debounceSearch = useDebounce(onSearch);
  const {colors} = useAppTheme();

  const onChangeText = (text: string) => {
    setSearch(text);
    debounceSearch(text);
  };

  return (
    <View style={{flex}}>
      <When condition={label}>
        <AppText size={14} variant="medium" {...labelProps}>
          {label}
        </AppText>
      </When>
      <Searchbar mode="bar" placeholder="Search here" value={search} onChangeText={onChangeText} style={{backgroundColor: colors.background}} {...searchBarProps} />
    </View>
  );
};

export default SearchBar;
