// App.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
 
export default function FavoritesScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
  {/* Back Button */}
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Ionicons name="arrow-back" size={24} color="#000" />
  </TouchableOpacity>

  <Text style={styles.header}>Favorites</Text>

    {/* <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Favorites</Text>

      {/* Segmented control (mocked) */}
      <View style={styles.segmentContainer}>
        <View style={styles.segmentActive}>
          <Text style={styles.segmentText}>Home</Text>
        </View>
      </View> 

      {/* Empty State */}
      <View style={styles.emptyContainer}>
        <Text style={styles.title}>Saved Homes</Text>
        <Text style={styles.subtitle}>
          Tap the heart on home and it will appear here.
        </Text>

        <View style={styles.heartCircle}>
     <Image source={require('../assents/16.png')}/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('FavoritesDetail')} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Start Searching</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  
  segmentContainer: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    padding: 4,
    alignSelf: 'center',
    width: 160,
    marginBottom: 40,
  },
  segmentActive: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  segmentText: {
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
  },
  subtitle: {
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 30,
  },
  heartCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  searchButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
