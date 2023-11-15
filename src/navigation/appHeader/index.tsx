import React from 'react';
import {StatusBar, View} from 'react-native';
import {Else, If, Then} from 'react-if';

import {styles} from './styles';
import {AppText, BackAction, Spacer} from '@components';
import {useAppTheme} from '@assets';
import {IAppTextProps} from '@components/AppText';

interface IAppHeaderProps {
  backAction?: boolean;
  title: string | React.ReactNode;
  leftAccessory?: React.ReactNode;
  rightAccessory?: React.ReactNode;
  color?: AppTheme.TColors;
  headerTitleProps?: IAppTextProps;
}

const AppHeader = ({title, backAction = true, leftAccessory, rightAccessory, color = 'primaryContainer', headerTitleProps}: IAppHeaderProps) => {
  const {colors} = useAppTheme();

  const colorValue = colors[color] as string;
  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent />
      <View style={[styles.container, {backgroundColor: colorValue}]}>
        <If condition={backAction}>
          <Then>
            <Spacer right={7}>
              <BackAction />
            </Spacer>
          </Then>
          <Else>{leftAccessory}</Else>
        </If>

        {typeof title === 'string' ? (
          <AppText size={18} variant="bold" color="background" {...headerTitleProps}>
            {title}
          </AppText>
        ) : (
          title
        )}

        <Spacer left={7}>{rightAccessory}</Spacer>
      </View>
    </>
  );
};

export default AppHeader;
