import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import EventComponent from './EventComponent'

const EventScreen = ({navigation}) => {
    return (
        <ScrollView style={{flex:1,margin:10}}>
            <EventComponent navigation={navigation}/>
            <EventComponent/>
        </ScrollView>
    )
}

export default EventScreen

const styles = StyleSheet.create({})
