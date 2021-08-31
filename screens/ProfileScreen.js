import React,{useEffect,useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet, View , Dimensions, Alert } from 'react-native'
import { Text,Avatar} from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'
import cn from 'react-native-classnames'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements/dist/buttons/Button'
import * as Google from 'expo-google-app-auth';
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import { tokenReader } from '../utils/utils'

const user=tokenReader();

const screenWidth = Dimensions.get('window').width;


const ProfileScreen = ({navigation}) => {
    const [user,setUser] =useState();
    useEffect(() => {
        async function readToken() {
          const user = await tokenReader();
          setUser(user);
        }
        readToken();
      }, [tokenReader])
    const dispatch=useDispatch();
    const logoutFunction=()=>{
        dispatch(logout)
    }
    let gold,bronze,silver;   //dummy variables to give appropiate color for badges in glory section
    gold=true;
    bronze=false;
    silver=false;
    return (
        <View style={{margin:10}}>
            <ScrollView
                horizontal={true}
                style={{marginBottom:20,}}
            >
                <LinearGradient colors={[ '#3E0801', 'rgba(121, 44, 37, 0.889102)', '#230906']} start={{x:0,y:1.8}} end={{x:1.9,y:0}} locations={[0.0291,0.3828,1.1018]} style={{borderRadius:20,marginRight:10}}>
                    <View style={styles.profileCard}>
                        <Avatar rounded size={75} containerStyle={styles.avatar} source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png'}}/>
                        <Text style={styles.profileType}>STUDENT</Text>
                        <View style={styles.details}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Maxwell</Text>
                                <Icon name="verified" size={25} color="#ce5252"/>
                            </View>
                            <Text style={{color:'#c4c4c4',fontWeight:'bold',marginBottom:24}}>gmaxi_32</Text>
                            <View style={styles.divider}></View>
                            <Text style={styles.timePeriod}>2020-2024</Text>
                            <View style={styles.divider}></View>
                            <View style={styles.badges}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>IEEE Repcom member</Text>
                                </View>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>CR</Text>
                                </View>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>E-cell member</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                <LinearGradient colors={[ '#3E0801', 'rgba(121, 44, 37, 0.889102)', '#230906']} start={{x:0,y:1.8}} end={{x:1.9,y:0}} locations={[0.0291,0.3828,1.1018]} style={{borderRadius:20}}>
                    <View style={styles.about}>
                        <Text style={{color:"#c4c4c4",fontWeight:'bold',fontSize:25}}>About</Text>
                        <Text style={{fontSize:18,marginTop:5,fontWeight:'bold'}}>I am a simple man. E-sala cup namde.Peace</Text>
                        <Text style={{fontSize:18,marginTop:5,fontWeight:'bold'}}>Instagram id : gmaxi_32</Text>
                    </View>
                </LinearGradient>
            </ScrollView>
            <LinearGradient colors={[ '#3E0801', 'rgba(121, 44, 37, 0.889102)', '#230906']} start={{x:0,y:1.8}} end={{x:1.9,y:0}} locations={[0.0291,0.3828,1.1018]} style={{borderRadius:20,marginRight:10,marginBottom:20}}>
                <View style={styles.ieeeScoreCard}> 
                    <Text style={styles.ieeeScoreHeading}>Glory</Text>
                    <Text style={styles.ieeeScoreName}>IEEE Score: 
                    <Text style={styles.ieeeScoreCount}>10566</Text></Text>
                    <View style={styles.gloryBadges}>
                        <View style={cn(styles,{gloryBadgeGold:gold},{gloryBadgeSilver:silver},{gloryBadgeBronze:bronze})}>
                            <Text style={cn(styles,{gloryBadgeTextGold:gold},{gloryBadgeTextSilver:silver},{gloryBadgeTextBronze:bronze})}>NCode Gold <Text style={styles.gloryBadgeCount}>1</Text></Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            {user?.rights?.verifiedLevel >=3 &&
                <Button buttonStyle={styles.clubSignIn} title="CreateClub" onPress={()=>{navigation.navigate('CreateClub')}}/> 
            } 
            <Button buttonStyle={styles.clubSignIn} title="Logout" onPress={logoutFunction}/> 
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    profileCard:{
        margin:10,
        borderRadius:15,
        padding:1,
        flexDirection:'row'
    },
    avatar:{
        marginTop:26,
    },
    profileType:{
        position:'absolute',
        right:0,
        margin:10,
        fontSize:15,
        fontWeight:'bold',
        color:'#939191'
    },
    details:{
        marginTop:26,
        marginLeft:10,
        
    },
    divider:{
        height:2,
        backgroundColor:'#000000',
        width:200
    },
    timePeriod:{
        margin:7,
        color:"#C4C4C4",
        fontWeight:'bold'
    },
    badges:
    {
       width:280,
       flexDirection:'row',
       flexWrap:"wrap",
       marginTop:10
    },
    badge:{
        backgroundColor:'#2C1A18',
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center',
        margin:5,
        display:'flex',
        borderRadius:20,
    },
    badgeText:{
        color:"#C4C4C4",
        fontWeight:'bold'
    },
    about:{
        width:screenWidth-35,
        marginRight:10,
        padding:15,
        
    },
    ieeeScoreCard:{
        padding:15,
        
    },
    ieeeScoreHeading:{
        color:"#c4c4c4",
        fontWeight:'bold',
        fontSize:23
    },
    ieeeScoreName:{
        color:"#939191",
        fontWeight:'bold',
        fontSize:15,
        position:'absolute',
        right:0,
        margin:10
    },
    ieeeScoreCount:{
        color:"#c4c4c4",
        fontWeight:'bold',
        fontSize:23,
    },
    gloryBadges:
    {
       flexDirection:'row',
       flexWrap:"wrap",
       marginTop:10,
    },
    gloryBadgeGold:{
        backgroundColor:'#D4AF37',
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center',
        margin:5,
        display:'flex',
        borderRadius:20,
    },
    gloryBadgeSilver:{
        backgroundColor:'#AAA9AD',
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center',
        margin:5,
        display:'flex',
        borderRadius:20,
    },
    gloryBadgeBronze:{
        backgroundColor:'#CD7F32',
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center',
        margin:5,
        display:'flex',
        borderRadius:20,
    },
    gloryBadgeTextGold:{
        color:"#56440B",
        fontWeight:'bold'
    },
    gloryBadgeTextSilver:{
        color:"#4D4C4C",
        fontWeight:'bold'
    },
    gloryBadgeTextBronze:{
        color:"#ffffff",
        fontWeight:'bold'
    },
    gloryBadgeCount:{
        color:'#2C1A18',
        fontWeight:'bold'
    },
    clubSignIn:{
        backgroundColor:"#CE5252",
        width:150,
        // marginTop:20,
        marginLeft:5,
        borderRadius:10,
        marginTop:10
    }
})
