import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';



const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require("../Pictures/colourful-shopping-packets.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome aboard to our app</Text>
        <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
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
    paddingVertical: 100,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
});

export default WelcomeScreen;
