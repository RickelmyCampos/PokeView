import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import Home from '../screens/home';
import Settings from '../screens/settings';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import PokeDetails from '../screens/PokeDetails';
import Header from '../components/Header';
import Login from '../screens/Login';
import Login2 from '../screens/Login/Login2';
const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator();
const StackScreens=()=>{
    
    return (
        <Stack.Navigator  initialRouteName="Home">
            <Stack.Screen name='Home' component={TabScreens} />
            <Stack.Screen name='PokeDetails' component={PokeDetails} options={{headerShown:false}} />
            
        </Stack.Navigator>
    );  
}
const StackAuth=()=>{
    
    return (
        <Stack.Navigator  initialRouteName="Home">
           
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
            <Stack.Screen name='Login2' component={Login2} options={{headerShown:false}} />
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
const Routes = () => {
    return (
        <NavigationContainer>
            <StackAuth/>
            {/* <StackScreens /> */}
        </NavigationContainer>
    );
}
export default Routes;