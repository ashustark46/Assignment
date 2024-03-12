
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error(error));
  }, []);

  const handleShowMore = (user) => {
    navigation.navigate("UserDetails", { user: user });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {users.map((user) => (
          <TouchableOpacity
            key={user.id}
            style={styles.userContainer}
            onPress={() => handleShowMore(user)}
          >
            <Image
              source={{ uri: user.image || 'https://via.placeholder.com/' }}
              style={styles.profilePic}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
              <Text style={styles.userDOB}>DOB: {user.birthDate}</Text>
            </View>
            <TouchableOpacity style={styles.showMoreButton} onPress={() => handleShowMore(user)}>
              <Text style={styles.showMoreText}>Show More</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 70,
  },
  scrollView: {
    width: '100%',
  },
  userContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius : 35,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
   
  },
  profilePic: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
   
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userDOB: {
    fontSize: 14,
    color: '#888',
  },
  showMoreButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    
  },
  showMoreText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#007bff',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default UserListScreen;
