import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LocationSelectScreen({ navigation }) {
  const allLocations = [
    'Jagjiwan Pura',
    'Model Town',
    'Sector 3',
    'Batra Colony',
    'Surya Enclave',
    'Sundar Nagar',
    'Housing Board',
    'Sector 7'
  ];

  const [search, setSearch] = useState('');
  const filteredLocations = allLocations.filter(loc =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Search apart, hotel, etc"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          autoFocus
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#3f51b5' }}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.useCurrent}>
        <Ionicons name="locate" size={18} color="#d32f2f" />
        <View style={{ marginLeft: 8 }}>
          <Text style={{ color: '#d32f2f', fontWeight: 'bold' }}>Use Current Location</Text>
          <Text style={{ fontSize: 12, color: '#888' }}>Near Gurudwara Singh Sabha, Jagjiwan Pura</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeading}>Popular Locations</Text>

      <ScrollView>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((loc, index) => (
            <TouchableOpacity key={index} style={styles.locationRow}>
              <Ionicons name="location-outline" size={20} color="#3f51b5" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  Fatehabad <Text style={{ fontWeight: 'normal' }}>Haryana</Text>
                </Text>
                <Text style={{ fontSize: 12, color: '#777' }}>{loc}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={{ padding: 16, color: '#999' }}>No locations found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
  },
  input: { flex: 1, marginLeft: 10 },
  useCurrent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
  },
  subHeading: { color: '#888', fontSize: 12, marginVertical: 8 },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
