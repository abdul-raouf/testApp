import React, {PropsWithChildren, useMemo} from 'react';
import {StyleSheet, TextProps, TouchableOpacity, View} from 'react-native';
import {Else, If, Then} from 'react-if';
import {customText} from 'react-native-paper';

import {TAppThemeColors, useAppTheme} from '@assets';
import Spacer from '@components/Spacer';
import {commonStyles} from '@styles';

const PaperText = customText<'italic' | 'bold' | 'medium' | 'regular' | 'thin'>();

export interface IAppTextProps {
  onPress?: () => void;
  leftAccessory?: React.ReactElement;
  rightAccessory?: React.ReactElement;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  textDecorationLine?: 'underline' | 'none' | 'line-through';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  variant?: 'italic' | 'bold' | 'medium' | 'regular' | 'thin';
  color?: keyof TAppThemeColors;
  size?: number;
  textProps?: TextProps;
  numberOfLines?: number;
}

const AppText = (props: PropsWithChildren<IAppTextProps>) => {
  const {
    onPress,
    children,
    leftAccessory,
    rightAccessory,
    color = 'onBackground',
    numberOfLines,
    size = 16,
    textAlign = 'auto',
    textDecorationLine = 'none',
    textProps,
    textTransform = 'none',
    variant = 'regular',
  } = props;
  const isDisabled = !onPress;
  const {colors} = useAppTheme();

  const appTextStyles = useMemo(
    () =>
      StyleSheet.flatten([
        {
          fontSize: size,
          textAlign,
          textTransform,
          textDecorationLine,
          color: colors[color] as string,
        },
      ]),
    [size, textAlign, textTransform, textDecorationLine, color, colors],
  );

  return (
    <If condition={isDisabled}>
      <Then>
        <View style={commonStyles.row}>
          <Spacer right={2}>{leftAccessory}</Spacer>

          <PaperText variant={variant} style={appTextStyles} numberOfLines={numberOfLines} {...textProps}>
            {children}
          </PaperText>
          <Spacer left={2}>{rightAccessory}</Spacer>
        </View>
      </Then>

      <Else>
        <TouchableOpacity style={commonStyles.row} onPress={onPress} activeOpacity={0.6}>
          <Spacer right={2}>{leftAccessory}</Spacer>
          <PaperText variant={variant} style={appTextStyles} numberOfLines={numberOfLines} {...textProps}>
            {children}
          </PaperText>
          <Spacer left={2}>{rightAccessory}</Spacer>
        </TouchableOpacity>
      </Else>
    </If>
  );
};

export default AppText;
