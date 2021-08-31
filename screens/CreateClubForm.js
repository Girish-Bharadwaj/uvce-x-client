import React from 'react'
import { StyleSheet,View,TextInput,Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { StyledContainer } from '../components/styles'
import AppBarComponent from '../components/AppBarComponent'


const CreateClubForm = () => {
    const signInAsClub=()=>{
        Alert.alert(
            "Alert",
            "You will be logged out from current account",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Ok",
                onPress: handleGoogleSignIn,
                style: "default",
              },
            ],
            {
              cancelable: true,
            }
        )
    }
    const handleGoogleSignIn=()=>{
        console.log("pressed")
        const config={
                iosClientId:`367910513234-vlneadjfdhi92o58g3nv52jjitdnuc23.apps.googleusercontent.com`,
                androidClientId:`367910513234-lnjillhctfie4eu8658cqi06vlkuq84k.apps.googleusercontent.com`,
            }
            Google.logInAsync(config).
            then((result)=>{
                if(result?.type==='success'){
                    console.log("successfull="+result) //implement what you want to do after getting result
                }
                else{
                    console.log('Unsuccessfull')
                }
            }).catch((error)=>{
                console.log(error);
            })
    }
    return (
        <>
        <AppBarComponent/>
            <StyledContainer>
                <View style={styles.form}>
                    <TextInput underlineColorAndroid='transparent' placeholder="Name of the Club...." placeholderTextColor="#C4C4C4" style={styles.titleInput}/>
                    <TextInput underlineColorAndroid='transparent' placeholder="Description...." placeholderTextColor="#C4C4C4" multiline={true} style={styles.descInput}/>
                    <TextInput underlineColorAndroid='transparent' placeholder="Email Id of Club" placeholderTextColor="#C4C4C4" style={styles.titleInput} dataDetectorTypes="address"/>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <Button title="Submit" buttonStyle={styles.submit} onPress={signInAsClub}/>
                    </View>
                </View>
            </StyledContainer>
        </>
    )
}

export default CreateClubForm

const styles = StyleSheet.create({
    form:{
        flex:1,
        marginLeft:10,
        marginRight:10,
    },
    titleInput:{
        color:'#ffffff',
        backgroundColor:'#313131',
        padding:10,
        borderRadius:8,
        textAlignVertical:"center",
        marginBottom:20
    },
    descInput:{
        color:'#ffffff',
        backgroundColor:'#313131',
        padding:10,
        borderRadius:8,
        height:200,
        textAlignVertical:"top",
        marginBottom:20
    },
    submit:{
        backgroundColor:'#CE5252',
        // borderRadius:10
    }
})
