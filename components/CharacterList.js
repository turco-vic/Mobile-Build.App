import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, onToggleRecruit, onRemoveCharacter, filter }) => {
  const getFilteredCharacters = () => {
    switch (filter) {
      case 'recruited':
        return characters.filter(char => char.recruited);
      case 'available':
        return characters.filter(char => !char.recruited);
      default:
        return characters;
    }
  };

  const filteredCharacters = getFilteredCharacters();

  const renderCharacter = ({ item, index }) => (
    <CharacterCard
      character={item}
      onToggleRecruit={onToggleRecruit}
      onRemove={onRemoveCharacter}
    />
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <MaterialIcons name="sentiment-dissatisfied" size={48} color="#7A8B9A" />
      <Text style={styles.emptyText}>
        {filter === 'recruited' ? 'Nenhum personagem recrutado ainda' :
         filter === 'available' ? 'Nenhum personagem disponível' :
         'Sua party está vazia'}
      </Text>
      <Text style={styles.emptySubtext}>
        {filter === 'all' ? 'Adicione alguns personagens para começar!' :
         'Tente alterar o filtro para ver outros personagens'}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={filteredCharacters}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderCharacter}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyComponent}
      contentContainerStyle={filteredCharacters.length === 0 && styles.emptyContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyContentContainer: {
    flex: 1,
  },
  emptyText: {
    fontSize: 18,
    color: '#7A8B9A',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#7A8B9A',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default CharacterList;
