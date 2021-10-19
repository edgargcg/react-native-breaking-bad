import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const portrait = require('../../assets/images/breakingBadPortrait.jpg');

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.Container}>
      <ImageBackground
        source={portrait}
        resizeMode="cover"
        style={styles.Image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export {Component as Splash};
export default Component;
