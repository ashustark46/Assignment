import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params;

  const navigateToListScreen = (category) => {
    if (category === 'Users') {
      navigation.navigate('UserList');
    } else if (category === 'Products') {
      navigation.navigate('ProductList');
    } else if (category === 'Movies') {
      navigation.navigate('MovieList');
    } else if (category === 'Quotes') {
      navigation.navigate('Quotes');
    } else {
      navigation.navigate('UserList');
    }
  };

  return (
    <ImageBackground source={require("../Pictures/shopping-trolleys-packets-tags.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.greeting}>Welcome, {username}!</Text>
        <View style={styles.categoriesContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigateToListScreen('Users')} style={styles.categoryBox}>
              <Text style={styles.categoryText}>Users</Text>
            </TouchableOpacity>
            <View style={styles.horizontalGap} />
            <TouchableOpacity onPress={() => navigateToListScreen('Products')} style={styles.categoryBox}>
              <Text style={styles.categoryText}>Products</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigateToListScreen('Movies')} style={styles.categoryBox}>
              <Text style={styles.categoryText}>Movies</Text>
            </TouchableOpacity>
            <View style={styles.horizontalGap} />
            <TouchableOpacity onPress={() => navigateToListScreen('Quotes')} style={styles.categoryBox}>
              <Text style={styles.categoryText}>Quotes</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  categoriesContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingRight: 30,
  },
  categoryBox: {
    backgroundColor: '#333',
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  horizontalGap: {
    width: 20,
  },
});

export default HomeScreen;
