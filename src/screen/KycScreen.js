import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const KycScreen = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (!aadhaar || !pan || !address) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    // You can send this data to backend here
    Alert.alert('KYC Submitted', 'Your KYC has been submitted successfully!');
    // Clear form
    setAadhaar('');
    setPan('');
    setAddress('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Tenant KYC</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="card-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Aadhaar Number"
          style={styles.input}
          keyboardType="numeric"
          maxLength={12}
          value={aadhaar}
          onChangeText={setAadhaar}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="document-text-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="PAN Number"
          style={styles.input}
          autoCapitalize="characters"
          maxLength={10}
          value={pan}
          onChangeText={setPan}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Full Address"
          style={styles.input}
          multiline
          numberOfLines={3}
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit KYC</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default KycScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2e86de',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

 
