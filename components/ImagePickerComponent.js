import React, {  useEffect } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button,Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';

const ImagePickerComponent=()=>{
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64:true
      });
      if (!result.cancelled) {
        console.log("result"+result.base64);
      }
    };
  return (
        // <Button
        //   style={{backgroundColor:'#000000'}}
        //   buttonStyle={styles.button}
        //   icon={()=><Icon color="#ffffff" size={18} name="paperclip"/>}
        //   onPress={pickImage}
        // />
        <TouchableOpacity
        onPress={pickImage}>
          <View style={styles.button}>
            <Icon color="#ffffff" size={20} name="paperclip"/>
          </View>
        </TouchableOpacity>
    
  );
}

export default ImagePickerComponent

const styles=StyleSheet.create({
  button:{
    backgroundColor:'#CE5252',
    margin:12,
    borderRadius:50,
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  }

})