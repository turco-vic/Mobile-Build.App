import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

const Toast = ({ visible, message, type = 'success', onHide }) => {
  const toastRef = useRef();

  useEffect(() => {
    if (visible) {
      toastRef.current?.slideInDown();
      
      const timer = setTimeout(() => {
        toastRef.current?.slideOutUp().then(() => {
          onHide && onHide();
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible) return null;

  const getToastStyle = () => {
    switch (type) {
      case 'success':
        return theme.components.toast.success;
      case 'error':
        return theme.components.toast.error;
      case 'info':
        return theme.components.toast.info;
      case 'warning':
        return theme.components.toast.warning;
      default:
        return theme.components.toast.success;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'check-circle';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      default:
        return 'check-circle';
    }
  };

  return (
    <Animatable.View
      ref={toastRef}
      style={[styles.container, getToastStyle()]}
    >
      <MaterialIcons name={getIcon()} size={20} color={theme.colors.text.primary} />
      <Text style={styles.message}>{message}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1000,
    gap: theme.spacing.sm,
  },
  message: {
    ...theme.components.text.small,
    fontWeight: theme.typography.fontWeight.semibold,
    flex: 1,
  },
});

export default Toast;
