import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrivacyPolicyScreen = () => {

  const handleAgree = () => {
    Alert.alert('Thank You!', 'You have agreed to the Privacy Policy.');
    // Add navigation or any other logic for after agreeing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          {/* Add your privacy policy content here */}
          <Text style={styles.sectionTitle}>Introduction</Text>
          {'\n\n'}
          Welcome to our app! Your privacy is very important to us. Please read this privacy policy carefully...

          <Text style={styles.sectionTitle}>1. Information Collection</Text>
          {'\n\n'}
          We collect the following information: your name, email address, and usage data to improve our services...

          <Text style={styles.sectionTitle}>2. Data Usage</Text>
          {'\n\n'}
          The data we collect is used to personalize your experience and improve our services...

          <Text style={styles.sectionTitle}>3. Data Protection</Text>
          {'\n\n'}
          We use industry-standard measures to protect your data, including encryption and secure storage...

          <Text style={styles.sectionTitle}>4. Sharing Information</Text>
          {'\n\n'}
          We do not share your personal data with third parties, except in the case of legal requirements...

          {/* Add more sections as needed */}
        </Text>
      </ScrollView>

      <TouchableOpacity style={styles.agreeButton} onPress={handleAgree}>
        <Ionicons name="checkmark-circle-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>I Agree</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 18,
    marginTop: 10,
  },
  agreeButton: {
    flexDirection: 'row',
    backgroundColor: '#2e86de',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
