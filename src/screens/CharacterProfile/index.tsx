import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParams } from '../../Navigation/MainNavigator/index';

interface Props
  extends NativeStackScreenProps<MainStackParams, 'CharacterProfile'> {}

const Component = (props: Props) => {
  const {
    route: { params },
  } = props;

  console.log(params.name);

  return (
    <View>
      <Text>klasjd</Text>
    </View>
  );
};

export { Component as CharacterProfile };
export default Component;
