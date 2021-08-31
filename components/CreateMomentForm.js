import React from 'react'
import { StyleSheet,View,TextInput } from 'react-native'
import ImagePickerComponent from './ImagePickerComponent'
import { Button } from 'react-native-elements'
import { StyledContainer } from './styles'

const CreateMomentForm = () => {
    return (
        <>
            <StyledContainer>
                <View style={styles.form}>
                    <TextInput underlineColorAndroid='transparent' placeholder="Moment title...." placeholderTextColor="#C4C4C4" style={styles.titleInput}/>
                    <TextInput underlineColorAndroid='transparent' placeholder="Description.... U can use markdown styling for customizations" placeholderTextColor="#C4C4C4" multiline={true} style={styles.descInput}/>
                    <ImagePickerComponent/>
                    <Button title="Submit" buttonStyle={styles.submit} />
                </View>
            </StyledContainer>
        </>
    )
}

export default CreateMomentForm

const styles = StyleSheet.create({
    form:{
        flex:1,
        marginLeft:10,
        marginRight:10
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
        height:300,
        textAlignVertical:"top",
    },
    submit:{
        backgroundColor:'#CE5252',
        borderRadius:10,
        marginTop:20,
        width:100
    }
})
