import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import BigMoment from '../components/BigMoment'
import Hashtags from '../components/Hashtags'
import { Dimensions } from 'react-native';
import SmallMoment from '../components/SmallMoment'

const screenWidth = Dimensions.get('window').width;


const Trending = () => {
    return (
        <View style={styles.window}>
            <ScrollView style={{flex:1}}>
                <View style={{flex:1}}>
                    <ScrollView style={{flex:1}}
                        horizontal={true}
                        snapToInterval={screenWidth-20}
                    >
                        <BigMoment/>
                        <BigMoment/>
                        <BigMoment/>
                    </ScrollView>
                </View>
                <ScrollView
                        horizontal={true}
                        snapToInterval={screenWidth-20}
                    >
                        <Hashtags/>
                        <Hashtags/>
                        <Hashtags/>
                    </ScrollView>
                    <SmallMoment/>
                    <SmallMoment/>
                    <SmallMoment/>
            </ScrollView>
        </View>
    )
}

export default Trending

const styles = StyleSheet.create({
    window:{
        flex:1,
        padding:10
    },
})
