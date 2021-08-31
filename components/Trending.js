import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import BigMoment from './BigMoment'
import Hashtags from './Hashtags'
import { Dimensions } from 'react-native';
import SmallMoment from './SmallMoment'
import EventComponent from './EventComponent'
import { useSelector } from 'react-redux'
import LoadingScreen from './LoadingScreen'
const screenWidth = Dimensions.get('window').width;

const Trending = ({navigation}) => {
    const {isLoading}=useSelector((state)=>state.feeds)
    return (
        <>
        {!isLoading?<View style={styles.window}>
            <ScrollView style={{flex:1}}>
                <View style={{flex:1}}>
                    <ScrollView style={{flex:1}}
                        horizontal={true}
                        snapToInterval={screenWidth-20}
                    >
                        <BigMoment navigation={navigation}/>
                        <BigMoment navigation={navigation}/>
                        <BigMoment navigation={navigation}/>
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
        </View>:<LoadingScreen/>
        }
        </>
    )
}

export default Trending

const styles = StyleSheet.create({
    window:{
        flex:1,
        padding:10
    },
})
