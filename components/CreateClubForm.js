import React from 'react'
import { StyleSheet,View,TextInput } from 'react-native'
import ImagePickerComponent from './ImagePickerComponent'
import { Button } from 'react-native-elements'
import { StyledContainer } from './styles'
import { StatusBar } from 'expo-status-bar'
import AppBarComponent from './AppBarComponent'

const CreateClubForm = () => {
    return (
        <>
            <StyledContainer>
                <View style={styles.form}>
                    <TextInput underlineColorAndroid='transparent' placeholder="Name of the Club...." placeholderTextColor="#C4C4C4" style={styles.titleInput}/>
                    <TextInput underlineColorAndroid='transparent' placeholder="Description...." placeholderTextColor="#C4C4C4" multiline={true} style={styles.descInput}/>
                    <TextInput underlineColorAndroid='transparent' placeholder="Email Id of Club" placeholderTextColor="#C4C4C4" style={styles.titleInput} dataDetectorTypes="address"/>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <Button title="Submit" buttonStyle={styles.submit} />
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
