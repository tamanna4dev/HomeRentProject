import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal
} from 'react-native';
import AllPropeties from './AllPropeties';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const propertyData = [
  {
    id: '1',
    image: require('../assents/23.png'),
    price: '₹8,600/month',
    address: '25, Near Panchayat Bhawan, Fatehabad',
    rating: 4.5,
    category: 'Houses'
  },
  {
    id: '2',
    image: require('../assents/24.png'),
    price: '₹9,660/month',
    address: 'Bighar Road, Near Dhuria Hospital, Fatehabad',
    rating: 4.2,
    category: 'Shops'
  },
  {
    id: '3',
    image: require('../assents/25.png'),
    price: '₹6,500/month',
    address: 'Bhatia Colony, Fatehabad',
    rating: 4.0,
    category: 'Apartment'
  },
  {
    id: '4',
    image: require('../assents/23.png'),
    price: '₹10,200/month',
    address: 'Near Bus Stand, Fatehabad',
    rating: 4.3,
    category: 'Flats'
  },
  {
    id: '5',
    image: require('../assents/24.png'),
    price: '₹7,800/month',
    address: 'Sector 9, Fatehabad',
    rating: 4.6,
    category: 'Houses'
  }
];
export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Popular');

  const filterProperties = () => {
    if (selectedCategory === 'Popular') return propertyData;
    return propertyData.filter(item => item.category === selectedCategory);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.navigate('LocationSelect')}>
            <View>
              <Text style={styles.label}>Your Location</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-sharp" size={16} color="#666" />
                <Text style={styles.location}>Jagjiwan Pura, Fatehabad</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginLeft: 120 }}>
            <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
              <Ionicons name="notifications-outline" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
              <View style={{ backgroundColor: '#636AE8FF', borderRadius: 50, height: 35, width: 35, justifyContent: 'center', marginLeft: 16 }}>
                <Text style={{ fontSize: 15, fontWeight: '400', color: '#fff', textAlign: 'center' }}>R</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search House, Shop, Flat etc"
          />
          <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
            <MaterialIcons name="tune" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Category Filter */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {['Popular', 'Houses', 'Apartment', 'Shops', 'Flats'].map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.categoryBtn,
                selectedCategory === item && { backgroundColor: '#636AE8FF' }
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text style={{
                fontSize: 11,
                color: selectedCategory === item ? '#fff' : '#323842'
              }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.mapContainer}>
        <Image source={require('../assents/21.png')} style={{ width: '100%' }} />
      </View>

      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AllPropeties')}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assents/7.png')} />
            <Text style={styles.listHeader}>Houses</Text>
          </View>
          <Text style={styles.viewAllText}>View All Properties</Text>
        </TouchableOpacity>

        <FlatList
          data={filterProperties()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('AllPropeties')}>
              <View style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={styles.cardPrice}>{item.price}</Text>
                    <Text style={styles.cardAddress}>{item.address}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <AllPropeties />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { padding: 16, backgroundColor: '#fff' },
  label: { fontSize: 12, color: '#888' },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  location: { fontSize: 14, color: '#000', marginLeft: 4 },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
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
  categoryScroll: { marginVertical: 8 },
  categoryBtn: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    marginRight: 8,
    borderRadius: 20,
    fontSize: 11,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  mapContainer: { height: 200 },
  listContainer: { flex: 1, backgroundColor: '#fff', padding: 16 },
  listHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  viewAllText: { color: '#bbb', fontSize: 12 },
  card: {
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'space-between',
    // marginBottom: 12
  },
  cardImage: { width: 70, height: 80 },
  cardContent: { padding: 8, flex: 1, flexDirection: 'row' },
  cardPrice: { fontWeight: 'bold', fontSize: 11 },
  cardAddress: { color: '#777', fontSize: 9 }
});
