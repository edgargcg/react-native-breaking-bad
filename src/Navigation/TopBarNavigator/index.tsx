import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Characters from '../../screens/Characters';
import Login from '../../screens/Login';
import Phrase from '../../screens/Phrase';

const Tab = createMaterialTopTabNavigator();

const Component = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={Characters} />
      <Tab.Screen name="Phrase" component={Phrase} />
      <Tab.Screen name="Settings" component={Login} />
    </Tab.Navigator>
  );
};

export {Component as TopBarNavigator};
export default Component;
