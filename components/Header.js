import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="celebration" size={28} color={theme.colors.textPrimary} />
            </View>
            <Text style={styles.title}>Minha Festa</Text>
          </View>
          
          <View style={styles.subtitleContainer}>
            <View style={styles.legendItem}>
              <MaterialIcons name="check-circle" size={14} color={theme.colors.success} />
              <Text style={styles.legendText}>Confirmado</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.legendItem}>
              <MaterialIcons name="schedule" size={14} color={theme.colors.warning} />
              <Text style={styles.legendText}>Pendente</Text>
            </View>
          </View>
          
          <Text style={styles.instruction}>Toque para confirmar • Segure para remover</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
    marginHorizontal: -theme.spacing.md,
    marginTop: -50,
    paddingTop: 50,
  },
  gradientBackground: {
    borderBottomLeftRadius: theme.borderRadius.large,
    borderBottomRightRadius: theme.borderRadius.large,
    ...theme.shadows.medium,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xl,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.glassmorphism,
    borderRadius: theme.borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.textPrimary,
    fontWeight: '700',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.glassmorphism,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.large,
    marginBottom: theme.spacing.sm,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  legendText: {
    ...theme.typography.body2,
    color: theme.colors.textPrimary,
    fontWeight: '500',
  },
  separator: {
    width: 1,
    height: 12,
    backgroundColor: theme.colors.textMuted,
    marginHorizontal: theme.spacing.sm,
  },
  instruction: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default Header;
