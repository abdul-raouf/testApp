import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '@utils';
import {HomeScreen, FashionCatalog} from '@screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.FASHION_CATALOG} component={FashionCatalog} />
        <Stack.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
