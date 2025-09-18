import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { theme } from '../theme';

const AddCharacterForm = ({ onAddCharacter, showToast }) => {
  const [newFriend, setNewFriend] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddFriend = () => {
    if (newFriend.trim() === "") {
      showToast("Por favor, digite o nome do seu amigo!", "error");
      return;
    }
    setShowModal(true);
  };

  const confirmAddFriend = () => {
    onAddCharacter(newFriend.trim());
    setNewFriend("");
    setShowModal(false);
    showToast(`${newFriend} foi convidado para a festa!`, "success");
  };

  const cancelAddFriend = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCard}>
        <LinearGradient
          colors={[theme.colors.surface, theme.colors.surfaceLight]}
          style={styles.inputGradient}
        >
          <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <MaterialIcons name="person-add" size={20} color={theme.colors.primary} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome do seu amigo..."
                placeholderTextColor={theme.colors.textMuted}
                value={newFriend}
                onChangeText={setNewFriend}
                onSubmitEditing={handleAddFriend}
              />
            </View>
            
            <TouchableOpacity 
              style={styles.addButton} 
              onPress={handleAddFriend}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.primaryDark]}
                style={styles.buttonGradient}
              >
                <MaterialIcons name="add" size={24} color={theme.colors.textPrimary} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={cancelAddFriend}
      >
        <View style={styles.modalOverlay}>
          <Animatable.View animation="zoomIn" duration={300} style={styles.modalContainer}>
            <LinearGradient
              colors={[theme.colors.surface, theme.colors.surfaceLight]}
              style={styles.modalContent}
            >
              <View style={styles.modalHeader}>
                <View style={styles.modalIconContainer}>
                  <MaterialIcons name="celebration" size={32} color={theme.colors.secondary} />
                </View>
                <Text style={styles.modalTitle}>Confirmar Convite</Text>
              </View>
              
              <Text style={styles.modalMessage}>
                Deseja convidar <Text style={styles.friendName}>"{newFriend}"</Text> para sua festa?
              </Text>
              
              <View style={styles.modalButtons}>
                <TouchableOpacity 
                  style={styles.modalButton} 
                  onPress={cancelAddFriend}
                >
                  <LinearGradient
                    colors={[theme.colors.error + '20', theme.colors.error + '10']}
                    style={[styles.buttonGradient, styles.cancelButtonGradient]}
                  >
                    <MaterialIcons name="close" size={18} color={theme.colors.error} />
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                  </LinearGradient>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.modalButton} 
                  onPress={confirmAddFriend}
                >
                  <LinearGradient
                    colors={[theme.colors.success, theme.colors.success + 'DD']}
                    style={styles.buttonGradient}
                  >
                    <MaterialIcons name="send" size={18} color={theme.colors.textPrimary} />
                    <Text style={styles.confirmButtonText}>Convidar</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.xl,
  },
  inputCard: {
    borderRadius: theme.borderRadius.large,
    ...theme.shadows.medium,
  },
  inputGradient: {
    borderRadius: theme.borderRadius.large,
    padding: theme.spacing.md,
  },
  inputRow: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background + '80',
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.primary + '30',
  },
  inputIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary + '20',
    borderRadius: theme.borderRadius.small,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  input: {
    flex: 1,
    ...theme.typography.body1,
    color: theme.colors.textPrimary,
    paddingVertical: theme.spacing.md,
  },
  addButton: {
    borderRadius: theme.borderRadius.medium,
    ...theme.shadows.small,
  },
  buttonGradient: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 320,
  },
  modalContent: {
    borderRadius: theme.borderRadius.xlarge,
    padding: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.primary + '20',
    ...theme.shadows.large,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  modalIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: theme.colors.secondary + '20',
    borderRadius: theme.borderRadius.xlarge,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  modalTitle: {
    ...theme.typography.h2,
    color: theme.colors.textPrimary,
    textAlign: 'center',
  },
  modalMessage: {
    ...theme.typography.body1,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    lineHeight: 24,
  },
  friendName: {
    color: theme.colors.secondary,
    fontWeight: '600',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  modalButton: {
    flex: 1,
    borderRadius: theme.borderRadius.medium,
  },
  cancelButtonGradient: {
    borderWidth: 1,
    borderColor: theme.colors.error + '40',
  },
  cancelButtonText: {
    color: theme.colors.error,
    ...theme.typography.body2,
    fontWeight: '600',
  },
  confirmButtonText: {
    color: theme.colors.textPrimary,
    ...theme.typography.body2,
    fontWeight: '600',
  },
});

export default AddCharacterForm;
