import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Text} from 'react-native-elements'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const screenWidth = Dimensions.get('window').width;
const Hashtags = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>IEEE Aloke</Text>
                <Text style={styles.tag}>Trending now</Text>
            </View>
            <Icon name="trending-up" color="#CE5252" size={30}/>
        </View>
    )
}

export default Hashtags

const styles = StyleSheet.create({
    container:{
        height:100,
        width:screenWidth-25,
        marginRight:2.5,
        marginLeft:2.5,
        marginTop:15,
        marginBottom:15,
        backgroundColor:'#313131',
        padding:12,
        borderRadius:15,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'#ffffff'
    },
    tag:{
        fontSize:11,
        color:'#C4C4C4',
    }
})
