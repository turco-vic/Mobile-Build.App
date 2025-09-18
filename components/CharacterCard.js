import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { theme } from '../theme';

const CharacterCard = ({ character, onToggleRecruit, onRemove }) => {
  const isConfirmed = character.recruited;

  return (
    <Animatable.View
      animation="fadeInUp"
      duration={500}
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => onToggleRecruit(character)}
        onLongPress={() => onRemove(character)}
        activeOpacity={0.9}
        style={styles.cardTouchable}
      >
        <LinearGradient
          colors={isConfirmed 
            ? [theme.colors.success + '20', theme.colors.success + '10']
            : [theme.colors.surface, theme.colors.surfaceLight]
          }
          style={[
            styles.card,
            isConfirmed && styles.cardConfirmed
          ]}
        >
          <View style={styles.cardContent}>
            <View style={styles.avatarContainer}>
              <LinearGradient
                colors={isConfirmed 
                  ? [theme.colors.success, theme.colors.success + 'DD']
                  : [theme.colors.primary + '40', theme.colors.primary + '20']
                }
                style={styles.avatar}
              >
                <MaterialIcons 
                  name={isConfirmed ? "celebration" : "person"} 
                  size={24} 
                  color={isConfirmed ? theme.colors.textPrimary : theme.colors.primary}
                />
              </LinearGradient>
            </View>
            
            <View style={styles.friendInfo}>
              <Text style={[
                styles.friendName,
                isConfirmed && styles.friendNameConfirmed
              ]}>
                {character.name}
              </Text>
              <Text style={[
                styles.friendStatus,
                isConfirmed && styles.friendStatusConfirmed
              ]}>
                {isConfirmed ? 'Confirmado para a festa!' : 'Aguardando confirmação'}
              </Text>
            </View>
            
            <View style={styles.statusContainer}>
              <View style={[
                styles.statusBadge,
                isConfirmed ? styles.statusBadgeConfirmed : styles.statusBadgePending
              ]}>
                <MaterialIcons 
                  name={isConfirmed ? "check" : "schedule"} 
                  size={16} 
                  color={isConfirmed ? theme.colors.success : theme.colors.warning}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  cardTouchable: {
    borderRadius: theme.borderRadius.large,
    ...theme.shadows.small,
  },
  card: {
    borderRadius: theme.borderRadius.large,
    borderWidth: 1,
    borderColor: theme.colors.primary + '20',
    overflow: 'hidden',
  },
  cardConfirmed: {
    borderColor: theme.colors.success + '40',
    borderWidth: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  avatarContainer: {
    marginRight: theme.spacing.md,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    ...theme.typography.h3,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  friendNameConfirmed: {
    color: theme.colors.success,
  },
  friendStatus: {
    ...theme.typography.body2,
    color: theme.colors.textSecondary,
  },
  friendStatusConfirmed: {
    color: theme.colors.success + 'CC',
  },
  statusContainer: {
    marginLeft: theme.spacing.sm,
  },
  statusBadge: {
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBadgeConfirmed: {
    backgroundColor: theme.colors.success + '20',
  },
  statusBadgePending: {
    backgroundColor: theme.colors.warning + '20',
  },
});

export default CharacterCard;
