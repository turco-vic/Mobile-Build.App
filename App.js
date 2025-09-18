import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import * as SQLite from "expo-sqlite";
import { theme } from './theme';

import Header from "./components/Header";
import AddCharacterForm from "./components/AddCharacterForm";
import CharacterFilter from "./components/CharacterFilter";
import CharacterList from "./components/CharacterList";
import Toast from "./components/Toast";

const db = SQLite.openDatabaseAsync("party.db");

export default function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "Turco THE BEST", recruited: false },
    { id: 2, name: "Falsas Falso", recruited: true },
    { id: 3, name: "Rapha Broa", recruited: false },
    { id: 4, name: "Gaybriel Soldado", recruited: false },
    { id: 5, name: "Laurete Trompete", recruited: false }
  ]);
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'success'
  });

  const showToast = (message, type = 'success') => {
    setToast({
      visible: true,
      message,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  const addCharacter = (name) => {
    const newId = Math.max(...characters.map(c => c.id), 0) + 1;
    const newFriendObj = {
      id: newId,
      name: name,
      recruited: false
    };
    setCharacters(prev => [newFriendObj, ...prev]);
  };

  const toggleRecruit = (character) => {
    setCharacters(prev => 
      prev.map(friend => 
        friend.id === character.id 
          ? { ...friend, recruited: !friend.recruited }
          : friend
      )
    );
    
    const action = character.recruited ? "cancelou a presença" : "confirmou presença";
    showToast(`${character.name} ${action} na festa!`, "info");
  };

  const removeCharacter = (character) => {
    Alert.alert(
      "Remover Amigo",
      `Remover "${character.name}" da lista de convidados?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => {
            setCharacters(prev => prev.filter(friend => friend.id !== character.id));
            showToast(`${character.name} foi removido da lista!`, "error");
          }
        }
      ]
    );
  };

  return (
    <LinearGradient
      colors={[theme.colors.background, theme.colors.surface]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        
        <Toast 
          visible={toast.visible}
          message={toast.message}
          type={toast.type}
          onHide={hideToast}
        />

        <Header />

        <AddCharacterForm 
          onAddCharacter={addCharacter}
          showToast={showToast}
        />

        <CharacterFilter 
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <CharacterList
          characters={characters}
          onToggleRecruit={toggleRecruit}
          onRemoveCharacter={removeCharacter}
          filter={filter}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
});
