// FavoritesDetail.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../screen/FavoritesContext';

const properties = [ // 👈 YEH LINE ZARUR ADD KARO
  {
    id: '1',
    image: require('../assents/5.png'),
    price: '₹9,600/month',
    beds: 2,
    baths: 2,
    kitchen: 1,
    address: '46, Jagjiwan Pura, Fatehabad',
    size: '1,000 sqft',
    tag: 'Furnished',
  },
  {
    id: '2',
    image: require('../assents/5.png'),
    price: '₹9,600/month',
    beds: 2,
    baths: 2,
    kitchen: 1,
    address: '46, Jagjiwan Pura, Fatehabad',
    size: '1,000 sqft',
    tag: 'Furnished',
  },
  {
    id: '3',
    image: require('../assents/5.png'),
    price: '₹9,600/month',
    beds: 2,
    baths: 2,
    kitchen: 1,
    address: '46, Jagjiwan Pura, Fatehabad',
    size: '1,000 sqft',
    tag: 'Furnished',
  },
  {
    id: '4',
    image: require('../assents/5.png'),
    price: '₹9,600/month',
    beds: 2,
    baths: 2,
    kitchen: 1,
    address: '46, Jagjiwan Pura, Fatehabad',
    size: '1,000 sqft',
    tag: 'Furnished',
  },
  {
    id: '5',
    image: require('../assents/5.png'),
    price: '₹9,600/month',
    beds: 2,
    baths: 2,
    kitchen: 1,
    address: '46, Jagjiwan Pura, Fatehabad',
    size: '1,000 sqft',
    tag: 'Furnished',
  },

];

export default function FavoritesDetail() {
  const { favorites, toggleFavorite } = useFavorites();
  const [liked, setLiked] = useState({});

  const handleHeartPress = (item) => {
    toggleFavorite(item);
    setLiked((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>Favorites</Text>
      {properties.map((item) => {
        const isFav = liked[item.id] || favorites.some(fav => fav.id === item.id);
        return (
          <View key={item.id} style={styles.card}>
            <View style={styles.imageContainer}>
              <ImageBackground source={item.image} style={styles.image} imageStyle={{ borderRadius: 10 }}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{item.tag}</Text>
                </View>
              </ImageBackground>
              <TouchableOpacity
                style={styles.heart}
                onPress={() => handleHeartPress(item)}
              >
                <Ionicons
                  name={isFav ? 'heart' : 'heart-outline'}
                  size={22}
                  color={isFav ? 'red' : '#8E8E93'}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="bed-outline" size={16} color="#555" />
              <Text style={styles.infoText}>{item.beds} Bedrooms</Text>
              <MaterialCommunityIcons name="shower" size={16} color="#555" />
              <Text style={styles.infoText}>{item.baths} Bath</Text>
              <MaterialCommunityIcons name="silverware-fork-knife" size={16} color="#555" />
              <Text style={styles.infoText}>{item.kitchen} Kitchen</Text>
            </View>
            <Text style={styles.address}>{item.address}</Text>
            <View style={styles.sizeRow}>
              <MaterialCommunityIcons name="ruler-square" size={16} color="#555" />
              <Text style={styles.infoText}>{item.size}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingHorizontal: 15, paddingBottom: 30 },
  header: { fontSize: 20, fontWeight: '600', paddingTop: 50, paddingBottom: 15, textAlign: 'center' },
  card: { marginBottom: 20, backgroundColor: '#fff' },
  imageContainer: { position: 'relative', justifyContent: 'center', alignItems: 'center' },
  image: { width: '103%', height: 200 },
  tag: { position: 'absolute', top: 14, left: 24, backgroundColor: '#f2f2f2', borderRadius: 12, paddingHorizontal: 6, paddingVertical: 2 },
  tagText: { fontSize: 11, fontWeight: '500' },
  heart: { position: 'absolute', top: 14, right: 13, backgroundColor: '#fff', padding: 6, borderRadius: 20 },
  price: { fontSize: 16, fontWeight: '600', marginTop: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, flexWrap: 'wrap' },
  infoText: { fontSize: 13, color: '#444', marginHorizontal: 4 },
  address: { fontSize: 13, color: '#888', marginTop: 6 },
  sizeRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
});