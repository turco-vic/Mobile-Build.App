import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("party.db");

export default function App() {

  const [characters, setCharacters] = useState([
    { id: 1, name: "Gundal o Mago", recruited: 0 },
    { id: 2, name: "Aragon o Guerreiro", recruited: 1 },
    { id: 3, name: "Legolas o Arqueiro", recruited: 0 }
  ]);
  const [newCharacter, setNewCharacter] = useState("");

  function addCharacter() {
    if (newCharacter === "") return; 

    const newId = characters.length + 1; 
    const newCharacterObj = {
      id: newId,
      name: newCharacter,
      recruited: 0 
    };
    const newList = [newCharacterObj];
    const allCharacters = newList.concat(characters); 
    setCharacters(allCharacters); 
    setNewCharacter(""); 
  }

  function toggleRecruit(character) {
    const newCharacters = [];
    for (let i = 0; i < characters.length; i++) {
      const currentChar = characters[i];
      if (currentChar.id === character.id) {
        const newStatus = currentChar.recruited ? 0 : 1;
        newCharacters.push({
          id: currentChar.id,
          name: currentChar.name,
          recruited: newStatus
        });
      } else {

        newCharacters.push(currentChar);
      }
    }
    setCharacters(newCharacters);
  }

  function removeCharacter(character) {
    Alert.alert(
      "Remover Personagem",
      `Remover "${character.name}" da party?`,
      [
        { text: "Não" },
        {
          text: "Sim",
          onPress: () => {
            const newList = [];
            for (let i = 0; i < characters.length; i++) {
              if (characters[i].id !== character.id) {
                newList.push(characters[i]);
              }
            }
            setCharacters(newList);
          }
        }
      ]
    );
  }

  function renderCharacter({ item }) {
    return (
      <TouchableOpacity
        style={[styles.character, item.recruited && styles.characterRecruited]}
        onPress={() => toggleRecruit(item)}
        onLongPress={() => removeCharacter(item)}
      >
        <Text style={[styles.characterText, item.recruited && styles.characterRecruitedText]}>
          {item.name}
        </Text>
        <Text style={styles.status}>
          {item.recruited ? "✓" : "○"}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Título */}
      <Text style={styles.title}>Minha Party RPG</Text>
      <Text style={styles.subtitle}>Recrutado ✓ · Disponível ○ · Segure para remover</Text>

      {/* Adicionar novo personagem */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nome do novo personagem..."
          value={newCharacter}
          onChangeText={setNewCharacter}
          onSubmitEditing={addCharacter}
        />
        <TouchableOpacity style={styles.button} onPress={addCharacter}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* Lista de personagens */}
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderCharacter}
        style={styles.list}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#2B9AEE',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20,
    color: '#2F83EC',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#2B9AEE', 
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#162E3B',
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2F5FEC', 
    padding: 12,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderWidth: 2,
    borderColor: '#2B9AEE', 
  },
  buttonText: {
    color: '#2B9AEE', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  character: {
    backgroundColor: "#102C58", 
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#003D81", 
  },
  characterRecruited: {
    backgroundColor: "#003D81", 
    borderColor: "#28A9E6", 
    borderWidth: 2,
  },
  characterText: {
    flex: 1,
    fontSize: 16,
    color: "#BCE4F4", 
    fontWeight: "500",
  },
  characterRecruitedText: {
    color: "#28A9E6", 
    fontWeight: "bold",
  },
  status: {
    fontSize: 20,
    marginLeft: 10,
  },
});
