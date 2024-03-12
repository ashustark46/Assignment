import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const UserDetailsScreen = () => {
  const route = useRoute();
  const { user } = route.params;

  const handlePhonePress = () => {
    if (user.phone) {
      Linking.openURL(`tel:${user.phone}`);
    }
  };

  const handleEmailPress = () => {
    if (user.email) {
      Linking.openURL(`mailto:${user.email}`);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image || 'https://via.placeholder.com/' }} style={styles.image} />
      <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.detailText}>Email: {user.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePhonePress}>
        <Text style={styles.detailText}>Phone: {user.phone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'yellow'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle : 'italic',
    marginBottom: 10,
    color: 'black'
  },
  detailText: {
    fontSize: 20,
    paddingTop:5,
    marginBottom: 5,
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default UserDetailsScreen;