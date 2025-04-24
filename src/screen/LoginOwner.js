import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const LoginOwner = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const otpRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }

    if (!text && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = () => {
    setIsOtpSent(true);
    setTimer(60);

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsOtpSent(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <ScrollView style={{  flex: 1,
      paddingTop: 60,
      paddingHorizontal: 20,
      backgroundColor: '#fff',}}>
      <View style={styles.container}>
      <Image source={require('../assents/1.png')} style={styles.icon} />

      <Text style={styles.title}>RENT Owner</Text>
      <Text style={styles.subtitle}>Welcome! Let's dive in intro account.</Text>

      <Text style={styles.loginAs}>Login As Owner</Text>

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your mobile number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      <TouchableOpacity
        style={[styles.sendOtpBtn, isOtpSent && { backgroundColor: '#999' }]}
        onPress={handleSendOtp}
        disabled={isOtpSent}
      >
        <Text style={styles.sendOtpText}>
          {isOtpSent ? `Wait ${timer} Seconds` : 'Send OTP'}
        </Text>
      </TouchableOpacity>

      {isOtpSent && (
        <>
          <View style={styles.otpContainer}>
            <Text style={styles.OTPlabel}>OTP</Text>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (otpRefs.current[index] = ref)}
                style={styles.otpBox}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={text => handleOtpChange(text, index)}
              />
            ))}
          </View>

          <Text style={styles.terms}>By submitting I accept all</Text>
          <Text style={styles.terms}>
            <Text style={styles.link}>Terms of Use</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('bottom')} style={styles.submitBtn}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 15,
    fontSize: 12,
  },
  loginAs: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00008B',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  OTPlabel: {
    fontWeight: '600',
    marginRight: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    marginBottom: 20,
  },
  sendOtpBtn: {
    backgroundColor: '#00008B',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sendOtpText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 35,
    height: 35,
    fontSize: 10,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  terms: {
    textAlign: 'center',
    fontSize: 11,
    color: '#666',
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 11,
    color: '#666',
  },
  submitBtn: {
    backgroundColor: '#00008B',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default LoginOwner;
 