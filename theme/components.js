import { colors } from './colors';
import { typography } from './typography';
import { spacing, borderRadius, shadows } from './spacing';

export const components = {
  button: {
    primary: {
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.lg,
      ...shadows.md,
      shadowColor: colors.primary
    },
    secondary: {
      backgroundColor: colors.secondary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.lg,
      ...shadows.md,
      shadowColor: colors.secondary
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.lg
    },
    ghost: {
      backgroundColor: 'transparent',
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.lg
    },
    disabled: {
      backgroundColor: colors.border,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.lg
    }
  },

  text: {
    h1: {
      fontSize: typography.fontSize['4xl'],
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      lineHeight: typography.lineHeight.tight
    },
    h2: {
      fontSize: typography.fontSize['3xl'],
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      lineHeight: typography.lineHeight.tight
    },
    h3: {
      fontSize: typography.fontSize['2xl'],
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      lineHeight: typography.lineHeight.normal
    },
    h4: {
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      lineHeight: typography.lineHeight.normal
    },
    body: {
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.normal,
      color: colors.text.primary,
      lineHeight: typography.lineHeight.normal
    },
    bodySecondary: {
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.normal,
      color: colors.text.secondary,
      lineHeight: typography.lineHeight.normal
    },
    small: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.normal,
      color: colors.text.secondary,
      lineHeight: typography.lineHeight.normal
    },
    caption: {
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.normal,
      color: colors.text.disabled,
      lineHeight: typography.lineHeight.normal
    }
  },

  card: {
    default: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      ...shadows.md,
      shadowColor: colors.shadow,
      borderWidth: 1,
      borderColor: colors.border
    },
    elevated: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      ...shadows.lg,
      shadowColor: colors.shadow
    },
    flat: {
      backgroundColor: colors.surfaceLight,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border
    }
  },

  input: {
    default: {
      backgroundColor: colors.surface,
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: borderRadius.lg,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      fontSize: typography.fontSize.base,
      color: colors.text.primary
    },
    focused: {
      borderColor: colors.primary,
      ...shadows.sm,
      shadowColor: colors.primary
    },
    error: {
      borderColor: colors.status.error
    }
  },

  toast: {
    success: {
      backgroundColor: colors.status.success,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      ...shadows.lg,
      shadowColor: colors.status.success
    },
    error: {
      backgroundColor: colors.status.error,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      ...shadows.lg,
      shadowColor: colors.status.error
    },
    info: {
      backgroundColor: colors.status.info,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      ...shadows.lg,
      shadowColor: colors.status.info
    },
    warning: {
      backgroundColor: colors.status.warning,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      ...shadows.lg,
      shadowColor: colors.status.warning
    }
  },

  filter: {
    active: {
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.full,
      ...shadows.sm,
      shadowColor: colors.primary
    },
    inactive: {
      backgroundColor: colors.surfaceLight,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.full,
      borderWidth: 1,
      borderColor: colors.border
    }
  }
};