import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import { colors } from '../../themes/BaseTheme';

interface Props<T> {
  text: String;
  name: keyof T;
  value?: string;
  placeholder: string;
  onChangeData: (key: keyof T, value: string) => void;
}

const Component: any = <T extends Object>(props: Props<T>) => {
  const { name, text, onChangeData, placeholder, value = '', ...rest } = props;

  return (
    <View style={styles.Container}>
      <Input
        label={text}
        value={value}
        maxLength={30}
        autoCorrect={false}
        style={styles.Input}
        secureTextEntry={true}
        placeholder={placeholder}
        onChangeText={text => onChangeData(name, text)}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
  },
  Input: {
    color: colors.white,
  },
});

export { Component as CustomInput };
export default Component;
