import React from 'react';

import {NavigationService} from '@services';
import {TouchableOpacity} from 'react-native';
import {AngleLeftIcon} from '@icons';

const BackAction = () => {
  return (
    <TouchableOpacity onPress={NavigationService.goBack} activeOpacity={0.6}>
      <AngleLeftIcon size={25} />
    </TouchableOpacity>
  );
};

export default BackAction;
