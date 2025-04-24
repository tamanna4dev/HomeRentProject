import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Switch, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';

export default function AddListingScreen({ navigation }) {
  const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
  const [propertyType, setPropertyType] = useState('Home');
  const [propertyTypes, setPropertyTypes] = useState([
    { label: 'Home', value: 'Home' },
    { label: 'PG', value: 'PG' },
    { label: 'Flat', value: 'Flat' },
  ]);

  const [stateOpen, setStateOpen] = useState(false);
  const [state, setState] = useState('Haryana');
  const [states, setStates] = useState([
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Punjab', value: 'Punjab' },
  ]);

  const [floorOpen, setFloorOpen] = useState(false);
  const [floor, setFloor] = useState('Ground');
  const [floors, setFloors] = useState([
    { label: 'Ground', value: 'Ground' },
    { label: '1st Floor', value: '1st' },
    { label: '2nd Floor', value: '2nd' },
  ]);

  const [askingRent, setAskingRent] = useState('7600');
  const [streetAddress, setStreetAddress] = useState('');
  const [village, setVillage] = useState('Fatehabad');
  const [city, setCity] = useState('Fatehabad');
  const [rooms, setRooms] = useState('1+');
  const [bathrooms, setBathrooms] = useState('Any');
  const [area, setArea] = useState('1500');
  const [furnished, setFurnished] = useState(true);
  const [separateEntry, setSeparateEntry] = useState(true);
  const [kitchen, setKitchen] = useState(false);
  const [petAllowed, setPetAllowed] = useState(true);
  const [parking, setParking] = useState(true);
  const [note, setNote] = useState('');
  const [contactViaChat, setContactViaChat] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const roomOptions = ['1+', '2+', '3+', '4+'];
  const bathroomOptions = ['Any', '1+', '2+', '3+', '4+', '5+'];

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permission is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
        <Text style={styles.title}>Add New</Text>
        <TouchableOpacity><Text style={styles.link}>Reset</Text></TouchableOpacity>
      </View>

      <Text style={styles.label}>Property Type</Text>
      <DropDownPicker
  open={stateOpen}
  value={state}
  items={states}
  setOpen={setStateOpen}
  setValue={setState}
  setItems={setStates}
  listMode="SCROLLVIEW" // 👈 Important!
  style={styles.dropdownPicker}
/>


      <Text style={styles.label}>Asking Rent</Text>
      <TextInput
        style={styles.input}
        value={`₹${askingRent}`}
        keyboardType="numeric"
        onChangeText={(text) => setAskingRent(text.replace(/[^0-9]/g, ''))}
      />

      <Text style={styles.label}>Select Location</Text>
   
      <View style={styles.mapPlaceholder}>
      <Image source={require('../assents/21.png')}/>
      </View>

      <TextInput
        style={styles.input}
        placeholder="H. No. 245, Near Vishkrama Mandir"
        value={streetAddress}
        onChangeText={setStreetAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Village"
        value={village}
        onChangeText={setVillage}
      />

      <Text style={styles.label}>State</Text>
      <DropDownPicker
        open={stateOpen}
        value={state}
        items={states}
        setOpen={setStateOpen}
        setValue={setState}
        setItems={setStates}
        style={{ marginBottom: 16 }}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <Text style={styles.label}>Select Rooms</Text>
      <View style={styles.optionRow}>
        {roomOptions.map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.optionBtn, rooms === opt && styles.activeOption]}
            onPress={() => setRooms(opt)}
          >
            <Text style={rooms === opt ? styles.activeText : styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>Furnished</Text>
        <Switch value={furnished} onValueChange={setFurnished} />
      </View>

      <Text style={styles.label}>Holdings</Text>
      <TextInput style={styles.input} value="AC, Fridge, Beds" />

      <View style={styles.tagRow}>
        <Text style={styles.tag}>AC ✕</Text>
        <Text style={styles.tag}>Beds ✕</Text>
        <Text style={styles.tag}>LED TV ✕</Text>
      </View>

      <Text style={styles.label}>Bathrooms</Text>
      <View style={styles.optionRow}>
        {bathroomOptions.map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.optionBtn, bathrooms === opt && styles.activeOption]}
            onPress={() => setBathrooms(opt)}
          >
            <Text style={bathrooms === opt ? styles.activeText : styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Area</Text>
      <TextInput style={styles.input} value={`${area} SQM`} onChangeText={setArea} />

      <Text style={styles.label}>Select Floor</Text>
      <DropDownPicker
        open={floorOpen}
        value={floor}
        items={floors}
        setOpen={setFloorOpen}
        setValue={setFloor}
        setItems={setFloors}
        style={{ marginBottom: 16 }}
      />

      {[['Separate Entry', separateEntry, setSeparateEntry],
        ['Kitchen', kitchen, setKitchen],
        ['Pet Allowed', petAllowed, setPetAllowed],
        ['Parking', parking, setParking]].map(([label, value, setter]) => (
          <View key={label} style={styles.switchRow}>
            <Text style={styles.label}>{label}</Text>
            <Switch value={value} onValueChange={setter} />
          </View>
        ))}

      <Text style={styles.label}>Add Photos</Text>
      <View style={styles.photoRow}>
        <TouchableOpacity style={styles.photoBtn} onPress={openCamera}>
          <Ionicons name="camera" size={20} color="#4A4AFF" />
          <Text style={styles.photoText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoBtn} onPress={openGallery}>
          <Ionicons name="images" size={20} color="#4A4AFF" />
          <Text style={styles.photoText}>Gallery</Text>
        </TouchableOpacity>
      </View>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ height: 120, width: '100%', borderRadius: 10 }} />
      )}

      <Text style={styles.label}>Notes for Tenant</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Preference will be given to family..."
        value={note}
        onChangeText={setNote}
        multiline
      />

      <Text style={styles.label}>Contact via</Text>
      <View style={styles.switchRow}>
        <Text style={styles.label}>Mobile Number</Text>
        <Switch value={!contactViaChat} onValueChange={() => setContactViaChat(!contactViaChat)} />
        <Text style={styles.label}>Chat</Text>
        <Switch value={contactViaChat} onValueChange={setContactViaChat} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#DDD' }]}>
          <Text style={[styles.buttonText, { color: '#555' }]}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4A4AFF' }]}>
          <Text style={styles.buttonText}>Publish Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  title: { fontSize: 18, fontWeight: '600' },
  link: { color: '#4A4AFF', fontWeight: '500' },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  mapPlaceholder: {
    // backgroundColor: '#e3e3e3',
    height: 160,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  optionRow: { flexDirection: 'row', marginBottom: 16, flexWrap: 'wrap' },
  optionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  activeOption: { backgroundColor: '#4A4AFF' },
  optionText: { color: '#333' },
  activeText: { color: '#fff' },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    fontSize: 12,
    marginRight: 6,
  },
  photoRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  photoBtn: {
    alignItems: 'center',
    padding: 10,
  },
  photoText: { color: '#4A4AFF', marginTop: 4 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
