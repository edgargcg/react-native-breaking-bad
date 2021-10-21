import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CharacterInterface } from '../../interfaces/Interfaces';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '../../themes/BaseTheme';
import { CharacterIcons } from '../../mock';

interface Props {
  character: CharacterInterface;
}

const Component = (props: Props) => {
  const {
    character: { name, img, nickname, status },
  } = props;

  console.log(status);

  const characterIcon = CharacterIcons.filter(
    icon => icon.status === status,
  )[0];

  const renderIcon = (
    <FontAwesomeIcon
      size={20}
      style={{
        color: characterIcon.color,
      }}
      icon={['fas', characterIcon.icon]}
    />
  );

  return (
    <View style={styles.Container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={{
            uri: img,
          }}
        />
      </View>
      <View style={styles.DataContainer}>
        <View style={styles.Information}>
          <Text style={styles.Name}>{name}</Text>
          <Text style={styles.NickName}>{nickname}</Text>
        </View>
        <View style={styles.EstatusContainer}>{renderIcon}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    padding: 20,
    width: '100%',
  },
  ImageContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 0.2,
    height: '100%',
    justifyContent: 'center',
  },
  Image: {
    borderRadius: 100,
    height: '100%',
    width: '80%',
  },
  DataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.7,
    padding: 1,
  },
  Information: {
    justifyContent: 'center',
  },
  Name: {
    color: colors.white,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  NickName: {
    color: colors.secondary,
  },
  EstatusContainer: {
    justifyContent: 'center',
  },
});

export { Component as CharacterCard };
export default Component;
