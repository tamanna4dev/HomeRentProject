import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTenant from '../LoginTenant';
import HomeScreen from '../HomeScreen';
import LocationSelect from '../LocationSelect'
import PropertyDetail from '../PropertyDetail'
import FilterScreen from '../FilterScreen'
import FavoritesScreen from '../FavoritesScreen'
import FavoritesDetail from '../FavoritesDetail'
import NotificationsScreen from '../NotificationsScreen'
import ProfileScreen from '../ProfileScreen'
import ChatScreen from '../ChatScreen'
import NearbyPropertiesScreen from '../NearbyPropertiesScreen';
import CallScreen from '../CallScreen';
import WhatsAppScreen from '../WhatsAppScreen';
import AllPhotosScreen from '../AllPhotosScreen';
import ListingsScreen from '../ListingsScreen';
import KycScreen from '../KycScreen';
import SupportScreen from '../SupportScreen';
import ShareAppScreen from '../ShareAppScreen';
import RateUsScreen from '../RateUsScreen';
import TermsConditionsScreen from '../TermsConditionsScreen';
import PrivacyPolicyScreen from '../PrivacyPolicyScreen';
import RefundPolicyScreen from '../RefundPolicyScreen';

import ProfileDetailsScreen from '../ProfileDetailsScreen'
import MainApp from '../../Navigation/TenantBottomNavigation'
import NotificationScreen from '../NotificationsScreen';
import PropertyDetailScreen from '../PropertyDetail';

const Stack = createNativeStackNavigator();

export default function StackTenant() {
  return (
    <Stack.Navigator 
    screenOptions={{ headerShown: false }}
    >

      <Stack.Screen name="LoginTenant" component={LoginTenant} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LocationSelect" component={LocationSelect} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetail} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />

      {/* <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} /> */}
      <Stack.Screen name="FavoritesDetail" component={FavoritesDetail} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="CallScreen" component={CallScreen} />
      <Stack.Screen name="WhatsAppScreen" component={WhatsAppScreen} /> 
       <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
      <Stack.Screen name="KycScreen" component={KycScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="ShareAppScreen" component={ShareAppScreen} />
      <Stack.Screen name="RateUsScreen" component={RateUsScreen} />
      <Stack.Screen name="TermsConditionsScreen" component={TermsConditionsScreen} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      <Stack.Screen name="RefundPolicyScreen" component={RefundPolicyScreen} />
 
<Stack.Screen name="AllPhotos" component={AllPhotosScreen} />
<Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} />
<Stack.Screen name="MainApp" component={MainApp} />
<Stack.Screen name="NotificationScreen" component={NotificationScreen} />
<Stack.Screen name="NearbyPropertiesScreen" component={NearbyPropertiesScreen} />
      <Stack.Screen name="PropertyDetailScreen" component={PropertyDetailScreen} />

    </Stack.Navigator>
  );
}
