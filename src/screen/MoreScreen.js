import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Share, Alert } from 'react-native';

const MenuItem = ({ icon, label, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <View style={styles.menuItemLeft}>
      {icon}
      <Text style={styles.menuItemText}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#A3A3A3" />
  </TouchableOpacity>
);

const SectionCard = ({ title, children }) => (
  <View style={styles.sectionCard}>
    {title && <Text style={styles.sectionTitle}>{title}</Text>}
    {children}
  </View>
);
const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this awesome app! Download it now on the App Store or Google Play!\nhttps://www.your-app-link.com',
      });

      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while trying to share.');
    }
  };

const MoreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Profile */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Deepak Kumar</Text>
            <Text style={styles.phone}>9876543210</Text>
          </View>
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={{ marginLeft: 'auto' }} />
        </View>
{/*             */}
        {/* Main Options */}
        <SectionCard>
          <MenuItem icon={<Ionicons name="list" size={20} color="#333" />} label="Listings" onPress={() => navigation.navigate('ListingsScreen')}/>
          <MenuItem icon={<Feather name="heart" size={20} color="#333" />} label="Favourites" onPress={() => navigation.navigate('FavoritesScreen')}/>
          <MenuItem icon={<Feather name="star" size={20} color="#333" />} label="KYC" onPress={() => navigation.navigate('KycScreen')}/>
        </SectionCard>

        {/* Help & Support */}
        <SectionCard title="Help & Support">
          <MenuItem icon={<Ionicons name="help-circle-outline" size={20} color="#333" />} label="Support" onPress={() => navigation.navigate('SupportScreen')} />
          <MenuItem icon={<Feather name="share-2" size={20} color="#333" />} label="Share App" onPress={handleShare} />
        
          <MenuItem icon={<Ionicons name="star-outline" size={20} color="#333" />} label="Rate Us" onPress={() => navigation.navigate('RateUsScreen')}/>
        </SectionCard>

        {/* Legal */}
        <SectionCard title="Legal">
          <MenuItem icon={<Ionicons name="document-text-outline" size={20} color="#333" />} label="Terms & conditions" onPress={() => navigation.navigate('TermsConditionsScreen')}/>
          <MenuItem icon={<Feather name="lock" size={20} color="#333" />} label="Privacy Policy" onPress={() => navigation.navigate('PrivacyPolicyScreen')}/>
          <MenuItem icon={<Ionicons name="refresh-circle-outline" size={20} color="#333" />} label="Refund Policy" onPress={() => navigation.navigate('RefundPolicyScreen')}/>
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  profileCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  avatar: {
    backgroundColor: '#6C63FF',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileName: {
    fontWeight: '600',
    fontSize: 16,
  },
  phone: {
    color: '#666',
    fontSize: 13,
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 16,
    marginBottom: 8,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  menuItemText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
  },
});
