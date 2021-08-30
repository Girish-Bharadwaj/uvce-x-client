import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text,Button } from 'react-native-elements'
import { StyledContainer } from '../components/styles'
import AppBarComponent from '../components/AppBarComponent'

const EventFullScreen = () => {
    return (
        <>
        <AppBarComponent/>
        <StyledContainer>
            <ScrollView style={{padding:10,backgroundColor:"#000000"}}>
            <Image source={{uri:'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={{width:'100%',height:300}}></Image>
            <Text style={styles.title}>
                NCode
            </Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint deleniti aliquam perferendis, praesentium adipisci ratione harum reprehenderit nisi cupiditate iure voluptas excepturi voluptates ex dolores cum vel accusamus, itaque blanditiis voluptate autem exercitationem dolorem! Iure quia repellat blanditiis assumenda, magni, provident, culpa nesciunt aliquam similique voluptatem earum. Placeat ut odio quaerat sunt architecto!
            </Text>
            <Text style={styles.date}>Registration Deadline : 24/12/2021</Text>
            <Text style={styles.date}>Date of Event : 24/12/2021</Text>
            <TouchableOpacity style={styles.enroll}><Text style={{fontSize:20,fontWeight:'bold'}}>Enroll</Text></TouchableOpacity>
            </ScrollView>
        </StyledContainer>
        </>
    )
}

export default EventFullScreen

const styles = StyleSheet.create({
    title:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
        margin:8,
        marginTop:20
    },
    description:{
        color:"#ffffff",
        fontSize:20,
        padding:4,
        marginBottom:20
    },
    date:{
        fontSize:16.5,
        fontWeight:'bold',
        color:'#F3EDED',
    },
    enroll:{
        backgroundColor:"#ce5252",
        marginTop:20,
        marginBottom:30,
        width:80,
        padding:10,
        borderRadius:10
    }
})
