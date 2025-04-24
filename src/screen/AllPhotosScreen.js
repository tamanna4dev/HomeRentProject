import React from 'react';
import { View, Image, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AllPhotosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>All Photos</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        <Image source={require('../assents/4.png')} style={styles.image} />
        <Image source={require('../assents/4.png')} style={styles.image} />
        <Image source={require('../assents/4.png')} style={styles.image} />
        <Image source={require('../assents/4.png')} style={styles.image} />
        <Image source={require('../assents/4.png')} style={styles.image} />
        <Image source={require('../assents/4.png')} style={styles.image} />
        <Image source={require('../assents/4.png')} style={styles.image} />
        <Image source={require('../assents/4.png')} style={styles.image} />

    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  image: { width: '48%', height: 160, borderRadius: 8, marginBottom: 12 },
});
