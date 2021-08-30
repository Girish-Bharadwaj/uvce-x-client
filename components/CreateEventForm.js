import React, { useState } from 'react'
import { StyleSheet,View,TextInput } from 'react-native'
import ImagePickerComponent from './ImagePickerComponent'
import { Button,Text } from 'react-native-elements'
import { StyledContainer } from './styles'
import { StatusBar } from 'expo-status-bar'
import AppBarComponent from './AppBarComponent'
import DatePicker from 'react-native-datepicker'

const CreateEventForm = () => {
    const [date,setDate]=useState(new Date());
    return (
        <>
        <AppBarComponent/>
            <StyledContainer>
                <View style={styles.form}>
                    <TextInput underlineColorAndroid='transparent' placeholder="Name of the Event...." placeholderTextColor="#C4C4C4" style={styles.titleInput}/>
                    <TextInput underlineColorAndroid='transparent' placeholder="Description...." placeholderTextColor="#C4C4C4" multiline={true} style={styles.descInput}/>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <ImagePickerComponent/>
                        <Button title="Submit" buttonStyle={styles.submit} />
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <Text>Registration Deadline: </Text>
                        <DatePicker 
                            date={date} 
                            onDateChange={(date)=>{setDate(date)}}
                            customStyles={{
                                dateText:{
                                    color:'#ffffff'
                                }
                              }}/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                        <Text>Date of the event: </Text>
                        <DatePicker 
                            date={date} 
                            onDateChange={(date)=>{setDate(date)}}
                            customStyles={{
                                dateText:{
                                    color:'#ffffff'
                                }
                              }}/>
                    </View>
                </View>
            </StyledContainer>
        </>
    )
}


export default CreateEventForm

const styles=StyleSheet.create({
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
        height:200,
        textAlignVertical:"top",
    },
    submit:{
        backgroundColor:'#CE5252',
        borderRadius:10
    }
})
