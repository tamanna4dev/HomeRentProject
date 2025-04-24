// ChatScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Deepak Kumar</Text>
        <TouchableOpacity>
          <Ionicons name="call-outline" size={24} color="#6C63FF" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Receiver Message */}
        <View style={styles.messageRowLeft}>
          <Image source={require('../assents/17.jpg')} style={styles.avatar} />
          <View style={styles.bubbleLeft}>
            <Text style={styles.messageText}>Hi there! I'd love to help you with that. Do you have a specific location in mind?</Text>
            <Text style={styles.timeText}>2 mins ago</Text>
          </View>
        </View>

        {/* Sender Message */}
        <View style={styles.messageRowRight}>
          <View style={styles.bubbleRight}>
            <Text style={styles.messageText}>
              Yes, I’m interested in the downtown area. Ideally, I want a 3-bedroom house with a backyard.
            </Text>
            <Text style={styles.timeText}>Just now</Text>
          </View>
        </View>
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputBar}>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="#6C63FF" />
        </TouchableOpacity>
        <TextInput
          placeholder="Type a message"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TouchableOpacity>
          <Feather name="camera" size={22} color="#6C63FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="send" size={24} color="#6C63FF" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 18,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      elevation: 2,
    },
    headerTitle: {
      fontSize: 16,
      fontWeight: '600',
    },
    chatContainer: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    messageRowLeft: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 15,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      marginRight: 8,
    },
    bubbleLeft: {
      backgroundColor: '#E2D9FF',
      padding: 10,
      borderRadius: 12,
      maxWidth: '80%',
    },
    messageText: {
      fontSize: 14,
      color: '#333',
    },
    timeText: {
      fontSize: 10,
      color: '#999',
      marginTop: 4,
      textAlign: 'right',
    },
    messageRowRight: {
      alignItems: 'flex-end',
      marginBottom: 15,
    },
    bubbleRight: {
      backgroundColor: '#F1F1F1',
      padding: 10,
      borderRadius: 12,
      maxWidth: '80%',
    },
    inputBar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderTopColor: '#eee',
      borderTopWidth: 1,
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      marginHorizontal: 10,
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 8,
      backgroundColor: '#F4F4F4',
      fontSize: 14,
      color: '#333',
    },
  });
  