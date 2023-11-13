import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BOTTOM_TABS} from './config';

import VectorIcon from '@icons';
import {isIOS} from '@utils';

import BottomTabBar from './components/BottomTabBar';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} safeAreaInsets={{bottom: isIOS ? 8 : 0}} tabBar={props => <BottomTabBar {...props} />}>
      {BOTTOM_TABS.map((tab, index) => (
        <Screen
          key={tab.name + index.toString()}
          name={tab.name}
          component={tab.component}
          options={{
            title: tab.title,
            tabBarIcon: ({size, color}) => <VectorIcon iconType={tab.icon.type} name={tab.icon.name} size={size} color={color} />,
          }}
        />
      ))}
    </Navigator>
  );
};

export default BottomTabNavigator;
