
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  {
    id: '1',
    title: 'New Message',
    message: 'You have received a message from John.',
    time: '2h ago',
    icon: 'chatbubble-ellipses-outline',
  },
  {
    id: '2',
    title: 'Booking Confirmed',
    message: 'Your property booking has been confirmed.',
    time: '1d ago',
    icon: 'checkmark-circle-outline',
  },
  {
    id: '3',
    title: 'Profile Update',
    message: 'Your profile information was updated successfully.',
    time: '3d ago',
    icon: 'person-circle-outline',
  },
  {
    id: '4',
    title: 'KYC Approved',
    message: 'Your KYC verification is complete.',
    time: '4d ago',
    icon: 'shield-checkmark-outline',
  },
  {
    id: '5',
    title: 'Payment Received',
    message: 'Your payment of ₹5,000 has been successfully processed.',
    time: '5d ago',
    icon: 'card-outline',
  },
  {
    id: '6',
    title: 'New Property Alert',
    message: 'A new property matching your search was listed.',
    time: '6d ago',
    icon: 'home-outline',
  },
  {
    id: '7',
    title: 'Account Security',
    message: 'Your password was changed recently.',
    time: '1w ago',
    icon: 'lock-closed-outline',
  },
  {
    id: '8',
    title: 'Reminder',
    message: 'Your rent is due tomorrow.',
    time: '1w ago',
    icon: 'calendar-outline',
  },
  {
    id: '9',
    title: 'App Update',
    message: 'A new version of the app is available. Update now!',
    time: '2w ago',
    icon: 'download-outline',
  },
  {
    id: '10',
    title: 'Referral Bonus',
    message: 'You earned ₹500 for referring a friend!',
    time: '2w ago',
    icon: 'gift-outline',
  },
  {
    id: '11',
    title: 'Support Ticket',
    message: 'Your support ticket #12345 has been resolved.',
    time: '3w ago',
    icon: 'help-circle-outline',
  },
];

const NotificationItem = ({ item }) => (
  <TouchableOpacity style={styles.notificationCard}>
    <Icon name={item.icon} size={28} color="#6C63FF" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </TouchableOpacity>
);

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 40,
    paddingHorizontal: 16,
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
    fontSize: 22,
    fontWeight: '700',
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
    marginTop: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 2,
  },
  message: {
    color: '#555',
    fontSize: 14,
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
