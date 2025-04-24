import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RefundPolicyScreen = () => {

  const handleAgree = () => {
    Alert.alert('Thank You!', 'You have acknowledged the Refund Policy.');
    // Add navigation or any other logic for after acknowledging
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refund Policy</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          {/* Add your refund policy content here */}
          <Text style={styles.sectionTitle}>Introduction</Text>
          {'\n\n'}
          Our refund policy outlines the terms and conditions under which you are eligible for a refund. Please read the following carefully...

          <Text style={styles.sectionTitle}>1. Eligibility for Refund</Text>
          {'\n\n'}
          You may be eligible for a refund if you purchased a product or service through our app and you meet the conditions outlined below...

          <Text style={styles.sectionTitle}>2. Refund Request Process</Text>
          {'\n\n'}
          To request a refund, please follow the steps mentioned below:  
          1. Contact our support team at support@ourapp.com  
          2. Provide your purchase details including date and order ID.

          <Text style={styles.sectionTitle}>3. Non-Refundable Items</Text>
          {'\n\n'}
          Certain purchases are not eligible for refunds, including but not limited to subscription renewals or purchases made outside the app...

          <Text style={styles.sectionTitle}>4. Refund Timelines</Text>
          {'\n\n'}
          Refunds are typically processed within 7-10 business days. You will receive a notification once the refund has been processed...

          {/* Add more sections as needed */}
        </Text>
      </ScrollView>

      <TouchableOpacity style={styles.agreeButton} onPress={handleAgree}>
        <Ionicons name="checkmark-circle-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>I Acknowledge</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RefundPolicyScreen;

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
