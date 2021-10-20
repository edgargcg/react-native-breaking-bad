import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import breakingBadApi from '../../api/breakingBadApi';
import CharacterCard from '../../components/CharacterCard';

import { CharacterInterface } from '../../interfaces/Interfaces';
import { colors } from '../../themes/BaseTheme';

const Component = () => {
  const [characters, setCharacters] = useState<[CharacterInterface] | null>(
    null,
  );

  const getCharacters = async () => {
    const { data } = await breakingBadApi.get<[CharacterInterface]>(
      '/characters',
    );

    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const renderCharacters =
    characters &&
    characters.map((character, index) => {
      return <CharacterCard key={`character-${index}`} character={character} />;
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
