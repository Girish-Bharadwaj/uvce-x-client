import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import {Text} from 'react-native-elements'

const SmallMoment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            <View style={styles.author}>
                    <Text style={styles.authorName}>Pug</Text>
                    <View style={{width:6,height:6,backgroundColor:'#C4C4C4',borderRadius:50}}></View>
                    <Text style={styles.time}>5m</Text>
                </View>
                <Text style={styles.title}>I achieved touching my nose with my tounge</Text>
            </View>
            <View style={styles.right}>
                <Image
                    source={{uri:"https://images.unsplash.com/photo-1629907912711-9845e6e762a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"}}
                    style={{flex:1,borderRadius:10}}
                />
            </View>
        </View>
    )
}

export default SmallMoment

const styles = StyleSheet.create({
    container:{
        height:145,
        borderRadius:15,
        padding:12,
        flexDirection:'row',
        backgroundColor:'#313131',
        marginBottom:10,
        marginLeft:2.5,                             
        marginRight:2.5,                             
    },  
    left:{
        flex:2,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        
    },
    right:{
        flex:1.65,
        padding:10
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
        fontWeight:'500',
    },
    time:{
        color:'#C4C4C4',
        fontSize:12,
        marginLeft:7,
        fontWeight:'500'
    },
    title:{
        flex:1,
        // backgroundColor:'red',
        fontSize:14,
        fontWeight:"500",
        marginTop:10,
        textAlignVertical:'top',
        marginBottom:10,
        color:'#ffffff'
    }
})
