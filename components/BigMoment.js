import React from 'react'
import { ImageBackground } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const BigMoment = () => {
    return (
        <View style={{height:200,width:screenWidth-25,marginRight:2.5,marginLeft:2.5}}>
            <ImageBackground source={{uri:"https://images.unsplash.com/photo-1629985858244-a033a55b66e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}} style={styles.background} imageStyle={styles.background}>
                <View style={styles.author}>
                    <Text style={styles.authorName}>H N Ramesh</Text>
                    <View style={{width:8,height:8,backgroundColor:'#C4C4C4',borderRadius:50}}></View>
                    <Text style={styles.time}>5min</Text>
                </View>
                <Text style={styles.title}>UVCE to remain close...</Text>
            </ImageBackground>
        </View>
    )
}

export default BigMoment

const styles = StyleSheet.create({
    background:{
        flex:1,
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        resizeMode:'cover',
        padding:12,
    },
    author:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    authorName:{
        color:'#C4C4C4',
        marginRight:7,
        fontSize:12,
        fontWeight:'bold',
    },
    time:{
        color:'#C4C4C4',
        fontSize:12,
        marginLeft:7,
        fontWeight:'bold'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'
    }
})
