import React,{useState} from 'react'
import { StyleSheet, View,ScrollView } from 'react-native'
import cn from 'react-native-classnames'
import Trending from '../components/Trending'
import EventScreen from '../components/EventScreen'
import WorkshopScreen from '../components/WorkshopScreen'
import Icon from 'react-native-vector-icons/Feather'
import {Text} from 'react-native-elements'
import ClubsScreen from './ClubsScreen'
import { tokenReader } from '../utils/utils'

const ExploreScreen = ({navigation}) => {
    const [text, setText] = useState('trending');


    return (
        
        <View style={styles.container}>
            <View style={styles.tabBar}>
                <ScrollView horizontal={true} style={{height:1}}>
                    <View style={styles.tabLayout}>
                        <Text 
                            style={cn(styles, 'tab', {selectedtab:text==='trending'})} 
                            onPress={()=>{setText('trending')}}>
                            Trending
                        </Text>
                        <Text 
                            style={cn(styles, 'tab', {selectedtab:text==='events'})} 
                            onPress={()=>{setText('events')}}>
                                Events
                        </Text>
                        <Text 
                            style={cn(styles, 'tab', {selectedtab:text==='workshops'})} 
                            onPress={()=>{setText('workshops')}}>
                                Workshops
                        </Text>
                        <Text 
                            style={cn(styles, 'tab', {selectedtab:text==='clubs'})} 
                            onPress={()=>{setText('clubs')}}>
                                Clubs
                        </Text>
                    </View>
                </ScrollView>
            </View>
            {text==="trending"?(<Trending navigation={navigation}/>):(<></>)}
            {text==="events"?(<EventScreen navigation={navigation}/>):(<></>)}
            {text==="workshops"?(<WorkshopScreen navigation={navigation}/>):(<></>)}
            {text==="clubs"?(<ClubsScreen/>):(<></>)}


        </View>
            
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    
    container:{
        
        flex:1,
        backgroundColor:'#000000',
    },
    tabBar:{
        height:40,
        marginTop:15,
        alignItems:'center',
        margin:5
    },
    tabLayout:{
        backgroundColor:'#6C403B',
        borderRadius:11,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    tab:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        height:'100%',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:16,
        color:'#ffffff'
    },
    selectedtab:{
        color:'#ffffff',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#CE5252',
        borderRadius:11,
        height:'100%',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:16,
    },
    posts:{
        flex:1,
        backgroundColor:'red',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    errorText:{
        flex:1,
        fontSize:60,
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'center'
    },
    fab: {
        zIndex:1,
        borderRadius:140,
      },
})
