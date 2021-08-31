import React from 'react'
import { StyleSheet,ScrollView } from 'react-native'
import ClubsComponent from '../components/ClubsComponent'
import LoadingScreen from '../components/LoadingScreen'
import { useSelector } from 'react-redux'
const ClubsScreen = () => {
    const {isLoading} = useSelector(state => state.feeds)
    return (
        <>
        {
        !isLoading?
            <ScrollView>
                <ClubsComponent/>
                <ClubsComponent/>
                <ClubsComponent/>
            </ScrollView>:<LoadingScreen/>
        }
        </>
    )
}

export default ClubsScreen

const styles = StyleSheet.create({})
