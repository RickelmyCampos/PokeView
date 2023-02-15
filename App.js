/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/routes/routes';
import Home from './src/screens/home';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
      <Routes/>
    
  )}
export default App;
