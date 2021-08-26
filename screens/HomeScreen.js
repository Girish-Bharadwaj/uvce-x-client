import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StyledContainer } from '../components/styles'

const HomeScreen = () => {
    return (
        <StyledContainer>
            <View>
                <Text
                    style={{
                        color:'#ffffff'
                    }}
                >Homescreen</Text>
            </View> 
        </StyledContainer>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
