import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const CharacterCard = ({ character, onToggleRecruit, onRemove }) => {
  return (
    <Animatable.View
      animation="fadeInUp"
      duration={500}
      style={[
        styles.container,
        character.recruited && styles.containerRecruited
      ]}
    >
      <TouchableOpacity
        style={styles.card}
        onPress={() => onToggleRecruit(character)}
        onLongPress={() => onRemove(character)}
        activeOpacity={0.8}
      >
        <View style={styles.characterInfo}>
          <MaterialIcons 
            name={character.recruited ? "person" : "person-outline"} 
            size={24} 
            color={character.recruited ? "#28A9E6" : "#BCE4F4"} 
          />
          <Text style={[
            styles.characterText, 
            character.recruited && styles.characterRecruitedText
          ]}>
            {character.name}
          </Text>
        </View>
        
        <View style={styles.statusContainer}>
          <MaterialIcons 
            name={character.recruited ? "check-circle" : "radio-button-unchecked"} 
            size={24} 
            color={character.recruited ? "#28A9E6" : "#BCE4F4"} 
          />
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#102C58",
    borderWidth: 1,
    borderColor: "#003D81",
    overflow: 'hidden',
  },
  containerRecruited: {
    backgroundColor: "#003D81",
    borderColor: "#28A9E6",
    borderWidth: 2,
  },
  card: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  characterInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  characterText: {
    fontSize: 16,
    color: "#BCE4F4",
    fontWeight: "500",
    marginLeft: 12,
  },
  characterRecruitedText: {
    color: "#28A9E6",
    fontWeight: "bold",
  },
  statusContainer: {
    marginLeft: 10,
  },
});

export default CharacterCard;
