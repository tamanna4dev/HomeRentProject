import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginOwner from '../LoginOwner';
import bottom from '../../Navigation/OwnerBottomNavigation'
import AddListingScreen from '../AddListingScreen';
import AllListingsScreen from '../AllListingsScreen';
import ProfileScreen from '../ProfileScreen';
import ListingsScreen from '../ListingsScreen';
import KycScreen from '../KycScreen';
import SupportScreen from '../SupportScreen';
import ShareAppScreen from '../ShareAppScreen';
import RateUsScreen from '../RateUsScreen';
import TermsConditionsScreen from '../TermsConditionsScreen';
import PrivacyPolicyScreen from '../PrivacyPolicyScreen';
import RefundPolicyScreen from '../RefundPolicyScreen';
import LocationSelectScreen from '../LocationSelect';
import NotificationScreen from '../NotificationsScreen';
import FilterScreen from '../FilterScreen';
import PropertyDetailScreen from '../PropertyDetail';
import NearbyPropertiesScreen from '../NearbyPropertiesScreen';
import MainApp from '../../Navigation/TenantBottomNavigation'
import AllPhotosScreen from '../AllPhotosScreen';
import ProfileDetailsScreen from '../ProfileDetailsScreen';
import HomeScreen from '../HomeScreen';


const Stack = createNativeStackNavigator();

export default function StackOwner() {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginOwner" component={LoginOwner} />
      <Stack.Screen name="bottom" component={bottom} />
      <Stack.Screen name="AddListingScreen" component={AddListingScreen} />
      <Stack.Screen name="AllListingsScreen" component={AllListingsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
      <Stack.Screen name="KycScreen" component={KycScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="ShareAppScreen" component={ShareAppScreen} />
      <Stack.Screen name="RateUsScreen" component={RateUsScreen} />
      <Stack.Screen name="TermsConditionsScreen" component={TermsConditionsScreen} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      <Stack.Screen name="RefundPolicyScreen" component={RefundPolicyScreen} />
      <Stack.Screen name="LocationSelect" component={LocationSelectScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="PropertyDetailScreen" component={PropertyDetailScreen} /> 
      <Stack.Screen name="MainApp" component={MainApp} />
     <Stack.Screen name="NearbyPropertiesScreen" component={NearbyPropertiesScreen} />

 
     <Stack.Screen name="AllPhotos" component={AllPhotosScreen} />
<Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} />
<Stack.Screen name="HomeScreen" component={HomeScreen} />

    
    </Stack.Navigator>
  );
}
