import React,{useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CreatePostFrom from '../components/CreatePostForm';
import CreateEventForm from '../components/CreateEventForm';
import { Picker } from '@react-native-picker/picker';
import AppBarComponent from '../components/AppBarComponent';
import { StyledContainer } from '../components/styles';
import CreateMomentForm from '../components/CreateMomentForm';
import { tokenReader } from '../utils/utils';

const CreateForm = ({navigation}) => {
    const [postType,setPostType] = useState('post');
    const [token, setToken] = useState();

    useEffect(() => {
        async function readToken() {
          const token = await tokenReader();
          setToken(token);
        }
        readToken();
      }, [tokenReader])

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
            {token?.rights.verifiedLevel >= 3 && 
            <Picker.Item label="Post" value="post" />}
            {token?.rights.verifiedLevel >= 4 &&
             <>
            <Picker.Item label="Event" value="event" />
            <Picker.Item label="Workshop" value="workshop" />
            <Picker.Item label="Moment" value="moment" />
            </>
            }
            
        </Picker>
        </View>
        {(postType==="post")&&<CreatePostFrom navigation = {navigation}/>}
        {(postType==="event")&&<CreateEventForm/>}
        {(postType==="workshop")&&<CreateEventForm/>}
        {(postType==="moment")&&<CreateMomentForm/>}
        </StyledContainer>
    </>
    )
}

export default CreateForm;

const styles = StyleSheet.create({})
