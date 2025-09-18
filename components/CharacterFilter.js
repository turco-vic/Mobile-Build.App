import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CharacterFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'Todos', icon: 'people' },
    { key: 'recruited', label: 'Recrutados', icon: 'check-circle' },
    { key: 'available', label: 'Disponíveis', icon: 'radio-button-unchecked' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.filterTitle}>Filtrar por:</Text>
      <View style={styles.filterButtons}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.key}
            style={[
              styles.filterButton,
              currentFilter === filter.key && styles.filterButtonActive
            ]}
            onPress={() => onFilterChange(filter.key)}
          >
            <MaterialIcons 
              name={filter.icon} 
              size={18} 
              color={currentFilter === filter.key ? "#0A0E1A" : "#2B9AEE"} 
            />
            <Text style={[
              styles.filterButtonText,
              currentFilter === filter.key && styles.filterButtonTextActive
            ]}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  filterTitle: {
    color: '#BCE4F4',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2B9AEE',
    backgroundColor: 'transparent',
    gap: 6,
  },
  filterButtonActive: {
    backgroundColor: '#2B9AEE',
    borderColor: '#2B9AEE',
  },
  filterButtonText: {
    color: '#2B9AEE',
    fontSize: 12,
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#0A0E1A',
  },
});

export default CharacterFilter;
