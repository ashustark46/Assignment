import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async(value) => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email Format");
      return;
    }
    if (username.length <= 3) {
      Alert.alert("Username Should Be Valid");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert("Invalid Password");
      return;
    }
    try {
      await AsyncStorage.setItem('username', username);
      navigation.navigate('Home', { username });
    } catch (error) {
      console.log('Error saving username: ', error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <ImageBackground source={require("../Pictures/paper-shopping-bags-dark-background-top-view.jpg")} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Login</Text>
          <View style={styles.underline}></View>
        </View>
        <View style={styles.inputs}>
          <View style={styles.input}>
            <TextInput style={styles.inputText} placeholder="Username" value={username} onChangeText={setUsername} />
          </View>
          <View style={styles.input}>
            <TextInput style={styles.inputText} placeholder="Email" value={email} onChangeText={setEmail} />
          </View>
          <View style={styles.input}>
            <TextInput style={styles.inputText} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          </View>
          {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        </View>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#2A00B7',
    paddingVertical: 100,
  },
  header: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '700',
  },
  underline: {
    width: 61,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 9,
    marginTop: 10,
  },
  inputs: {
    marginTop: 55,
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 50,
    backgroundColor: '#d0cdcd',
    borderRadius: 6,
    marginBottom: 15,
  },
  inputText: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    color: '#100f0f',
    fontSize: 19,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
