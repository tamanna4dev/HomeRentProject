import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

const WhatsAppScreen = () => {
  const handleWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=+1234567890'); // Replace with the desired WhatsApp number
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhatsApp Screen</Text>
      <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
        <Text style={styles.buttonText}>Message on WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  whatsappButton: {
    backgroundColor: '#25d366', // WhatsApp Green
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WhatsAppScreen;
