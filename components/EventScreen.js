import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import EventComponent from './EventComponent'
import { useSelector } from 'react-redux'
import LoadingScreen from './LoadingScreen'

const EventScreen = ({navigation}) => {
    const {isLoading} = useSelector(state => state.feeds)
    return (
        <>
        {
        !isLoading?
            <ScrollView style={{flex:1,margin:10}}>
                <EventComponent navigation={navigation}/>
                <EventComponent/>
            </ScrollView>:<LoadingScreen/>
        }
        </>
    )
}

export default EventScreen

const styles = StyleSheet.create({})
