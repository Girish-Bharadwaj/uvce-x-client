import { Platform } from 'react-native';
import * as api from '../api/index.js';
import { Alert } from 'react-native';

export const createPost = (postData) => async(dispatch) => {
    console.log(postData);
    dispatch({type : 'START_LOADING'});

    const {data : {message, postId, status}} = await api.createPost(postData, Platform.OS).catch((e)=>(console.log(e)));
    console.log(message);
    if(status !== '201'){
        dispatch({type : 'END_LOADING'});

        Alert.alert(
            "Alert", "Could not create post try again",
            [ { text: "Ok", style: "default", }, ], { cancelable: true, } )
    }

    dispatch({type : 'END_LOADING'});
}