import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screen components
import HomeScreen from '../screen/HomeScreen';
import ExploreScreen from '../screen/ExploreScreen';
import AllPropeties from '../screen/AllPropeties';
import FavoritesScreen from '../screen/FavoritesScreen'
 
import More from '../screen/More';

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const TenantBottomNavigation = () => {
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
              case 'Explore':
                iconName = focused ? 'location' : 'location-outline'; 
                break;
            case 'AllPropeties':
              iconName = 'business';
              break;
            case 'FavoritesScreen':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'More':
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
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="AllPropeties" component={AllPropeties} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default TenantBottomNavigation;
