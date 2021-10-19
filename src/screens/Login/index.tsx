import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  const doLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Login</Text>
      <Button onPress={doLogin} title="Press me" />
    </View>
  );
};

export {Component as Login};
export default Component;
