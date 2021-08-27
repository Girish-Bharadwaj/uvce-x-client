import React,{useState} from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { StyleSheet,View} from 'react-native'
import {Appbar } from 'react-native-paper'
import { FAB, Text,Button } from 'react-native-elements'
import cn from 'react-native-classnames'
import Trending from './Trending'
import Icon from 'react-native-vector-icons/Feather'
import CreatePostForm from './CreatePostForm'
import AppBarComponent from '../components/AppBarComponent'

const HomeScreen = ({navigation}) => {
    const [text, setText] = useState('trending');
    function check(){
        if(text=='all'){
            return true
        }
        else{
            return false
        }
    }
    return (
            <View style={styles.screen}>
                <StatusBar style="dark"></StatusBar>
                    <AppBarComponent/>
                    <View style={styles.container}>
                        <FAB size="large" placement="right" icon={()=><Icon name="edit-2" size={23}/>} style={styles.fab} onPress={()=>console.log('pressed')}/>
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
                                    <Text 
                                        style={cn(styles, 'tab', {selectedtab:text==='others'})} 
                                        onPress={()=>{setText('others')}}>
                                        Others
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                        {text==="trending"?(<Trending/>):(<Text>404</Text>)}
                        
                    </View>
            </View> 
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#000000'
    },
    container:{
        
        flex:1,
        backgroundColor:'#000000',
    },
    tabBar:{
        height:40,
        marginTop:15
    },
    tabLayout:{
        backgroundColor:'#6C403B',
        borderRadius:11,
        flexDirection:'row',
        marginLeft:10,
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
