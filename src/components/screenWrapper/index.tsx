import {ViewProps, ScrollViewProps, ScrollView, View} from 'react-native';
import React, {PropsWithChildren, useMemo} from 'react';
import {Case, Default, Switch} from 'react-if';
import {KeyboardAwareScrollView, KeyboardAwareScrollViewProps} from 'react-native-keyboard-aware-scroll-view';

import {makeStyles} from './styles';
import {useAppTheme} from '@assets';

interface IScreenWrapperProps {
  type?: 'scroll' | 'none' | 'keyboard';
  viewProps?: ViewProps;
  scrollViewProps?: ScrollViewProps;
  keyboardAwareScrollViewProps?: KeyboardAwareScrollViewProps;
  backgroundColor?: AppTheme.TColors;
}

const ScreenWrapper = (props: PropsWithChildren<IScreenWrapperProps>) => {
  const {type = 'none', children, scrollViewProps, viewProps, keyboardAwareScrollViewProps, backgroundColor = 'background'} = props;

  const {colors} = useAppTheme();
  const color = colors[backgroundColor] as string;

  const styles = useMemo(() => makeStyles(color), [color]);

  return (
    <Switch>
      <Case condition={type === 'scroll'}>
        <ScrollView style={styles.scrollView} {...scrollViewProps}>
          {children}
        </ScrollView>
      </Case>
      <Case condition={type === 'keyboard'}>
        <KeyboardAwareScrollView style={styles.scrollView} {...keyboardAwareScrollViewProps}>
          {children}
        </KeyboardAwareScrollView>
      </Case>
      <Default>
        <View style={styles.screenView} {...viewProps}>
          {children}
        </View>
      </Default>
    </Switch>
  );
};

export default ScreenWrapper;
