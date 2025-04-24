// screens/OwnerListingsScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OwnerListingsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Add New');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Owner Listings</Text>

    <View style={styles.tabContainer}>
           <TouchableOpacity
             style={[styles.tabButton, activeTab === 'Add New' && styles.activeTab]}
             onPress={() => setActiveTab('Add New')}
           >
             <Text style={[styles.tabText, activeTab === 'Add New' && styles.activeTabText]}>
               Add New
             </Text>
           </TouchableOpacity>
           <TouchableOpacity
             style={[styles.tabButton, activeTab === 'All Listings' && styles.activeTab]}
             onPress={() => navigation.navigate('AllListingsScreen')}
           >
             <Text style={[styles.tabText, activeTab === 'All Listings' && styles.activeTabText]}>
               All Listings
             </Text>
           </TouchableOpacity>
         </View>

      {/* Empty State */}
      {activeTab === 'Add New' && (
        <View style={styles.content}>
          <Text style={styles.title}>Add New Listing</Text>
          <Text style={styles.subtitle}>Tap the heart on home and it will appear here.</Text>
          <View style={styles.circle}>
          <Image source={require('../assents/22.png')}/>
          </View>
         
          <TouchableOpacity onPress={() => navigation.navigate('AddListingScreen')}
            style={styles.addButton}
            // onPress={() => console.log('Add New Listing Pressed')}
          >
            <Text style={styles.addButtonText}>ADD NEW</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* TODO: Handle All Listings tab here */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  header: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6FF',
    borderRadius: 30,
    padding: 4,
    justifyContent: 'center',
    marginBottom: 30,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#636AE8FF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
    marginBottom: 30,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#4A4AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
