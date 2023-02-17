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
import UserContextProvider from './src/context/UserContextProvider';
import Routes from './src/routes/routes';
import Home from './src/screens/home';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
    
  )}
export default App;
