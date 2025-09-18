import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SQLite from "expo-sqlite";

import Header from "./components/Header";
import AddCharacterForm from "./components/AddCharacterForm";
import CharacterFilter from "./components/CharacterFilter";
import CharacterList from "./components/CharacterList";
import Toast from "./components/Toast";

const db = SQLite.openDatabaseAsync("party.db");

export default function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "Gundal o Mago", recruited: false },
    { id: 2, name: "Aragon o Guerreiro", recruited: true },
    { id: 3, name: "Legolas o Arqueiro", recruited: false }
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
    const newCharacterObj = {
      id: newId,
      name: name,
      recruited: false
    };
    setCharacters(prev => [newCharacterObj, ...prev]);
  };

  const toggleRecruit = (character) => {
    setCharacters(prev => 
      prev.map(char => 
        char.id === character.id 
          ? { ...char, recruited: !char.recruited }
          : char
      )
    );
    
    const action = character.recruited ? "dispensado" : "recrutado";
    showToast(`${character.name} foi ${action}!`, "info");
  };

  const removeCharacter = (character) => {
    Alert.alert(
      "Remover Personagem",
      `Remover "${character.name}" da party?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => {
            setCharacters(prev => prev.filter(char => char.id !== character.id));
            showToast(`${character.name} foi removido da party!`, "error");
          }
        }
      ]
    );
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
