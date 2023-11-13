import React from 'react';

import {AppText, ScreenWrapper, SearchBar} from '@components';

import AppHeader from '@navigation/appHeader';
import {Log} from '@utils';

const HomeScreen = () => {
  const onSearch = (text: string) => {
    Log(text);
  };

  return (
    <ScreenWrapper>
      <AppHeader title={<SearchBar onSearch={onSearch} />} />
      <AppText>Home Screehn</AppText>
    </ScreenWrapper>
  );
};

export default HomeScreen;
