import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import Markdown from 'react-native-easy-markdown'
import AppBarComponent from '../components/AppBarComponent'
import {StyledContainer} from '../components/styles'
import {Text} from 'react-native-elements'
import {LinearGradient}  from 'expo-linear-gradient'
const MomentFullScreen = () => {
    return (
        <>
        <AppBarComponent/>
            <StyledContainer>
            <ScrollView>
                <ImageBackground style={styles.coverPhoto} source={{uri:"https://images.unsplash.com/photo-1629985858244-a033a55b66e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}}>
                <LinearGradient colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.7)']} style={styles.blackMask} start={{ y: 0}} end={{ y: 1 }} locations={[0.49,1]} > 
                    <View style={styles.author}>
                            <Text style={styles.authorName}>H N Ramesh</Text>
                            <View style={{width:8,height:8,backgroundColor:'#C4C4C4',borderRadius:50}}></View>
                            <Text style={styles.time}>5min</Text>
                    </View>
                    <Text style={styles.title}>Uvce to remain close.</Text>
                </LinearGradient>
                </ImageBackground>
                <View style={{padding:10,backgroundColor:'#1f1f1f'}}>
                <Markdown markdownStyles={{text:{
                    color:'white'
                }}}>
                    {
                        '# Why is markdown cool?\n\n' +

                        '* because it lets us do simple formatting **easily** \n' +
                        '* _without_ the need for complex CMS data structures \n' +
                        '* and you can outsource ~~your~~ work to the content creators! \n\n' +

                        '> This is a blockquote \n\n' +

                        '![We can add images!](http://placehold.it/300x300) \n' +
                        '[Or link to places](http://foobar.com) \n'
                    }
                </Markdown>
                </View>
            </ScrollView>
            </StyledContainer>
        </>
    )
}

export default MomentFullScreen

const styles = StyleSheet.create({
  coverPhoto:{
      width:'100%',
      height:250,
      justifyContent:'flex-end',
      alignItems:'flex-start',
  },
  title:{
      fontSize:25,
      fontWeight:'bold'
  },
  blackMask:{
    height:'100%',
    width:'100%',
    justifyContent:'flex-end',
    padding:5
},
author:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
},
authorName:{
    color:'#C4C4C4',
    marginRight:7,
    fontSize:14,
    fontWeight:'bold',
},
time:{
    color:'#C4C4C4',
    fontSize:14,
    marginLeft:7,
    fontWeight:'bold'
},
})
