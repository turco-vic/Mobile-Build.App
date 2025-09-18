import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

const CharacterFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'Todos', icon: 'people' },
    { key: 'recruited', label: 'Confirmados', icon: 'celebration' },
    { key: 'available', label: 'Pendentes', icon: 'schedule' },
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
              color={currentFilter === filter.key ? theme.colors.text.primary : theme.colors.primary} 
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
    marginBottom: theme.spacing.md,
  },
  filterTitle: {
    ...theme.components.text.small,
    fontWeight: theme.typography.fontWeight.semibold,
    marginBottom: theme.spacing.sm,
  },
  filterButtons: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  filterButton: {
    ...theme.components.filter.inactive,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  filterButtonActive: {
    ...theme.components.filter.active,
  },
  filterButtonText: {
    ...theme.components.text.small,
    color: theme.colors.primary,
    fontWeight: theme.typography.fontWeight.semibold,
  },
  filterButtonTextActive: {
    color: theme.colors.text.primary,
  },
});

export default CharacterFilter;
