import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({ baseURL: 'https://uvcex.herokuapp.com/' });

API.interceptors.request.use( async (req) => {
    try {
        const idToken = await AsyncStorage.getItem('idToken');
        if(idToken){
            req.headers.Authorization = `Bearer ${idToken}`;
            return req; 
        }else return req; 

    } catch (error) {
        console.log(error);
    }
});

export const auth = (idToken, type, platform) => API.post(`/auth?type=${type}&platform=${platform}`, {idToken :idToken});
export const getHomeFeed = (page, platform) => API.get(`/feed/home?page=${page}&platform=${platform}`);