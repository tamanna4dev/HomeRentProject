import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
} from 'react-native';

import slides from '../JsonData/SliderData';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      navigation.navigate('Login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };


  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const renderItem = useCallback(({ item }) => (
    <View style={styles.slideContainer}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip} accessible={true} accessibilityLabel="Skip Onboarding">
        
        <Text style={styles.skipText}>Skip</Text>
        <Image
          source={require('../assents/next.png')}
          style={styles.skipIcon}
        />
      </TouchableOpacity>



      <View style={styles.slide}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    slide: {
      width,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    slideContainer: {
      width,
      // alignItems: 'center',
      // justifyContent: 'center',
      marginTop:40
    },
    image: {
      width: width * 0.85,
      height: height * 0.45,
      resizeMode: 'contain',
      marginBottom: 10,
    },
    textContainer: {
      marginTop: -10,
      paddingHorizontal: 15,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#1D1D1D',
      textAlign: 'center',
      marginBottom: 6,
    },
    description: {
      fontSize: 14,
      color: '#808080',
      textAlign: 'center',
      lineHeight: 20,
    },
    skipText: {
      color: '#636AE8',
      fontSize: 14,
      fontWeight: '500',
    },
    footer: {
      position: 'absolute',
      bottom: 50,
      width,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    pagination: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 30,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#ddd',
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: '#ccc',
      width: 7,
      height: 7,
      borderRadius:10
    },
    nextButton: {
      width: 140,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#636AE8',
      marginTop: 20,
    },
    skipButton: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      // marginTop: 40,
      marginRight: 30,
      alignItems: 'center',
      gap: 6,
    },
      skipIcon: {
    width: 14,
    height: 14,
    tintColor: '#636AE8FF',
    marginTop: 2,
  },
  continueButton: {
    backgroundColor: '#636AE8FF',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 20,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });
  

export default OnboardingScreen;
 
