import { placeholder } from '@babel/types';
import React, { Dispatch, SetStateAction } from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardTypeOptions,
  TextInput,
} from 'react-native';
import { Input } from 'react-native-elements';
import { colors } from '../../themes/BaseTheme';

interface Props {
  name: String;
  text: String;
  value?: string;
  placeholder: string;
  type: KeyboardTypeOptions | undefined;
  onChangeData: (key: String, text: String) => void;
}

const Component = (props: Props) => {
  const { name, text, type, onChangeData, placeholder, value = '' } = props;

  return (
    <View style={styles.Container}>
      <Input
        label={text}
        value={value}
        maxLength={30}
        keyboardType={type}
        style={styles.Input}
        placeholder={placeholder}
        onChangeText={text => onChangeData(name, text)}
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
