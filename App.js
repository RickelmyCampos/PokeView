/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import RNFS from 'react-native-fs';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  KeyboardAvoidingView
} from 'react-native';
import UserContextProvider from './src/context/UserContextProvider';
import { api, Get } from './src/services/pokeApi'
import Routes from './src/routes/routes';
import Home from './src/screens/home';
import PokeContextProvider from './src/context/PokeContextProvider';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  
  return (
    <UserContextProvider>
      <PokeContextProvider>
      
        
      
      <Routes/> 
     
      
      </PokeContextProvider>
    </UserContextProvider>

  )
}
export default App;
