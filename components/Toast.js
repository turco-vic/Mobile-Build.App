import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

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
        return {
          backgroundColor: 'rgba(78, 205, 196, 0.95)',
          borderColor: '#4ECDC4',
        };
      case 'error':
        return {
          backgroundColor: 'rgba(255, 107, 107, 0.95)',
          borderColor: '#FF6B6B',
        };
      case 'info':
        return {
          backgroundColor: 'rgba(43, 154, 238, 0.95)',
          borderColor: '#2B9AEE',
        };
      default:
        return {
          backgroundColor: 'rgba(78, 205, 196, 0.95)',
          borderColor: '#4ECDC4',
        };
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
      <MaterialIcons name={getIcon()} size={20} color="#FFFFFF" />
      <Text style={styles.message}>{message}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
    gap: 8,
  },
  message: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
});

export default Toast;
