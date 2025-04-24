// import React from 'react';
// // Import stack navigator from React Navigation
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // Import screens used in the stack
// import OnboardingScreen from '../screen/OnboardingScreen';
// import LoginScreen from '../screen/LoginScreen';
// import LoginTenant from '../screen/LoginTenant';
// import HomeScreen from '../screen/HomeScreen';
// import BottomNavigation from '../Navigation/BottomNavigation'
// import LocationSelect from '../screen/LocationSelect'
// import PropertyDetail from '../screen/PropertyDetail'
// import FilterScreen from '../screen/FilterScreen'
// import FavoritesScreen from '../screen/FavoritesScreen'
// import FavoritesDetail from '../screen/FavoritesDetail'
// import NotificationsScreen from '../screen/NotificationsScreen'
// import ProfileScreen from '../screen/ProfileScreen'
// import ChatScreen from '../screen/ChatScreen'
// import NearbyPropertiesScreen from '../screen/NearbyPropertiesScreen';
// import CallScreen from '../screen/CallScreen';
// import WhatsAppScreen from '../screen/WhatsAppScreen';
// import AllPhotosScreen from '../screen/AllPhotosScreen';
// import ListingsScreen from '../screen/ListingsScreen';
// import KycScreen from '../screen/KycScreen';
// import SupportScreen from '../screen/SupportScreen';
// import ShareAppScreen from '../screen/ShareAppScreen';
// import RateUsScreen from '../screen/RateUsScreen';
// import TermsConditionsScreen from '../screen/TermsConditionsScreen';
// import PrivacyPolicyScreen from '../screen/PrivacyPolicyScreen';
// import RefundPolicyScreen from '../screen/RefundPolicyScreen';

// import ProfileDetailsScreen from '../screen/ProfileDetailsScreen'





 
// const Stack = createNativeStackNavigator();

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
//       <Stack.Screen name="LoginScreen" component={LoginScreen} />
//       <Stack.Screen name="LoginTenant" component={LoginTenant} />
//       <Stack.Screen name="HomeScreen" component={HomeScreen} />
//       <Stack.Screen name="MainApp" component={BottomNavigation} />
//       <Stack.Screen name="LocationSelect" component={LocationSelect} />
//       <Stack.Screen name="PropertyDetail" component={PropertyDetail} />
//       <Stack.Screen name="FilterScreen" component={FilterScreen} />
//       <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
//       <Stack.Screen name="FavoritesDetail" component={FavoritesDetail} />
//       <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
//       <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//       <Stack.Screen name="ChatScreen" component={ChatScreen} />
//       <Stack.Screen name="CallScreen" component={CallScreen} />
//       <Stack.Screen name="WhatsAppScreen" component={WhatsAppScreen} /> 
//        <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
//       <Stack.Screen name="KycScreen" component={KycScreen} />
//       <Stack.Screen name="SupportScreen" component={SupportScreen} />
//       <Stack.Screen name="ShareAppScreen" component={ShareAppScreen} />
//       <Stack.Screen name="RateUsScreen" component={RateUsScreen} />
//       <Stack.Screen name="TermsConditionsScreen" component={TermsConditionsScreen} />
//       <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
//       <Stack.Screen name="RefundPolicyScreen" component={RefundPolicyScreen} />
 
// <Stack.Screen
//   name="NearbyPropertiesScreen"
//   component={NearbyPropertiesScreen}
//   options={{ title: 'Nearby Properties' }}
// />
// <Stack.Screen name="AllPhotos" component={AllPhotosScreen} />
// <Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} />

//     </Stack.Navigator>
//   );
// };

// export default StackNavigator;
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/LoginScreen';
import StackTenant from '../screen/Tenant/StackTenant';
import StackOwner from '../screen/Owner/StackOwner';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [role, setRole] = useState(null); // 'Tenant' or 'Owner'

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!role ? (
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} setRole={setRole} />}
        </Stack.Screen>
      ) : role === 'Tenant' ? (
        <Stack.Screen name="Tenant" component={StackTenant} />
      ) : (
        <Stack.Screen name="Owner" component={StackOwner} />
      )}
    </Stack.Navigator>
  );
}
