import React , {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { tokenReader } from './utils/utils.js';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {

  const [token, setToken] = useState();
  const {trigger} = useSelector((state) => state.auth);
  useEffect(() => {
    async function readToken() {
      const token = await tokenReader();
      setToken(token);
    }
    readToken();
  }, [tokenReader, trigger])
  
    return (
        <NavigationContainer>
          <Stack.Navigator> 
            {token?.profile?.sub ?
            <Stack.Screen name="Home" component={HomeScreen} />
          :
          <Stack.Screen name="SignIn" component={LoginScreen}/> }
          
          
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

