import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useForm } from '../../hooks/useForm';
import { CustomInput } from '../../components';

import { LoginInterface } from '../../interfaces/Interfaces';

import { colors } from '../../themes/BaseTheme/index';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const { navigation } = props;

  const { email, password, onChange } = useForm<LoginInterface>({
    email: '',
    password: '',
  });

  const doLogin = () => {
    if (!(email === 'edgar_campos@ucol.mx' && password === '123456')) return;

    navigation.navigate('Home');
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>BreakingBad</Text>
      <View style={styles.Controls}>
        <CustomInput
          name={'email'}
          placeholder=""
          value={email as string}
          onChangeData={onChange}
          text="Correo electrónico"
          keyboardType="email-address"
        />
        <CustomInput
          name="password"
          text="Contraseña"
          placeholder="******"
          secureTextEntry={true}
          onChangeData={onChange}
          value={password as string}
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
    width: '80%',
  },
});

export { Component as Login };
export default Component;
