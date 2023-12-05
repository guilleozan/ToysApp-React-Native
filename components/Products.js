
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

// import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';
// import { firestore } from '../firebaseConfig';



// export const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(firestore, 'Products'));
//         const productsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setProducts(productsData);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const refreshAvailability = async (productId) => {
//     const productIndex = products.findIndex((p) => p.id === productId);

//     if (productIndex !== -1) {
//       const product = products[productIndex];
//       const existBoolean = !product.availability;

//       const productDocRef = doc(db, 'Products', productId);

//       try {
//         await updateDoc(productDocRef, { availability: existBoolean });

//         setProducts((prevProducts) => {
//           const updatedProducts = [...prevProducts];
//           updatedProducts[productIndex] = {
//             ...product,
//             availability: existBoolean,
//           };
//           return updatedProducts;
//         });
//       } catch (error) {
//         console.error('Error updating availability:', error);
//       }
//     }
//   };

//   const renderProductCard = ({ item }) => (
//     <TouchableOpacity onPress={() => handlePressProduct(item)}>
//       <View style={styles.productCard}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>{item.price}</Text>
//         <Text style={styles.viewProductLink}>View Product</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const handlePressProduct = (product) => {
//     console.log('Pressed product:', product);
//     // Implement your navigation logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Our Toys</Text>
//       {products.length === 0 ? (
//         <View style={styles.loadingContainer}>
//           <Text>Loading products...</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={products}
//           keyExtractor={(item) => item.id}
//           renderItem={renderProductCard}
//           numColumns={2}
//           columnWrapperStyle={styles.productList}
//         />
//       )}
//     </View>
//   );
// };


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getDocs, collection, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'Products'));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const refreshAvailability = async (productId) => {
    // Your existing code for updating availability
  };

  const renderProductCard = ({ item }) => {
    // Check if availability is false
    if (!item.availability) {
      // If availability is false, return null to hide the element
      return null;
    }

    return (
      <TouchableOpacity onPress={() => handlePressProduct(item)}>
        <View style={styles.productCard}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.viewProductLink}>View Product</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handlePressProduct = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Toys</Text>
      {products.length === 0 ? (
        <View style={styles.loadingContainer}>
          <Text>Loading products...</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderProductCard}
          numColumns={2}
          columnWrapperStyle={styles.productList}
        />
      )}
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  productList: {
    justifyContent: 'space-between',
  },
  productCard: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    width: 160,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
  },
  viewProductLink: {
    color: 'blue',
    textDecorationLine: 'none',
    marginTop: 10,
    fontWeight: 'bold',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Products;
