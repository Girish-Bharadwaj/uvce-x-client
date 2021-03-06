import React,{useState,useEffect} from 'react'
import { StatusBar } from 'react-native'
import { StyleSheet,View} from 'react-native'
import AppBarComponent from '../components/AppBarComponent'
import ExploreScreen from './ExploreScreen'
import HomePage from './HomePage'
import Icon from 'react-native-vector-icons/Feather'
import cn from 'react-native-classnames'
import ClubsScreen from './ClubsScreen'
import ProfileScreen from './ProfileScreen'
import { tokenReader } from '../utils/utils'
import CreateForm from './CreateForm'
import { FAB } from 'react-native-elements'

const HomeScreen = ({navigation}) => {

    const [tab, setTab] = useState("home");
    const [user,setUser] =useState();
    console.log(tab)
    useEffect(() => {
        async function readToken() {
          const user = await tokenReader();
          setUser(user);
        }
        readToken();
      }, [tokenReader])
    return (
        <View style={styles.screen}>
            <StatusBar style="dark"></StatusBar>
            <AppBarComponent/>
            <View style={{marginBottom:59,flex:1}}>
                {tab==="home" && <HomePage/>}
                {tab==="explore" && <ExploreScreen navigation={navigation}/>}
                {tab==="clubs" && <ClubsScreen/>}
                {tab==="profile" && <ProfileScreen navigation={navigation}/>}
            </View>
            <View style={styles.bottomNavigation}>
                <Icon name="home"  style={cn(styles, 'icons', {iconSelected:tab==='home'})} size={30}  onPress={()=>{setTab("home")}}/>
                <Icon name="search"  style={cn(styles, 'icons', {iconSelected:tab==='explore'})} size={30}  onPress={()=>{setTab("explore")}}/>
                <Icon name="calendar"  style={cn(styles, 'icons', {iconSelected:tab==='calendar'})} size={30}  onPress={()=>{setTab("calendar")}}/>
                <Icon name="bell"  style={cn(styles, 'icons', {iconSelected:tab==='notifications'})} size={30}  onPress={()=>{setTab("notifications")}}/>
                <Icon name="user"  style={cn(styles, 'icons', {iconSelected:tab==='profile'})} size={30}  onPress={()=>{setTab("profile")}}/>
            </View>

            {user?.rights?.verifiedLevel >=3 &&
            <FAB size="large" color='#ce5252' placement="right" icon={()=><Icon name="edit-2" size={23}/>} style={styles.fab} onPress={()=>{navigation.navigate('CreateForm')}}/>
            }

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#000000',
    },
    bottomNavigation:{
        height:70,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#2C1A18',
        borderRadius:27,
        position:'absolute',
        bottom:0,
        left:0,
        
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    icons:{
        color:"#ffffff"
    },
    iconSelected:{
        color:"#CE5252",
        fontSize:35
    },
    fab:{
        marginBottom:80,
    }
})
