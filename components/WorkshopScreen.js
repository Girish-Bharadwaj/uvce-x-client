import React from 'react'
import { StyleSheet,ScrollView } from 'react-native'
import EventComponent from './EventComponent'
const WorkshopScreen = ({navigation}) => {
    return (
        <ScrollView style={{flex:1,margin:10}}>
            <EventComponent navigation={navigation}/>
            <EventComponent/>
        </ScrollView>
    )
}

export default WorkshopScreen

const styles = StyleSheet.create({})
