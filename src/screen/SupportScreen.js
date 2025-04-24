import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const supportOptions = [
  {
    id: '1',
    title: 'FAQs',
    icon: <Ionicons name="help-circle-outline" size={24} color="#4B5563" />,
    onPress: () => console.log('Navigate to FAQs'),
  },
  {
    id: '2',
    title: 'Contact Support',
    icon: <MaterialIcons name="support-agent" size={24} color="#4B5563" />,
    onPress: () => console.log('Navigate to Contact Support'),
  },
  {
    id: '3',
    title: 'Report a Bug',
    icon: <Ionicons name="bug-outline" size={24} color="#4B5563" />,
    onPress: () => console.log('Navigate to Report a Bug'),
  },
];

const SupportScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={item.onPress}>
      <View style={styles.icon}>{item.icon}</View>
      <Text style={styles.title}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Support</Text>
      <Text style={styles.subtitle}>How can we help you?</Text>
      <FlatList
        data={supportOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 20,
  },
  list: {
    marginTop: 10,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icon: {
    marginRight: 16,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
});

export default SupportScreen;

 

