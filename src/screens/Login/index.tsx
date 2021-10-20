import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors } from '../../themes/BaseTheme/index';
import { CustomInput } from '../../components';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const { navigation } = props;

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const doLogin = () => {
    console.log('doLogin');
    // navigation.navigate('Home');
  };

  const update = (key: String, value: String) => {
    const newData = {
      [`${key}`]: value,
    };

    setData({ ...data, ...newData });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>BreakingBad</Text>
      <View style={styles.Controls}>
        <CustomInput
          name="email"
          value={data.email}
          placeholder=""
          type="email-address"
          onChangeData={update}
          text="Correo electrónico"
        />
        <CustomInput
          name="password"
          value={data.password}
          placeholder=""
          type="default"
          onChangeData={update}
          text="Correo electrónico"
        />
      </View>
      <Button onPress={doLogin} title="Sign In" />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  Title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 29,
    letterSpacing: 5,
  },
  Controls: {
    display: 'flex',
    marginTop: 20,
    width: '100%',
  },
});

export { Component as Login };
export default Component;
