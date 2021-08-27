import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#000000"}}><ActivityIndicator size="large" color="#CE5252"/></View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})
