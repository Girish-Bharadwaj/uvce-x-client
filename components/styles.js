import styled from 'styled-components'
import constants from 'expo-constants'

const statusBarHeight=constants.statusBarHeight;

export const colors={
    primary:'#CE5252',
    secondary:'#52CECE',
    primaryLight:'#FF837E',
    primaryDark :'#981F29',
    secondaryLight:'#FF837E',
    secondaryDark :'#FF837E'
}

export const StyledContainer = styled.View`
    flex:1;
    padding-top : ${statusBarHeight}px;
    background-color:#000000;
`