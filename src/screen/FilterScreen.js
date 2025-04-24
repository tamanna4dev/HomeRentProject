import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FilterScreen() {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Nearby');
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [showRentDropdown, setShowRentDropdown] = useState(false);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);

  const [selectedRentRange, setSelectedRentRange] = useState('₹5,000 – ₹10,000');
  const [selectedPropertyType, setSelectedPropertyType] = useState('All');
  const [selectedArea, setSelectedArea] = useState('Any');

  const rentOptions = [
    '₹2,000 – ₹5,000',
    '₹5,000 – ₹10,000',
    '₹10,000 – ₹15,000',
    '₹15,000 – ₹20,000',
  ];

  const propertyTypes = [
    'All',
    'House',
    'Apartment',
    'Room',
    'Studio',
  ];

  const areaRanges = [
    'Any',
    '0 – 500 sqft',
    '500 – 1000 sqft',
    '1000 – 2000 sqft',
    '2000+ sqft',
  ];

  const [toggles, setToggles] = useState({
    separateEntry: true,
    kitchen: false,
    petAllowed: true,
    parking: true,
    furnished: true,
    backupOffers: false,
    pending: false,
    forFamily: false,
    recentlyAdded: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleReset = () => {
    setActiveTab('Nearby');
    setRoomCount(1);
    setBathroomCount(1);
    setSelectedRentRange('₹5,000 – ₹10,000');
    setSelectedPropertyType('All');
    setSelectedArea('Any');
    setToggles({
      separateEntry: true,
      kitchen: false,
      petAllowed: true,
      parking: true,
      furnished: true,
      backupOffers: false,
      pending: false,
      forFamily: false,
      recentlyAdded: false,
    });
  };

  const increase = (setter, value) => setter(value + 1);
  const decrease = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleSaveSearch = async () => {
    try {
      const filterData = {
        rentRange: selectedRentRange,
        propertyType: selectedPropertyType,
        area: selectedArea,
        roomCount,
        bathroomCount,
        toggles,
      };

      await AsyncStorage.setItem('savedSearch', JSON.stringify(filterData));
      console.log('Search saved!');
    } catch (error) {
      console.error('Error saving search:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filter</Text>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tabs */}
        <View style={styles.tabs}>
          {['Nearby', 'Popular', 'Recently Added'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Rent Range */}
        <View style={styles.section}>
          <Text style={styles.label}>Rent Range</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => setShowRentDropdown(!showRentDropdown)}>
            <Text>{selectedRentRange}</Text>
            <Ionicons name={showRentDropdown ? 'chevron-up' : 'chevron-down'} size={16} />
          </TouchableOpacity>
          {showRentDropdown && (
            <View style={styles.dropdownContent}>
              {rentOptions.map(option => (
                <TouchableOpacity key={option} onPress={() => { setSelectedRentRange(option); setShowRentDropdown(false); }}>
                  <Text style={{marginVertical:5,fontSize:11}}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Rooms */}
        <View style={styles.section}>
          <Text style={styles.label}>Rooms</Text>
          <View style={styles.counterRow}>
            <TouchableOpacity onPress={() => decrease(setRoomCount, roomCount)} style={styles.counterBtn}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{roomCount}</Text>
            <TouchableOpacity onPress={() => increase(setRoomCount, roomCount)} style={styles.counterBtn}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Property Types */}
        <View style={styles.section}>
          <Text style={styles.label}>Property Types</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => setShowPropertyDropdown(!showPropertyDropdown)}>
            <Text>{selectedPropertyType}</Text>
            <Ionicons name={showPropertyDropdown ? 'chevron-up' : 'chevron-down'} size={16} />
          </TouchableOpacity>
          {showPropertyDropdown && (
            <View style={styles.dropdownContent}>
              {propertyTypes.map(option => (
                <TouchableOpacity key={option} onPress={() => { setSelectedPropertyType(option); setShowPropertyDropdown(false); }}>
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Bathrooms */}
        <View style={styles.section}>
          <Text style={styles.label}>Bathrooms</Text>
          <View style={styles.counterRow}>
            <TouchableOpacity onPress={() => decrease(setBathroomCount, bathroomCount)} style={styles.counterBtn}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{bathroomCount}</Text>
            <TouchableOpacity onPress={() => increase(setBathroomCount, bathroomCount)} style={styles.counterBtn}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Area */}
        <View style={styles.section}>
          <Text style={styles.label}>Area</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => setShowAreaDropdown(!showAreaDropdown)}>
            <Text>{selectedArea}</Text>
            <Ionicons name={showAreaDropdown ? 'chevron-up' : 'chevron-down'} size={16} />
          </TouchableOpacity>
          {showAreaDropdown && (
            <View style={styles.dropdownContent}>
              {areaRanges.map(option => (
                <TouchableOpacity key={option} onPress={() => { setSelectedArea(option); setShowAreaDropdown(false); }}>
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Toggles */}
        {[ 
          { label: 'Separate Entry', key: 'separateEntry' },
          { label: 'Kitchen', key: 'kitchen' },
          { label: 'Pet Allowed', key: 'petAllowed' },
          { label: 'Parking', key: 'parking' },
          { label: 'Furnished', key: 'furnished' },
          { label: 'Accepting Backup Offers', key: 'backupOffers' },
          { label: 'Pending & Under Contract', key: 'pending' },
          { label: 'For Family', key: 'forFamily' },
          { label: 'Recently Added', key: 'recentlyAdded' },
        ].map(({ label, key }) => (
          <View key={key} style={styles.toggleRow}>
            <Text>{label}</Text>
            <Switch
              value={toggles[key]}
              onValueChange={() => handleToggle(key)}
              trackColor={{ false: '#ccc', true: '#c7befc' }}
              thumbColor={toggles[key] ? '#4f3cc9' : '#eee'}
            />
          </View>
        ))}

      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSaveSearch}>
          <Text style={{ color: '#4f3cc9' }}>Save Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MainApp')} style={styles.seeBtn}>
          <Text style={{ color: 'white' }}>See Homes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cancel: { color: '#4f3cc9' },
  reset: { color: '#4f3cc9' },
  title: { fontWeight: '600', fontSize: 16 },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
    backgroundColor: '#f0f0f5',
    borderRadius: 8,
    marginHorizontal: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  tabText: { color: '#999' },
  activeTabText: { color: '#4f3cc9', fontWeight: '600' },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  section: { marginTop: 16 },
  label: { fontWeight: '600', marginBottom: 6 },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownContent: {
    marginTop: 8,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    
  },
  counterBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  counterValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  holdingTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  saveBtn: {
    backgroundColor: '#eeeaff',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  seeBtn: {
    backgroundColor: '#4f3cc9',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
});