import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const propertyData = [
  {
    id: '1',
    location: 'Sundar Nagar',
    image: require('../assents/2.png'),
    price: '₹7600/month',
    address: '45, Sundar Nagar, Fatehabad',
    rating: 4,
  },
  {
    id: '2',
    location: 'Sector 3',
    image: require('../assents/3.png'),
    price: '₹8200/month',
    address: '23, Sector 3, Fatehabad',
    rating: 4.5,
  },
  {
    id: '3',
    location: 'Model Town',
    image: require('../assents/4.png'),
    price: '₹9500/month',
    address: '10, Model Town, Fatehabad',
    rating: 4.2,
  },
];

export default function ExploreScreen() {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredProperties = selectedLocation
    ? propertyData.filter(item => item.location === selectedLocation)
    : propertyData;

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={{ marginHorizontal: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Sundar Nagar, Fatehabad"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <Ionicons name="options-outline" size={20} color="#888" style={{ marginHorizontal: 8 }} />
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {['All', 'Sundar Nagar', 'Sector 3', 'Model Town'].map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.categoryBtn,
              selectedLocation === item || (item === 'All' && !selectedLocation)
                ? { backgroundColor: '#007BFF' }
                : {},
            ]}
            onPress={() => setSelectedLocation(item === 'All' ? null : item)}
          >
            <Text
              style={{
                fontSize: 11,
                color: selectedLocation === item || (item === 'All' && !selectedLocation) ? '#fff' : '#323842'
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Static Map Image and Property Cards */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../assents/19.png')} // 👈 Replace with your map image
          style={styles.map}
          resizeMode="cover"
        />

        {filteredProperties.map((property) => (
          <View key={property.id} style={styles.propertyCard}>
            <Image style={styles.propertyImage} source={property.image} />
            <View style={styles.propertyInfo}>
              <Text style={styles.priceText}>{property.price}</Text>
              <Text style={styles.addressText}>{property.address}</Text>
              <AirbnbRating
                defaultRating={property.rating}
                isDisabled
                showRating={false}
                size={15}
                starContainerStyle={{ alignSelf: 'flex-start' }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 14,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  categoryScroll: {
    marginVertical: 8,
  },
  categoryBtn: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    flex: 16,
    position: 'relative',
    marginTop: -28,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  propertyCard: {
    position: 'absolute',
    bottom: 90,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
    alignItems: 'center',
  },
  propertyImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  propertyInfo: {
    marginLeft: 12,
    flex: 1,
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addressText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
});
