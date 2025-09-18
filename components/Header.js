import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.colors.gradient.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="celebration" size={28} color={theme.colors.text.primary} />
            </View>
            <Text style={styles.title}>Minha Festa</Text>
          </View>
          
          <View style={styles.subtitleContainer}>
            <View style={styles.legendItem}>
              <MaterialIcons name="check-circle" size={14} color={theme.colors.status.success} />
              <Text style={styles.legendText}>Confirmado</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.legendItem}>
              <MaterialIcons name="schedule" size={14} color={theme.colors.status.warning} />
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
    borderBottomLeftRadius: theme.borderRadius.xl,
    borderBottomRightRadius: theme.borderRadius.xl,
    ...theme.shadows.lg,
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
    backgroundColor: theme.colors.overlay,
    borderRadius: theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  title: {
    ...theme.components.text.h1,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.overlay,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.full,
    marginBottom: theme.spacing.sm,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  legendText: {
    ...theme.components.text.small,
    fontWeight: theme.typography.fontWeight.medium,
  },
  separator: {
    width: 1,
    height: 12,
    backgroundColor: theme.colors.text.disabled,
    marginHorizontal: theme.spacing.sm,
  },
  instruction: {
    ...theme.components.text.caption,
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default Header;
