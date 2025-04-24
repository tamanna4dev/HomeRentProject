import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const listings = [
  {
    id: '1',
    title: '2 BHK Apartment in Andheri',
    location: 'Mumbai, Maharashtra',
    price: '₹25,000/month',
    description: 'Spacious apartment with 24x7 water and security.',
  },
  {
    id: '2',
    title: '1 BHK Flat in Bandra',
    location: 'Mumbai, Maharashtra',
    price: '₹18,000/month',
    description: 'Well-connected location, ideal for working professionals.',
  },
  {
    id: '3',
    title: '3 BHK in Powai with Lake View',
    location: 'Mumbai, Maharashtra',
    price: '₹40,000/month',
    description: 'Modern amenities with scenic view.',
  },
];

const ListingsScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="home-city-outline" size={60} color="#555" />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
  price: {
    fontSize: 16,
    color: '#228B22',
    marginTop: 4,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginTop: 6,
  },
});
