import * as api from '../api/index.js';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const auth = (idToken, type) => async(dispatch)=> {
    console.log('action auth got called');
    try {
        dispatch({type : 'START_LOADING', payload : null});
        const platform = Platform.OS;
        const {data : {userToken, rightsToken, potato, status, message}} = await api.auth(idToken, type, platform);
        console.log(`this is api response : 
        message : ${message} `); //remove this later
        if(status === '200'){
            await AsyncStorage.setItem('idToken', idToken);
            await AsyncStorage.setItem('userToken', userToken);
            await AsyncStorage.setItem('rightsToken', rightsToken);
            await SecureStore.setItemAsync('potato', potato);
        }else{
            console.log('login failed')
        }
        dispatch({type : 'END_LOADING', payload : null});

    } catch (error) {
        console.log(error);
    }
}