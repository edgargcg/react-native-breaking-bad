import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../../screens/Login';
import {Home} from '../../screens/Home';
import Splash from '../../screens/Splash';

const Stack = createNativeStackNavigator();

const Component = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export {Component as MainNavigator};
export default Component;
