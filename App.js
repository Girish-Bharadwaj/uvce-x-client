import React , {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { tokenReader } from './utils/utils.js';
import { useSelector } from 'react-redux';
import { ThemeProvider, Button } from 'react-native-elements';
import EventFullScreen from './screens/EventFullScreen';
import CreateForm from './screens/CreateForm';
import CreateClubForm from './screens/CreateClubForm';
import MomentFullScreen from './screens/MomentFullScreen';

const theme = {
  
  Text:{
    style:{
      color:"#ffffff"
    }
  }
};


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
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator> 
            {token?.profile?.sub ?
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
              <Stack.Screen name="EventFullScreen" component={EventFullScreen} options={{headerShown:false}}/>
              <Stack.Screen name="CreateForm" component={CreateForm} options={{headerShown:false}}/>
              <Stack.Screen name="CreateClub" component={CreateClubForm} options={{headerShown:false}}/>
              <Stack.Screen name="MomentFullScreen" component={MomentFullScreen} options={{headerShown:false}}/>
            </>
          :
          <>
            <Stack.Screen name="SignIn" component={LoginScreen} options={{headerShown:false}}/>
          </>
          }
          
          
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    )
}

export default App;

