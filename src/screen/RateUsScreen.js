import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RateUsScreen   = () => {
  const handleRateUs = async () => {
    const appStoreURL = 'https://apps.apple.com/app/id1234567890'; // ✅ Replace with your actual App Store ID
    const playStoreURL = 'https://play.google.com/store/apps/details?id=com.yourapp'; // ✅ Replace with your actual package name
  
    const url = Platform.OS === 'ios' ? appStoreURL : playStoreURL;
  
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Store not available on this device.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while trying to open the store.');
      console.error(error);
    }
  };
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Us</Text>
      <Text style={styles.description}>
        If you love using this app, please take a moment to rate us. Your feedback is important!
      </Text>

      <TouchableOpacity style={styles.rateButton} onPress={handleRateUs}>
  <Ionicons name="star" size={24} color="#fff" />
  <Text style={styles.buttonText}>Rate Now</Text>
</TouchableOpacity>

    </View>
  );
};

export default RateUsScreen ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  rateButton: {
    flexDirection: 'row',
    backgroundColor: '#f39c12',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
});

 
