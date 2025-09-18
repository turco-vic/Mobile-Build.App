import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const AddCharacterForm = ({ onAddCharacter, showToast }) => {
  const [newCharacter, setNewCharacter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddCharacter = () => {
    if (newCharacter.trim() === "") {
      showToast("Por favor, digite um nome para o personagem!", "error");
      return;
    }

    setShowModal(true);
  };

  const confirmAddCharacter = () => {
    onAddCharacter(newCharacter.trim());
    setNewCharacter("");
    setShowModal(false);
    showToast(`${newCharacter} foi adicionado à party!`, "success");
  };

  const cancelAddCharacter = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person-add" size={20} color="#2B9AEE" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Nome do novo personagem..."
            placeholderTextColor="#7A8B9A"
            value={newCharacter}
            onChangeText={setNewCharacter}
            onSubmitEditing={handleAddCharacter}
          />
        </View>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleAddCharacter}
          activeOpacity={0.8}
        >
          <MaterialIcons name="add" size={24} color="#2B9AEE" />
        </TouchableOpacity>
      </View>

      {/* Modal de Confirmação */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={cancelAddCharacter}
      >
        <View style={styles.modalOverlay}>
          <Animatable.View animation="slideInUp" style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmar Adição</Text>
            <Text style={styles.modalMessage}>
              Deseja adicionar "{newCharacter}" à sua party?
            </Text>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]} 
                onPress={cancelAddCharacter}
              >
                <MaterialIcons name="close" size={20} color="#FF6B6B" />
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.confirmButton]} 
                onPress={confirmAddCharacter}
              >
                <MaterialIcons name="check" size={20} color="#4ECDC4" />
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2B9AEE',
    borderRadius: 12,
    backgroundColor: '#162E3B',
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2F5FEC',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderWidth: 2,
    borderColor: '#2B9AEE',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#162E3B',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 300,
    borderWidth: 1,
    borderColor: '#2B9AEE',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B9AEE',
    textAlign: 'center',
    marginBottom: 12,
  },
  modalMessage: {
    fontSize: 16,
    color: '#BCE4F4',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 6,
  },
  cancelButton: {
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  confirmButton: {
    backgroundColor: 'rgba(78, 205, 196, 0.2)',
    borderWidth: 1,
    borderColor: '#4ECDC4',
  },
  cancelButtonText: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  confirmButtonText: {
    color: '#4ECDC4',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AddCharacterForm;
