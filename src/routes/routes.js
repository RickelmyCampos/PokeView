import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import Home from '../screens/home';
import Settings from '../screens/settings';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import PokeDetails from '../screens/PokeDetails';
import Header from '../components/Header';

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
            <StackScreens />
        </NavigationContainer>
    );
}
export default Routes;