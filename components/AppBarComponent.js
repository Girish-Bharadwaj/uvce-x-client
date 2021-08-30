import React from 'react'
import { ImageBackground, Text } from 'react-native'
import { Appbar } from 'react-native-paper'

const AppBarComponent = () => {
    return (
            <Appbar style={{backgroundColor:'#000000'}}>
                <Appbar.Content title={<Text style={{color:'#ffffff',fontWeight:'bold',fontSize:25}}>UVCE<Text style={{color:"#6C403B",fontWeight:'bold'}}>x</Text></Text>}/>
            </Appbar>
    )
}

export default AppBarComponent
