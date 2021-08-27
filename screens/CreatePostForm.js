import React from 'react'
import { StyleSheet,View,TextInput } from 'react-native'
import ImagePickerComponent from '../components/ImagePickerComponent'
import { Button } from 'react-native-elements'
import { StyledContainer } from '../components/styles'
import { StatusBar } from 'expo-status-bar'
import AppBarComponent from '../components/AppBarComponent'

const CreatePostForm = () => {
    return (
        <>
        <AppBarComponent/>
        <StyledContainer>
            <View style={styles.form}>
                <TextInput underlineColorAndroid='transparent' placeholder="Description...." placeholderTextColor="#C4C4C4" multiline={true} style={styles.input}/>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <ImagePickerComponent/>
                    <Button title="Submit" buttonStyle={styles.submit} />
                </View>
            </View>
        </StyledContainer>
        </>
    )
}


export default CreatePostForm

const styles=StyleSheet.create({
    form:{
        flex:1,
        marginLeft:10,
        marginRight:10
    },
    input:{
        color:'#ffffff',
        backgroundColor:'#313131',
        padding:10,
        borderRadius:8,
        height:200,
        textAlignVertical:"top",
    },
    submit:{
        backgroundColor:'#CE5252',
        borderRadius:10
    }
})
