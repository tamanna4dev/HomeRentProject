import React, { useState } from 'react';
import {Button, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export default function LoginScreen({navigation, setRole }) {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
   
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        <Text style={styles.title}>Login As</Text>
        <Text style={styles.subtitle}>We'll start with these listings.{"\n"}You can change this later.</Text>
    
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === 'owner' && styles.selectedOwner
          ]}
          onPress={() => setRole('Owner')}
        >
          <Ionicons name="person-add" size={20} color='#00008B' />
          <Text style={styles.ownerText}>Login as Owner</Text>
        </TouchableOpacity>
    
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === 'tenant' && styles.selectedTenant
          ]}
          onPress={() => setRole('Tenant')} 
        >
          <MaterialCommunityIcons name="account" size={20} color='green' />
          <Text style={styles.tenantText}>Login as Tenant</Text>
        </TouchableOpacity>

{/* <Button title="Login as Tenant" onPress={() => setRole('Tenant')} />
<Button title="Login as Owner" onPress={() => setRole('Owner')} />     */}
        {/* Show Next button only if a role is selected */}
        {selectedRole && (
          <TouchableOpacity onPress={() => navigation.navigate('LoginTenant')} style={styles.nextButton}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent:'center',
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00008B',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  roleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
  },
  selectedOwner: {
    borderColor: '#00008B',
    backgroundColor: '#f0f4ff',
  },
  selectedTenant: {
    borderColor: 'green',
    backgroundColor: '#f0fff0',
  },
  ownerText: {
    marginLeft: 10,
    color: '#00008B',
    fontWeight: '600',
  },
  tenantText: {
    marginLeft: 10,
    color: 'green',
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#00008B',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  nextText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});