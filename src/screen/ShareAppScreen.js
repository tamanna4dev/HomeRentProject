import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Share } from 'react-native'; // use Share from react-native
import { Ionicons } from '@expo/vector-icons';

const ShareAppScreen = () => {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this awesome app! Download it now on the App Store or Google Play!\nhttps://www.your-app-link.com',
      });

      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while trying to share.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share the App</Text>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Ionicons name="share-social" size={24} color="#fff" />
        <Text style={styles.buttonText}>Share Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShareAppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  shareButton: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
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
