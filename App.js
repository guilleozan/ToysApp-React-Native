import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const { container, backgroundImage, title, button, buttonText } = styles;

  return (
    <View style={container}>
      <ImageBackground
        source={require('./assets/Cube.jpg')}
        style={backgroundImage}
      >
        <Text style={title}>Guille Toys Store</Text>

        <TouchableOpacity
          style={button}
          onPress={() => navigation.navigate('Products')}
        >
          <Text style={buttonText}>View Products</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Products"
          component={Products}
          options={{ title: 'Productos' }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: 'Product Detail' }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{ title: 'Shopping Cart' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 25,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
