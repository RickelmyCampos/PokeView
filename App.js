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

  useColorScheme,

} from 'react-native';
import UserContextProvider from './src/context/UserContextProvider';
import { api, Get } from './src/services/pokeApi'
import Routes from './src/routes/routes';
import Home from './src/screens/home';
import PokeContextProvider from './src/context/PokeContextProvider';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PortalProvider } from '@gorhom/portal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (

    <UserContextProvider>
      <PokeContextProvider>
      <GestureHandlerRootView style={{height:'100%'}}>
        <PortalProvider>
          <Routes />
        </PortalProvider>
        </GestureHandlerRootView>
      </PokeContextProvider>
    </UserContextProvider>


  )
}
export default App;
