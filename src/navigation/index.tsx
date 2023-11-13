import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from '@utils';
import {MenuScreen} from '@screens';
import {NavigationService} from '@services';
import BottomTabNavigator from './bottomTabs';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.MENU_SCREEN} component={MenuScreen} />
        <Stack.Screen name={SCREENS.BOTTOM_TABS} component={BottomTabNavigator} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
