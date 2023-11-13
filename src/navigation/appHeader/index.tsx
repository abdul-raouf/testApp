import React from 'react';
import {StatusBar, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Else, If, Then} from 'react-if';

import {styles} from './styles';
import {BackAction} from '@components';
import {useAppTheme} from '@assets';

interface IAppHeaderProps {
  backAction?: boolean;
  title: string | React.ReactNode;
  leftAccessory?: React.ReactNode;
  rightAccessory?: React.ReactNode;
  color?: AppTheme.TColors;
}

const AppHeader = ({title, backAction = true, leftAccessory, rightAccessory, color = 'primaryContainer'}: IAppHeaderProps) => {
  const {colors} = useAppTheme();

  const colorValue = colors[color] as string;
  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent />
      <View style={[styles.container, {backgroundColor: colorValue}]}>
        <If condition={backAction}>
          <Then>
            <BackAction />
          </Then>
          <Else>{leftAccessory}</Else>
        </If>

        <Appbar.Content title={title} />
        {rightAccessory}
      </View>
    </>
  );
};

export default AppHeader;
