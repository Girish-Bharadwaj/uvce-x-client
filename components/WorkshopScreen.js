import React from 'react'
import { StyleSheet,ScrollView } from 'react-native'
import EventComponent from './EventComponent'
import LoadingScreen from './LoadingScreen'
import { useSelector } from 'react-redux'

const WorkshopScreen = ({navigation}) => {
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

export default WorkshopScreen

const styles = StyleSheet.create({})
