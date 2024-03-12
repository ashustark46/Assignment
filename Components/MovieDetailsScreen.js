import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  const handleOpenImdb = () => {
    Linking.openURL(movie.imdb_url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.movie}</Text>
      <Text style={styles.rating}>Rating: {movie.rating}</Text>
      <TouchableOpacity style={styles.imdbButton} onPress={handleOpenImdb}>
        <Text style={styles.imdbButtonText}>View on IMDb</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  imdbButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  imdbButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MovieDetailsScreen;
