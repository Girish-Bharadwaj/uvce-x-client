import React,{useState} from 'react'
import { StyleSheet, View } from 'react-native'
import CreatePostFrom from '../components/CreatePostForm'
import CreateEventForm from '../components/CreateEventForm'
import { Picker } from '@react-native-picker/picker'
import AppBarComponent from '../components/AppBarComponent'
import { StyledContainer } from '../components/styles'

const CreateForm = () => {
    const [postType,setPostType]=useState('post')
    return (
    <>
    <AppBarComponent/>
        <StyledContainer>
        <View style={{backgroundColor:'#ce5252',width:150,padding:10,margin:10,borderRadius:10}}>
           <Picker
           style={{color:"#ffffff",fontSize:30,fontWeight:'bold'}}
           dropdownIconColor="#ffffff"
           mode="dropdown"
            selectedValue={postType}
            onValueChange={(itemValue, itemIndex) =>
                setPostType(itemValue)
            }>
            <Picker.Item label="Post" value="post" />
            <Picker.Item label="Event" value="event" />
            <Picker.Item label="Workshop" value="workshop" />
        </Picker>
        </View>
        {(postType==="post")?<CreatePostFrom/>:<></>}
        {(postType==="event")?<CreateEventForm/>:<></>}
        {(postType==="workshop")?<CreateEventForm/>:<></>}
        </StyledContainer>
    </>
    )
}

export default CreateForm

const styles = StyleSheet.create({})
