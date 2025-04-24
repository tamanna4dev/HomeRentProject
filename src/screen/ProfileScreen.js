import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const [selectedId, setSelectedId] = React.useState('');
  const [image, setImage] = React.useState(null);
  const navigation = useNavigation();

  const [isEditingName, setIsEditingName] = React.useState(false);
  const [isEditingPhone, setIsEditingPhone] = React.useState(false);
  const [isEditingEmail, setIsEditingEmail] = React.useState(false);

  const [name, setName] = React.useState('Rahul Kumar');
  const [phone, setPhone] = React.useState('9876543210');
  const [email, setEmail] = React.useState('tenant@email.com');

  const pickFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>Profile</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.card}>
          <View style={styles.profileRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.phone}>{phone}</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark-circle" size={18} color="green" />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>
           
<TouchableOpacity
  style={styles.viewProfileBtn}
  onPress={() => navigation.navigate('ProfileDetailsScreen')}
>
  <Text style={styles.viewProfileText}>VIEW PROFILE</Text>
</TouchableOpacity>


          {/* Editable Fields */}
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            {isEditingName ? (
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                autoFocus
              />
            ) : (
              <Text style={styles.info}>{name}</Text>
            )}
            <Text
              style={styles.edit}
              onPress={() => setIsEditingName(!isEditingName)}
            >
              {isEditingName ? 'SAVE' : 'EDIT'}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Mobile No:</Text>
            {isEditingPhone ? (
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.info}>{phone}</Text>
            )}
            <Text
              style={styles.edit}
              onPress={() => setIsEditingPhone(!isEditingPhone)}
            >
              {isEditingPhone ? 'SAVE' : 'EDIT'}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            {isEditingEmail ? (
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            ) : (
              <Text style={styles.info}>{email}</Text>
            )}
            <Text
              style={styles.edit}
              onPress={() => setIsEditingEmail(!isEditingEmail)}
            >
              {isEditingEmail ? 'SAVE' : 'EDIT'}
            </Text>
          </View>
        </View>

        {/* KYC Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>KYC</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedId}
              onValueChange={(itemValue) => setSelectedId(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select ID" value="" />
              <Picker.Item label="Aadhar Card" value="aadhar" />
              <Picker.Item label="PAN Card" value="pan" />
              <Picker.Item label="Voter ID" value="voter" />
            </Picker>
          </View>

          <Text style={styles.uploadTitle}>Upload ID</Text>

          <View style={styles.uploadOptions}>
            <TouchableOpacity onPress={pickFromCamera} style={styles.uploadBox}>
              <Ionicons name="camera" size={28} color="#6C63FF" />
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickFromGallery} style={styles.uploadBox}>
              <Ionicons name="image" size={28} color="#6C63FF" />
              <Text>Gallery</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="cloud-upload-outline" size={20} color="#fff" />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>

          {image && <Image source={{ uri: image }} style={styles.previewImage} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
  },
  phone: {
    color: '#444',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    marginLeft: 4,
    color: 'green',
    fontSize: 12,
    fontWeight: '500',
  },
  viewProfileBtn: {
    alignSelf: 'flex-start',
    marginVertical: 6,
  },
  viewProfileText: {
    color: '#6C63FF',
    fontSize: 12,
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    fontWeight: '600',
    marginRight: 6,
  },
  info: {
    flex: 1,
    color: '#333',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 2,
    color: '#333',
  },
  edit: {
    color: '#6C63FF',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 10,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  picker: {
    height: 60,
    padding: 0,
  },
  uploadTitle: {
    fontWeight: '600',
    marginBottom: 10,
  },
  uploadOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  uploadBox: {
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  uploadText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6,
  },
  previewImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginTop: 10,
  },
});
