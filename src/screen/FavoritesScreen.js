import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../screen/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Favorites</Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.title}>Saved Homes</Text>
          <Text style={styles.subtitle}>
            Tap the heart on a home and it will appear here.
          </Text>
          <View style={styles.heartCircle}>
            <Image source={require('../assents/16.png')} />
          </View>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.address}>{item.address}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.extraInfo}>
                  {item.beds} Bed • {item.baths} Bath • {item.kitchen} Kitchen
                </Text>
              </View>
            </View>
          )}
        />
      )}

      {/* Start Searching Button (Always visible at bottom) */}
      <TouchableOpacity
        onPress={() => navigation.navigate('FavoritesDetail')}
        style={styles.fixedSearchButton}
      >
        <Text style={styles.searchButtonText}>Start Searching</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  address: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6C63FF',
    marginBottom: 4,
  },
  extraInfo: {
    fontSize: 12,
    color: '#666',
  },
  fixedSearchButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
