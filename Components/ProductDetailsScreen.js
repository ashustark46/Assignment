
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>Price: ${product.price}</Text>
        <Text style={styles.productDiscount}>Discount: {product.discountPercentage}%</Text>
        <Text style={styles.productRating}>Rating: {product.rating}</Text>
        <Text style={styles.productStock}>Stock: {product.stock}</Text>
        <Text style={styles.productBrand}>Brand: {product.brand}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor : 'lemon',
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  productDiscount: {
    fontSize: 18,
    marginBottom: 10,
  },
  productRating: {
    fontSize: 18,
    marginBottom: 10,
  },
  productStock: {
    fontSize: 18,
    marginBottom: 10,
  },
  productBrand: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;
