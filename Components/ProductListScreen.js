
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleShowMore = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <ImageBackground source={require('../Pictures/5_asfasw112.jpg')} style={styles.background}>
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {products.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productRating}>Rating: {product.rating}</Text>
            <Text style={styles.productBrand}>Brand: {product.brand}</Text>
            <TouchableOpacity style={styles.showMoreButton} onPress={() => handleShowMore(product)}>
              <Text style={styles.showMoreText}>Show More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Go Back</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 100,
    
  },
  scrollView: {
    width: '100%',
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 18, 
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff'
  },
  productRating: {
    fontSize: 14,
    color:'#fff'

  },
  productBrand: {
    fontSize: 14,
    color:'#fff'
  },
  showMoreButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5, 
    alignSelf : 'flex-end',
  },
  showMoreText: {
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: 'white',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default ProductListScreen;
