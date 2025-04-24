import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileDetailsScreen({ navigation }) {
  // Static data (read-only)
  const fullName = 'Rahul Kumar';
  const email = 'tenant@email.com';
  const phone = '9876543210';
  const address = '123 Main Street, City, Country';
  const postalCode = '12345';
  const gender = 'Male';
  const dob = '01/01/1990';

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>Profile Details</Text>

          {/* Personal Information */}
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{fullName}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>

          <Text style={styles.label}>Mobile No:</Text>
          <Text style={styles.value}>{phone}</Text>

          {/* Address Information */}
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{address}</Text>

          <Text style={styles.label}>Postal Code:</Text>
          <Text style={styles.value}>{postalCode}</Text>

          {/* Additional Information */}
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{gender}</Text>

          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{dob}</Text>
        </View>
        <Text style={{ marginVertical: 20 }}></Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    marginVertical: 6,
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
    color: '#444',
  },
});
