import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, ScrollView } from 'react-native';

import breakingBadApi from '../../api/breakingBadApi';
import CharacterCard from '../../components/CharacterCard';

import { CharacterInterface } from '../../interfaces/Interfaces';
import { colors } from '../../themes/BaseTheme';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const { navigation } = props;
  const [characters, setCharacters] = useState<[CharacterInterface] | null>(
    null,
  );

  const getCharacters = async () => {
    const { data } = await breakingBadApi.get<[CharacterInterface]>(
      '/characters',
    );

    setCharacters(data);
  };

  const onClickCharacter = (character: CharacterInterface) => {
    navigation.navigate('CharacterProfile', character);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const renderCharacters =
    characters &&
    characters.map((character, index) => {
      return (
        <CharacterCard
          key={`character-${index}`}
          character={character}
          onClick={onClickCharacter}
        />
      );
    });

  return <ScrollView style={styles.Container}>{renderCharacters}</ScrollView>;
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

export { Component as Characters };
export default Component;
