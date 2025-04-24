import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { propertyList } from '../JsonData/propertyData';

const AllPropertiesScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Popular');

  const filteredList =
    selectedCategory === 'Popular'
      ? propertyList
      : propertyList.filter(item => item.category === selectedCategory);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LocationSelect')}>
          <View>
            <Text style={styles.label}>Your Location</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-sharp" size={16} color="#666" />
              <Text style={styles.location}>Jagjiwan Pura, Fatehabad</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
          <Ionicons name="notifications-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search House, Shop, Flat etc"
        />
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <MaterialIcons name="tune" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Category Chips with Filtering */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsRow}
      >
        {['Popular', 'Houses', 'Flats', 'Shops', 'PG'].map((chip, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(chip)}
            style={[
              styles.chip,
              selectedCategory === chip && { backgroundColor: '#7e57c2' },
            ]}
          >
            <Text
              style={[
                styles.chipText,
                selectedCategory === chip && { color: '#fff' },
              ]}
            >
              {chip}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filtered Properties */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Houses Nearby</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NearbyPropertiesScreen')}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredList.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('PropertyDetail')}
          >
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.details}>{item.details}</Text>
              <Text style={styles.locationText}>{item.location}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('PropertyDetail')}>
                <Text style={styles.detailLink}>View More Detail</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Our Recommendations */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Our Recommendations</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NearbyPropertiesScreen')}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('PropertyDetail')}>
        <View style={styles.card2}>
          <Image source={require('../assents/5.png')} style={styles.Image} />
          <Text style={styles.price}>₹9,600/month</Text>
          <Text style={styles.details}>2 Bedrooms · 2 Bath · 1 Kitchen</Text>
          <Text style={styles.locationText}>
            1,000 sqft · Jagjiwan Pura, Fatehabad
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('PropertyDetail')}>
            <Text style={styles.detailLink}>View More Detail</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: { fontSize: 12, color: '#888' },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  location: { fontSize: 14, color: '#000', marginLeft: 4 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  input: { flex: 1, fontSize: 14 },
  chipsRow: { marginBottom: 16 },
  chip: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  chipText: { color: '#333' },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  sectionTitle: { fontWeight: 'bold', fontSize: 16 },
  seeAll: { color: '#7e57c2' },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 260,
    marginBottom: 16,
  },
  card2: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    width: 420,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 6,
  },
  Image: {
    width: '110%',
    marginLeft: -20,
    marginBottom: 6,
  },
  price: { fontWeight: 'bold', fontSize: 16 },
  details: { fontSize: 13, color: '#666' },
  locationText: { fontSize: 12, color: '#999' },
  detailLink: { color: '#7e57c2', marginTop: 4, fontSize: 13 },
});

export default AllPropertiesScreen;
