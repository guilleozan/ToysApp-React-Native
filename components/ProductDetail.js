import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    const newItem = { ...product, quantity };
    console.log(`Added to Cart: ${product.name}`);
    navigation.navigate('ShoppingCart', {
      cartItems: [newItem],
    });
  };

  const handleRemoveFromCart = () => {
    console.log(`Removed from Cart: ${product.name}`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>Price: $ {product.price}</Text>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity:</Text>
        <TouchableOpacity
          onPress={() => setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityValue}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleAddToCart} style={styles.buttonBlue}>
        <Text style={styles.textButton}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemoveFromCart} style={styles.buttonRed}>
        <Text style={styles.textButton}>Remove from Cart</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 12,
  },
  quantityButtonText: {
    fontSize: 24,
    paddingHorizontal: 12,
    color: 'blue',
  },
  quantityValue: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  buttonBlue: {
    width: 200,
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
  },
  buttonRed: {
    width: 200,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
  },
});

export default ProductDetail;
