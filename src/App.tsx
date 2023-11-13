import {AppTheme} from '@assets/Theme';
import AppWrapper from './AppWrapper';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={AppTheme}>
        <AppWrapper />
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
