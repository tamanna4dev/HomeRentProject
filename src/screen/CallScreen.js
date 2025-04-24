import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

const CallScreen = () => {
  const handleCall = () => {
    Linking.openURL('tel:+1234567890'); // Replace with the desired phone number
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call Screen</Text>
      <TouchableOpacity style={styles.callButton} onPress={handleCall}>
        <Text style={styles.buttonText}>Call Now</Text>
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
  callButton: {
    backgroundColor: '#28a745', // Green for call
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

export default CallScreen;
