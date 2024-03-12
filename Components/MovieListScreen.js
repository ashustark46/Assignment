import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieListScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch('https://dummyapi.online/api/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then(data => setMovies(data || []))
      .catch(error => console.error(error));
  };

  const handleShowMore = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('../Pictures/yuriy-kovalev-nN1HSDtKdlw-unsplash.jpg')} style={styles.background}>
    <View style={styles.container}>
      <ScrollView>
        {movies.map((movie, index) => (
          <TouchableOpacity
            key={index}
            style={styles.movieContainer}
            onPress={() => handleShowMore(movie)}
          >
            <Image style={styles.movieImage} source={{ uri: movie.image }} />
            <Text style={styles.movieTitle}>{movie.movie}</Text>
            <Text style={styles.movieRating}>Rating: {movie.rating}</Text>
            <TouchableOpacity style={styles.showMoreButton} onPress={() => handleShowMore(movie)}>
              <Text style={styles.showMoreText}>Show More</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
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
   
    padding: 20,
    paddingTop: 70,
  },
  movieContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius : 20,
    padding: 10,
  },
  movieImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieRating: {
    fontSize: 16,
    color: 'black',
  },
  showMoreButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  showMoreText: {
    color: 'white',
    fontSize: 16,
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#007bff',
  },
  goBackButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default MovieListScreen;