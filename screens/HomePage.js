import React from 'react'
import { ScrollView,StyleSheet } from 'react-native'
import PostComponent from '../components/PostComponent'

const HomePage = () => {
    return (
        <ScrollView>
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
        </ScrollView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    
})
