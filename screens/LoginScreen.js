import React from 'react'
import {ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StyledContainer } from '../components/styles'
import {Fontisto} from '@expo/vector-icons'
import * as Google from 'expo-google-app-auth'
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
    const dispatch=useDispatch();
    function handleGoogleSignIn(){
        const config={
            iosClientId:`367910513234-vlneadjfdhi92o58g3nv52jjitdnuc23.apps.googleusercontent.com`,
            androidClientId:`367910513234-lnjillhctfie4eu8658cqi06vlkuq84k.apps.googleusercontent.com`,
        }
        Google.logInAsync(config).
        then((result)=>{
            const{type,user}=result;
            if(type==='success'){
                console.log(result)
                dispatch({type:'AUTH',data:result.accessToken})
            }
            else{
                console.log('Unsuccessfull')
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <StyledContainer>
            <StatusBar style="dark"></StatusBar>
            <ImageBackground 
                source={require("./../assets/loginBackground.png")}
                resizeMode="cover"
                style={styles.ImageBackground}>
                <View style={styles.view}>
                    <Text style={styles.heading}>
                        UVCE
                        <Text style={styles.x}>x</Text>
                    </Text>
                    <TouchableOpacity style={styles.loginButton}
                        onPress={handleGoogleSignIn}>
                        <Fontisto
                            name="google"
                            color="#ffffff"
                            size={20}
                        />
                        <Text
                            style={{
                                color:"#ffffff",
                                marginLeft:10,
                            }}
                        >
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </StyledContainer>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    view:{
        flex:1,
        paddingLeft:10,
        alignItems:'center',
        justifyContent:'center',
    },
    heading:{
        color:'#ffffff',
        fontSize:30,
    },
    x:{
        color:'#6C403B',
    },
    ImageBackground:{
        flex:1,
    },
    loginButton:{
        backgroundColor:'#6C403B',
        padding:10,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    }
})
