import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TermsConditionsScreen = () => {

  const handleAgree = () => {
    Alert.alert('Thank You!', 'You have agreed to the Terms & Conditions.');
    // Add navigation or any other logic for after agreeing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          {/* Add your terms and conditions content here */}
          <Text style={styles.sectionTitle}>Introduction</Text>
          {'\n\n'}
          Welcome to our app! By using this app, you agree to the following terms and conditions...

          <Text style={styles.sectionTitle}>1. User Responsibilities</Text>
          {'\n\n'}
          You are responsible for maintaining the confidentiality of your account information...

          <Text style={styles.sectionTitle}>2. Privacy Policy</Text>
          {'\n\n'}
          We value your privacy and will never share your personal data without your consent...

          <Text style={styles.sectionTitle}>3. Terms of Use</Text>
          {'\n\n'}
          You agree not to use the app for illegal purposes and agree to comply with all applicable laws...
          
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

export default TermsConditionsScreen;

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
