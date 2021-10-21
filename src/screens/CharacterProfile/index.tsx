import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStackParams } from '../../Navigation/MainNavigator/index';

import { colors } from '../../themes/BaseTheme';

interface Props
  extends NativeStackScreenProps<MainStackParams, 'CharacterProfile'> {}

const Component = (props: Props) => {
  const {
    route: { params: character },
  } = props;

  const { name, nickname, img, status, birthday, occupation, portrayed } =
    character;

  const extraData = [
    { key: status },
    { key: `Born in ${birthday}` },
    { key: `Occupation: ${occupation.join(', ')}` },
    { key: `Performed by: ${portrayed}` },
  ];

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={{
            uri: img,
          }}
        />
      </View>
      <View style={styles.DataContainer}>
        <Text style={styles.Name}>{name}</Text>
        <Text style={styles.Nickname}>{nickname}</Text>
        <FlatList
          data={extraData}
          style={styles.DataList}
          renderItem={({ item }) => {
            return (
              <View style={styles.ListItem}>
                <Text style={styles.ListItemText}>{item.key}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignContent: 'center',
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: 30,
  },
  ImageContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 0.2,
    height: '100%',
    justifyContent: 'center',
  },
  Image: {
    borderRadius: 200,
    borderColor: colors.white,
    borderWidth: 2,
    height: 200,
    width: 200,
  },
  DataContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 70,
    width: '100%',
  },
  Name: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  Nickname: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  DataList: {
    marginTop: 20,
  },
  ListItem: {
    alignItems: 'center',
    padding: 10,
  },
  ListItemText: {
    color: colors.white,
    fontSize: 15,
    letterSpacing: 2,
  },
});

export { Component as CharacterProfile };
export default Component;
