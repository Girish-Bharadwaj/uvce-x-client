import React from 'react'
import { Image, StyleSheet,View } from 'react-native'
import { Text,Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import { Button } from 'react-native-elements/dist/buttons/Button'

const PostComponent = () => {
    return (
        <View style={styles.container}>
            <Avatar rounded size={62} containerStyle={styles.avatar} source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'}}/>
            <View style={styles.author}>
                <Text style={styles.authorName}>IEEE UVCE Computer Society</Text>
                <View style={{width:8,height:8,backgroundColor:'#C4C4C4',borderRadius:50}}></View>
                <Text style={styles.time}>5min</Text>
            </View>
            <View style={styles.post}>
                <View style={styles.content}>
                    <Text style={{fontSize:16}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quasi corrupti ut magni ullam doloremque voluptatum laudantium facere at deserunt alias quis ipsam repudiandae harum cumque, aliquid dolorum odit incidunt placeat...
                    </Text>
                </View>
                <Image source={{uri:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} style={styles.image} imageStyle={styles.background}></Image>
                <View style={styles.reaction}>
                    <Button buttonStyle={{borderRadius:50}} icon={<Icon name="share-2" size={21} style={styles.reactionIcons} />}/>
                    <Button buttonStyle={{borderRadius:50}} icon={<Icon name="message-square" size={21} style={styles.reactionIcons} />}/>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Button buttonStyle={{borderRadius:50}} icon={<Icon name="heart" size={21} style={styles.reactionIcons} />}/>
                        <Text>35</Text>
                    </View>
                    <Button buttonStyle={{borderRadius:50}} icon={<Icon name="more-vertical" size={21} style={styles.reactionIcons} />}/>
                </View>
            </View>
            <View style={styles.divider}></View>
        </View>
    )
}

export default PostComponent

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:20,
        marginTop:0,
    },
    avatar:{
        position:'absolute',
        zIndex:1,
        left:-15,
        top:1
    }
    ,
    post:{
        backgroundColor:'#313131',
        borderRadius:25,
        
    },
    content:{
        padding:7,
        paddingTop:20,
        paddingLeft:30
    },
    image:{
        height:180,
        resizeMode:'cover',
        marginTop:10,
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
        borderRadius:10
    },
    author:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:4
    },
    authorName:{
        color:'#C4C4C4',
        marginRight:7,
        fontSize:14,
        fontWeight:'bold',
    },
    time:{
        color:'#C4C4C4',
        fontSize:14,
        marginLeft:7,
        fontWeight:'bold'
    },
    reaction:{
        flexDirection:'row',
        margin:10,
        marginTop:15,
        marginBottom:15,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    reactionIcons:{
        color:'white'
    },
    divider:{
        height:4.3,
        backgroundColor:'#313131',
        marginTop:20
    },
})
