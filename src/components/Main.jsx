// import Constants from "expo-constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HOME/Home";
import UserProfile from "./UserProfile/UserProfile";

const Stack = createNativeStackNavigator();
export default function Main() {
    const linking = {
        prefixes: ['https://tusitio.com', 'tusitio://'],
        config: {
          screens: {
            Home: '/Home',
            Details: 'details/:id',
            Profile:'/Profile',
            
          },
        },
      };
      
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={
                        Home
                    }
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name='Profile'
                    component={
                        UserProfile
                    }
                    options={{
                        headerShown: false
                    }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}