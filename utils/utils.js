import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import jwt from 'expo-jwt';

export const tokenReader = async ()=>{
    try {
        const userToken = await AsyncStorage.getItem('userToken');
        const rightsToken = await AsyncStorage.getItem('rightsToken');
        const potato = await SecureStore.getItemAsync('potato');
        if(userToken && rightsToken){
            const profileObject = jwt.decode(userToken, potato);
            const rightsObject = jwt.decode(rightsToken, potato); 
            return {profile : profileObject, rights : rightsObject};
    }else return null;
    } catch (error) {
        console.log(error);
    }
  }