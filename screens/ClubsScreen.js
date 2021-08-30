import React from 'react'
import { StyleSheet,ScrollView } from 'react-native'
import ClubsComponent from '../components/ClubsComponent'

const ClubsScreen = () => {
    return (
        <ScrollView>
            <ClubsComponent/>
            <ClubsComponent/>
            <ClubsComponent/>
        </ScrollView>
    )
}

export default ClubsScreen

const styles = StyleSheet.create({})
