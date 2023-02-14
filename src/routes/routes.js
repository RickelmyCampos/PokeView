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
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import Register from '../screens/Login/register/register1';
import Register1 from '../screens/Login/register/register1';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackScreens = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={TabScreens} />
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
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='HomeTab' component={Home} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    );
}
function isAuth() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <StackAuth />
        );
    }

    return (
        <StackScreens />
    );
}
const Routes = () => {

    return (
        <NavigationContainer>
            {isAuth()}
        </NavigationContainer>
    );
}
export default Routes;