import React from 'react'
import { StyleSheet, View,Image,TouchableHighlight} from 'react-native'
import { Text } from 'react-native-elements'


const EventComponent = ({navigation}) => {
    return (
        <>
        <TouchableHighlight onPress={()=>{navigation.navigate('EventFullScreen')}}> 
        <View style={styles.container}>
            <View style={{flex:1,marginRight:2.5,marginLeft:2.5}}>
                <Image source={{uri:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} style={styles.image} imageStyle={styles.background}></Image>
                    <View style={styles.eventDesc}>
                        <View style={styles.author}>
                            <Text style={styles.authorName}>IEEE UVCE Computer Society</Text>
                            <View style={{width:8,height:8,backgroundColor:'#C4C4C4',borderRadius:50}}></View>
                            <Text style={styles.time}>5min</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>NCode</Text>
                            <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt....</Text>
                            <Text style={styles.date}>Registration Deadline : 24/12/2021</Text>
                            <Text style={styles.date}>Date of Event : 24/12/2021</Text>
                        </View>
                    </View>
                
            </View>
        </View>
        </TouchableHighlight>
        </>
    )
}

export default EventComponent


const styles = StyleSheet.create({
    container:{
        marginTop:15,
        marginLeft:2.5,
        marginRight:2.5
    },
    image:{
        height:200,
        resizeMode:'cover',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    eventDesc:{
        backgroundColor:'#313131',
        width:'100%',
        alignItems:'flex-start',
        justifyContent:'space-between',
        padding:12,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    }
    ,
    author:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
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
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff',
        marginTop:20
    },
    description:{
        fontSize:15.5,
        color:'#ffffff',
        marginTop:1,
        marginBottom:20
    },
    date:{
        fontSize:14.5,
        fontWeight:'bold',
        color:'#F3EDED'
    }
})
