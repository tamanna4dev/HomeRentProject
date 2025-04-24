import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Linking } from 'react-native'; // For opening call and WhatsApp
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Ionicons,
} from '@expo/vector-icons';

export default function PropertyDetailScreen({ navigation }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCall = () => {
    Linking.openURL('tel:+1234567890'); // Replace with the desired phone number
  };

  const handleWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=+1234567890'); // Replace with the desired WhatsApp number
  };
  
   
  

  const onChangeDate = (event, date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) setSelectedDate(date);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assents/8.png')} style={styles.mainImages} />

      <View style={styles.topIcons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={30} color="white" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={30} color="white" />
      </View>

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>House</Text>
          <Text style={styles.rating}>⭐ 4.5 (1,240 reviews)</Text>
        </View>

        <Text style={styles.price}>₹ 10,500 <Text style={styles.perMonth}>Per Month</Text></Text>
        <Text style={styles.address}>14, Jagjiwan Pura, Near Vishkrama Mandir</Text>
        <Text style={styles.addressLight}>Fatehabad, Haryana 125050</Text>

        <View style={styles.specsRow}>
          <MaterialCommunityIcons name="bed-outline" size={18} color="#E8618CFF" />
          <Text style={styles.specText}>2 Rooms</Text>

          <MaterialCommunityIcons name="shower" size={18} color="#636AE8FF" />
          <Text style={styles.specText}>1 Bathroom</Text>

          <MaterialCommunityIcons name="silverware-fork-knife" size={18} color="#7F55E0FF" />
          <Text style={styles.specText}>1 Kitchen</Text>

          <MaterialCommunityIcons name="sofa" size={18} color="#EFB034FF" />
          <Text style={styles.specText}>0 Lobby</Text>

          <MaterialCommunityIcons name="shower" size={18} color="#E8618CFF" />
          <Text style={styles.specText}>Furnished: YES</Text>
        </View>

        <Text style={styles.sectionTitle}>Home Highlights</Text>
        <View style={styles.card}>
       {/* Row 1 */}
       <View style={styles.row}>
         <View style={styles.iconText}>
           <FontAwesome5 name="parking" size={18} color="#333" />
           <Text style={styles.label}>Parking</Text>
         </View>
         <Text style={styles.value}>YES - 2 Wheeler</Text>
       </View>

       {/* Row 2 */}
       <View style={styles.row}>
         <View style={styles.iconText}>
           <MaterialCommunityIcons name="tree-outline" size={18} color="#333" />
           <Text style={styles.label}>Outdoor</Text>
         </View>
         <Text style={styles.value}>No info</Text>
       </View>

       {/* Row 3 */}
       <View style={styles.row}>
         <View style={styles.iconText}>
           <MaterialCommunityIcons name="dog" size={18} color="#333" />
           <Text style={styles.label}>Pet Allowed</Text>
         </View>
         <Text style={styles.value}>YES/NO</Text>
       </View>

       {/* Row 4 */}
       <View style={styles.row}>
         <View style={styles.iconText}>
           <Entypo name="location-pin" size={18} color="#333" />
           <Text style={styles.label}>Position</Text>
         </View>
         <Text style={styles.value}>Ground / First</Text>
       </View>

       {/* Row 5 */}
       <View style={styles.row}>
         <View style={styles.iconText}>
           <Ionicons name="log-in-outline" size={18} color="#333" />
           <Text style={styles.label}>Separate Entry</Text>
         </View>
         <Text style={styles.value}>YES</Text>
       </View>

       {/* Row 6 */}
       <View style={styles.row}>
         <View style={styles.iconText}>
           <MaterialCommunityIcons name="sofa-outline" size={18} color="#333" />
           <Text style={styles.label}>Holdings</Text>
         </View>
         <Text style={styles.value}>
           AC, Washing Machine, Geyser, Beds, Almirah, LED TV, Cooler
         </Text>
      </View>
     </View>


        <Text style={styles.sectionTitle}>Listing Person</Text>
        <View style={styles.personRow}>
          <Image source={require('../assents/9.png')} style={styles.personImage} />
          <View>
            <Text style={styles.personName}>Deepak Kumar</Text>
            <Text style={styles.personRole}>Owner</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Location on Maps</Text>
        <Image source={require('../assents/20.png')} style={{width:"100%",marginTop:15}} />


        <TouchableOpacity style={styles.listedBox} onPress={() => setShowDatePicker(true)}>
          <Ionicons name="calendar-outline" size={16} color="#333" />
          <Text style={{ marginLeft: 6 }}>
            Listed on {selectedDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <Image source={require('../assents/10.png')} style={styles.mainImagess} />
        <TouchableOpacity style={styles.photoBtn} onPress={() => navigation.navigate('AllPhotos')}>
  <Text style={{ color: '#4f3cc9', fontWeight: '600' }}>VIEW ALL PHOTOS</Text>
</TouchableOpacity>


        <Text style={styles.sectionTitle}>Notes from Owner:</Text>
        <TextInput
          value="Preference will be given to family. Gate closing at 10 PM."
          multiline
          editable={false}
          style={styles.noteBox}
        />
<View style={styles.contactRow}>
 
  
  <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#e4ddff' }]} onPress={handleCall}>
    <Ionicons name="call" size={18} color="#4f3cc9" style={styles.icon} />
    <Text style={[styles.contactButtonText, { color: '#4f3cc9' }]}>Call</Text>
  </TouchableOpacity>
 

  <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#e4ddff' }]} onPress={handleWhatsApp}>
    <FontAwesome5 name="whatsapp" size={18} color="#4f3cc9" style={styles.icon} />
    <Text style={[styles.contactButtonText, { color: '#4f3cc9' }]}>WhatsApp</Text>
  </TouchableOpacity>


  <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#e4ddff' }]} onPress={() => navigation.navigate('ChatScreen')}>
    <Ionicons name="chatbubbles" size={18} color="#4f3cc9" style={styles.icon} />
    <Text style={[styles.contactButtonText, { color: '#4f3cc9' }]}>Chat</Text>
  </TouchableOpacity>
</View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  mainImages: { width: '115%', height: 240, marginLeft: -36, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  mainImagess: { width: '100%', height: 220, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  topIcons: { position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: '100%', top: 40, paddingHorizontal: 20 },
  details: { padding: 16 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '600' },
  rating: { fontSize: 14, color: '#888' },
  price: { fontSize: 15, fontWeight: 'bold', marginTop: 4 },
  perMonth: { fontSize: 11, fontWeight: '400', color: '#9095A0FF' },
  address: { color: '#444', marginTop: 4, fontSize: 11 },
  addressLight: { color: '#9095A0FF', fontSize: 12 },
  specsRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 10, gap: 6 },
  specText: { marginRight: 8, fontSize: 12, color: '#323842FF' },
  sectionTitle: { marginTop: 18, fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: '#f9f9f9', borderRadius: 12, padding: 16, marginVertical: 10, elevation: 3 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6, alignItems: 'flex-start' },
  iconText: { flexDirection: 'row', alignItems: 'center', width: '40%' },
  label: { fontSize: 14, marginLeft: 8, color: '#333', fontWeight: '500' },
  value: { fontSize: 14, color: '#555', flex: 1, textAlign: 'right' },
  personRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  personImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  personName: { fontWeight: '600' },
  personRole: { color: '#666' },
  contactButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  callButton: { backgroundColor: '#28a745', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 30, alignItems: 'center' },
  whatsappButton: { backgroundColor: '#25d366', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 30, alignItems: 'center' },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
  
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a745', // Default for Call, override for others
    paddingVertical: 12,
    borderRadius: 8,
  },
  
  contactButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  
  icon: {
    marginRight: 4,
  },  
  contactBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#4f3cc9', padding: 10, borderRadius: 8, gap: 6 },
  contactText: { color: 'white', fontWeight: '500' },
  listedBox: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  photoBtn: { backgroundColor: '#e6e0ff', padding: 12, borderRadius: 8, alignItems: 'center', marginVertical: 12 },
  noteBox: { backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8, marginTop: 8 },
});
