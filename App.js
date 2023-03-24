/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

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
import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';

import { unzip,subscribe } from 'react-native-zip-archive';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const [message, setMessage] = useState('');
  // const [totalBytes, setTotalBytes] = useState(0);
  // const [progressBytes, setProgressBytes] = useState(0);
  // const [percent, setPercent] = useState(0);
  // const Iniciou = (res) => {

  //   setTotalBytes(res.contentLength)
  // }
  // const Progress = (res) => {

  //   setProgressBytes(res.bytesWritten)
  // }
 

   
 
  // useEffect(() => {
  //   const download = async () => {
  //     console.log("buscando url")
  //     const url = await storage().ref('v2.zip').getDownloadURL();
  //     console.log("[URL]", RNFS.DownloadDirectoryPath)
  //     const isExist = await RNFS.exists(RNFS.DownloadDirectoryPath + '/v2.zip')
  //     if (!isExist) {
  //       setMessage('baixando arquivo ...')
  //       await RNFS.downloadFile({ fromUrl: url, toFile: RNFS.DownloadDirectoryPath + '/v2.zip', begin: (res) => Iniciou(res), progress: (res) => Progress(res) }).promise.then((e) => console.log('gravado', e.statusCode, e.bytesWritten)).catch((e) => console.log('erro', e))
  //       setMessage('Arquivo baixado')
  //     }
  //     setMessage('Descompactando arquivo')
  //     const zipProgress = subscribe(({ progress, filePath }) => {
  //       // the filePath is always empty on iOS for zipping.
  //       setPercent(progress)
  //     })
  //     await unzip(RNFS.DownloadDirectoryPath + '/v2.zip', RNFS.DownloadDirectoryPath , 'UTF-8')
  //       .then((path) => {
          
  //         console.log(`unzip completed at ${path}`)
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  //       zipProgress.remove()
  //       setMessage('Arquivo Descompactado')
  //     // await RNFS.readdir(RNFS.DownloadDirectoryPath).then((res) => {console.log(res)}).catch((e) =>{console.log(e); })
  //     //RNFS.readdir(RNFS.DownloadDirectoryPath).then((res) => {console.log(res[0])}).catch((e) =>{console.log(e); })
  //   }
  //   download();
  // }, []);
  return (
    <UserContextProvider>
      {/* <View>
        <Text>
          POKEVIEW
        </Text>
        <Text>
          {message}
        </Text>
        <Text>
          {progressBytes} B/{totalBytes} B
        </Text>
        <Text>
          {percent} 
        </Text>
      </View> */}
      <Routes/>
    </UserContextProvider>

  )
}
export default App;
