// screens/AllListingsScreen.js

import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Switch
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function AllListingsScreen({ navigation }) {
  const initialListings = [
    {
      id: 1,
      image: require('../assents/5.png'),
      rent: '₹9,600/month',
      status: 'PUBLISHED',
      isActive: true,
      address: '46, Jagjiwan Pura, Fatehabad',
      bedrooms: 2,
      bathrooms: 2,
      kitchen: 1,
      area: '1,000 sqft',
      isFurnished: true,
    },
    {
      id: 2,
      image: require('../assents/5.png'),
      rent: '₹9,600/month',
      status: 'DRAFT',
      isActive: false,
      address: '46, Jagjiwan Pura, Fatehabad',
      bedrooms: 2,
      bathrooms: 2,
      kitchen: 1,
      area: '1,000 sqft',
      isFurnished: true,
    },
    {
      id: 3,
      image: require('../assents/5.png'),
      rent: '₹9,600/month',
      status: 'DRAFT',
      isActive: false,
      address: '46, Jagjiwan Pura, Fatehabad',
      bedrooms: 2,
      bathrooms: 2,
      kitchen: 1,
      area: '1,000 sqft',
      isFurnished: true,
    },
  ];

  const [listingsData, setListingsData] = useState(initialListings);
  const [activeTab, setActiveTab] = useState('all');

  const handleToggleSwitch = (id, value) => {
    const updatedListings = listingsData.map((item) =>
      item.id === id ? { ...item, isActive: value } : item
    );
    setListingsData(updatedListings);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Listings</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Add New' && styles.activeTab]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.tabText, activeTab === 'Add New' && styles.activeTabText]}>
            Add New
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.active}
          onPress={() => setActiveTab('All Listings')}
        >
          <Text style={styles.activeTabText}>All Listings</Text>
        </TouchableOpacity>
      </View>

      {/* Listings */}
      <FlatList
        data={listingsData}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.furnishedTag}>Furnished</Text>
            <TouchableOpacity style={styles.heartIcon}>
              <Ionicons name="heart-outline" size={22} color="#666" />
            </TouchableOpacity>

            <View style={styles.cardBody}>
              <View style={styles.rentRow}>
                <Text style={styles.rent}>{item.rent}</Text>
                <View style={styles.statusRow}>
                  <Text style={[styles.statusText, {
                    color: item.isActive ? '#4CAF50' : '#aaa'
                  }]}>
                    {item.status}
                  </Text>
                  <Switch
                    value={item.isActive}
                    onValueChange={(value) => handleToggleSwitch(item.id, value)}
                    trackColor={{ false: '#ccc', true: '#4A4AFF' }}
                    thumbColor="#fff"
                  />
                </View>
              </View>

              <Text style={styles.details}>
                🛏 {item.bedrooms} Bedrooms  |  🛁 {item.bathrooms} Bath  |  🍽 {item.kitchen} Kitchen
              </Text>
              <Text style={styles.address}>📍 {item.address} • {item.area}</Text>

              <TouchableOpacity onPress={() => navigation.navigate('AddListingScreen')} style={styles.editBtn}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: '600', marginBottom: 16, textAlign: 'center' },

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
  active: {
    backgroundColor: '#636AE8FF',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
  activeTabText: {
    color: '#fff',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    elevation: 3,
    shadowColor: '#aaa',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  furnishedTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#4A4AFF',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 4,
  },
  cardBody: { padding: 12 },
  rentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rent: { fontSize: 16, fontWeight: 'bold' },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statusText: { fontSize: 12, marginRight: 6 },

  details: { fontSize: 13, color: '#555', marginVertical: 6 },
  address: { fontSize: 13, color: '#888' },

  editBtn: {
    backgroundColor: '#eee',
    alignSelf: 'flex-end',
    marginTop: 10,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
  },
  editText: { fontSize: 13, color: '#4A4AFF', fontWeight: '600' },
});
