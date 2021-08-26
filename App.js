import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'

let accessToken=null //dummy

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            {accessToken == null ? (
            <Stack.Screen
                name="SignIn"
                component={LoginScreen}
                options={{
                  title: 'Sign in',
                }}
              />
            ) : (
              <Stack.Screen name="Home" component={HomeScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App


