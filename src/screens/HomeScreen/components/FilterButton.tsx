import {TouchableOpacity} from 'react-native';
import React from 'react';

import {FilterIcon} from '@icons';
import {useAppTheme} from '@assets';
import {AppText} from '@components';
import {commonStyles} from '@styles';

interface IFilterButtonProps {
  onPress?: () => void;
}

const FilterButton = ({onPress}: IFilterButtonProps) => {
  const {colors} = useAppTheme();

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={commonStyles.justifyCenter}>
      <FilterIcon color={colors.background} size={18} />
      <AppText size={12} variant="medium" color="background">
        Filter
      </AppText>
    </TouchableOpacity>
  );
};

export default FilterButton;
