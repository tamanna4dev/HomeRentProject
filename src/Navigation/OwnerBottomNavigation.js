import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screen components
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import MoreScreen from '../screen/MoreScreen';
import MyListings from '../screen/MyListings';
import WalletScreen from '../screen/WalletScreen';

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const OwnerBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
              case 'MyListings':
                iconName = focused ? 'list' : 'list-outline'; 
                break;
            case 'ChatScreen':
              iconName = 'chatbubble-ellipses-outline';
              break;
            case 'WalletScreen':
              iconName = focused ? 'wallet' : 'wallet-outline';
              break;
            case 'MoreScreen':
              iconName = 'ellipsis-horizontal';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={23} color={focused ? '#00008B' : '#888'} />;
        },
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: '#00008B',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyListings" component={MyListings} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="WalletScreen" component={WalletScreen} />
      <Tab.Screen name="MoreScreen" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default OwnerBottomNavigation;
//   {/* <View style={styles.bottomNav}>
//         <Ionicons name="home-outline" size={24} color="#aaa" />
//         <Ionicons name="list" size={24} color="#aaa" />
//         <Ionicons name="chatbubble-ellipses-outline" size={24} color="#aaa" />
//         <View style={styles.activeIcon}>
//           <Ionicons name="wallet" size={24} color="#4A4AFF" />
//         </View>
//         <Ionicons name="ellipsis-horizontal" size={24} color="#aaa" />
//     //   </View>