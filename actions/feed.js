import * as api from '../api/index.js' ;
import { Platform } from 'react-native';

export const getHomeFeed = (page) => async(dispatch)=>{
    dispatch({type : 'START_LOADING'});

    const { data : {data, status, message} } = await api.getHomeFeed(page, Platform.OS);
    console.log('api response for home feed', message, status); // remove later
  
    dispatch({type : 'GET_HOME_FEED', payload : data});
    dispatch({type : 'END_LOADING'});
}