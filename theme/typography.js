import { Platform } from 'react-native';

export const typography = {
  fontFamily: {
    regular: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System'
    }),
    medium: Platform.select({
      ios: 'System',
      android: 'Roboto_medium',
      default: 'System'
    }),
    bold: Platform.select({
      ios: 'System',
      android: 'Roboto_bold',
      default: 'System'
    }),
    light: Platform.select({
      ios: 'System',
      android: 'Roboto_light',
      default: 'System'
    })
  },
  
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48
  },
  
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2
  },
  
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1
  }
};