import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="groups" size={32} color="#2B9AEE" />
        <Text style={styles.title}>Minha Party RPG</Text>
      </View>
      <Text style={styles.subtitle}>
        <MaterialIcons name="check-circle" size={16} color="#28A9E6" /> Recrutado · 
        <MaterialIcons name="radio-button-unchecked" size={16} color="#BCE4F4" /> Disponível · 
        Segure para remover
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2B9AEE',
    marginLeft: 8,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: '#2F83EC',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
