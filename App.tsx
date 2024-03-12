import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import WelcomeScreen from './Components/WelcomeScreen';
import LoginScreen from './Components/LoginScreen';
import HomeScreen from './Components/HomeScreen';


import UserListScreen from './Components/UserListScreen';
import UserDetailsScreen from './Components/UserDetailsScreen';


import MovieListScreen from './Components/MovieListScreen';
import ProductListScreen from './Components/ProductListScreen';
import QuotesScreen from './Components/QuotesScreen';
import MovieDetailsScreen from './Components/MovieDetailsScreen';
import ProductDetailsScreen from './Components/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />

          <Stack.Screen name='UserList' component={UserListScreen} />
          <Stack.Screen name='ProductList' component={ProductListScreen} />
          <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
          <Stack.Screen name='MovieList' component={MovieListScreen} />
          <Stack.Screen name='MovieDetails' component={MovieDetailsScreen} />

          <Stack.Screen name='UserDetails' component={UserDetailsScreen} />
          <Stack.Screen name='Quotes' component={QuotesScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;