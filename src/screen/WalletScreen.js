// screens/WalletScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wallet</Text>

      {/* Balance Box */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>₹ 100</Text>
      </View>

      {/* Add Balance Button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Add Balance</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Options */}
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Claim a gift card</Text>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Purchase history</Text>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Your Orders</Text>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </TouchableOpacity>

      {/* Bottom Navigation  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 20, fontWeight: '600', textAlign: 'center', marginBottom: 20 },

  balanceBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#1BAA8F',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  balanceLabel: {
    backgroundColor: '#1BAA8F',
    color: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 11,
    fontWeight: '600',
    fontSize: 16,
  },
  balanceAmount: {
    paddingHorizontal: 80,
    paddingVertical: 11,
    fontSize: 16,
    fontWeight: '600',
    color: '#1BAA8F',
  },

  addButton: {
    flexDirection: 'row',
    backgroundColor: '#001F92',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeIcon: {
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    padding: 6,
  },
});


