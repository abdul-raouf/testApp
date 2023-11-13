import React from 'react';
import {IconButton} from 'react-native-paper';

import {NavigationService} from '@services';

const BackAction = () => {
  return <IconButton icon="arrow-left" onPress={NavigationService.goBack} />;
};

export default BackAction;
