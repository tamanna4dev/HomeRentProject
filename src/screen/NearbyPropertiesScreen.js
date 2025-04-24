// NearbyPropertiesScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { propertyList } from '../JsonData/propertyData';

const NearbyPropertiesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PropertyDetail')}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.details}>{item.details}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <TouchableOpacity>
          <Text style={styles.detailLink}>View More Detail</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Nearby Houses</Text>
      <FlatList
        data={propertyList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 6,
  },
  price: { fontWeight: 'bold', fontSize: 16 },
  details: { fontSize: 13, color: '#666' },
  location: { fontSize: 12, color: '#999' },
  detailLink: { color: '#7e57c2', marginTop: 4, fontSize: 13 },
});

export default NearbyPropertiesScreen;
