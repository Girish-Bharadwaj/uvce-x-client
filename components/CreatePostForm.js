import React, {useState} from 'react';
import { StyleSheet,View,TextInput } from 'react-native';
import ImagePickerComponent from './ImagePickerComponent';
import { Button } from 'react-native-elements';
import { StyledContainer } from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/create';

const CreatePostForm = ({navigation}) => {

    const dispatch = useDispatch();

    const [postData, setPostData] = useState({postText : '', postImage : ''});
    const [image, setImage] = useState('');

    const handleSubmit = () => {
        setPostData({...postData, postImage : image});
        dispatch(createPost(postData));
        navigation.navigate("HomeScreen");
    }


    return (
        <>
        <StyledContainer>
            <View style={styles.form}>
                <TextInput underlineColorAndroid='transparent' placeholder="Content...." 
                placeholderTextColor="#C4C4C4"
                 multiline={true} style={styles.input} maxLength={240}
                 onChange={(e)=>setPostData({...postData, postText : e.target.value })}
                 value={postData.postText}
                required={true}/>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <ImagePickerComponent image={image} setImage={setImage} />

                    <Button title="Submit" buttonStyle={styles.submit}
                    onPress={handleSubmit} />
                </View>
            </View>
        </StyledContainer>
        </>
    )
}


export default CreatePostForm;

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
