import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, onToggleRecruit, onRemoveCharacter, filter }) => {
  const getFilteredFriends = () => {
    switch (filter) {
      case 'recruited':
        return characters.filter(friend => friend.recruited);
      case 'available':
        return characters.filter(friend => !friend.recruited);
      default:
        return characters;
    }
  };

  const filteredFriends = getFilteredFriends();

  const renderFriend = ({ item, index }) => (
    <CharacterCard
      character={item}
      onToggleRecruit={onToggleRecruit}
      onRemove={onRemoveCharacter}
    />
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <MaterialIcons name="mood-bad" size={48} color="#7A8B9A" />
      <Text style={styles.emptyText}>
        {filter === 'recruited' ? 'Nenhum amigo confirmou ainda' :
         filter === 'available' ? 'Nenhum convite pendente' :
         'Sua lista de convidados está vazia'}
      </Text>
      <Text style={styles.emptySubtext}>
        {filter === 'all' ? 'Convide seus amigos para a festa!' :
         'Tente alterar o filtro para ver outros amigos'}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={filteredFriends}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderFriend}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyComponent}
      contentContainerStyle={filteredFriends.length === 0 && styles.emptyContentContainer}
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
