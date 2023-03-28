import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import Home from '../screens/home';
import Settings from '../screens/settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokeDetails from '../screens/PokeDetails';
import Header from '../components/Header';
import Login from '../screens/Login';
import Login2 from '../screens/Login/Login2';
import Login3 from '../screens/Login/Login3';
import auth from '@react-native-firebase/auth';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import Register from '../screens/Login/register';
import Register1 from '../screens/Login/register/register1';
import MargikarpNotFound from '../components/MargikarpNotFound';
import {PokeContext} from '../context/PokeContextProvider';
import LoadingScreen from '../screens/LoadingScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MyTabBar({ state, descriptors, navigation }) {

  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'red', height: 80 }}>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const StackScreens = () => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={TabScreens} options={{ headerShown: false }} />
      <Stack.Screen name='PokeDetails' component={PokeDetails} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}
const StackAuth = () => {

  return (
    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Login2' component={Login2} options={{ headerShown: false }} />
      <Stack.Screen name='Login3' component={Login3} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
      <Stack.Screen name='Register1' component={Register1} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
const TabScreens = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}
    
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name='HomeTab' component={Home}/>
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
}
function isAuth() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const {pokemons}=useContext(PokeContext)

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if(pokemons){
    if (initializing) return (
      <MargikarpNotFound />
    );
  
    if (!user) {
      return (
        <StackAuth />
      );
    }
  
    return (
      
       <StackScreens />
    );
  }else{
    return(
      <LoadingScreen/>
    )
  }
  
}
const Routes = () => {

  return (
    <NavigationContainer>
      {isAuth()}
    </NavigationContainer>
  );
}
export default Routes;