import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import {LinearGradient}  from 'expo-linear-gradient'

const ClubsComponent = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} imageStyle={{borderRadius:20}} source={{uri:'https://scontent.fblr1-5.fna.fbcdn.net/v/t1.6435-9/36724783_894861400700704_2835166688717045760_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5qm2a2aKETwAX8ezWIO&_nc_ht=scontent.fblr1-5.fna&oh=5f2005e14693777523fb0faf7aaf0df0&oe=615043AA'}}>
                <LinearGradient colors={['rgba(255, 255, 255, 0)','rgba(0, 0, 0, 0.7)']} style={styles.blackMask} start={{ y: 0}} end={{ y: 1 }} locations={[0.49,1]} > 
                    <Text style={styles.clubName}>IEEE UVCE Computer society</Text>
                    <Text style={styles.clubDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt.......</Text>
                </LinearGradient>
            </ImageBackground>
            
        </View>
    )
}

export default ClubsComponent

const styles = StyleSheet.create({
    container:{
        height:250,
        margin:20,
        borderRadius:20
    },
    blackMask:{
        height:250,
        borderRadius:20,
        padding:10,
        justifyContent:'flex-end'
    },
    background:{
        flex:1,
        borderRadius:20,
    },
    clubName:{
        fontWeight:'bold',
        fontSize:16
    },
    clubDesc:{
        fontSize:13
    }
})
