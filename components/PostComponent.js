import React from 'react';
import { Image, StyleSheet,View } from 'react-native';
import { Text,Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements/dist/buttons/Button';
import moment from 'moment';

const PostComponent = ({post}) => {

    console.log(post);
    return (
        <View style={styles.container}>
            <Avatar rounded size={62} containerStyle={styles.avatar} 
                source={{uri: post?.authorProfilePic}}/>

            <View style={styles.author}>
                <Text style={styles.authorName}>{post?.author}</Text>
                <View style={{width:8,height:8,backgroundColor:'#C4C4C4',borderRadius:50}}></View>
                <Text style={styles.time}>{moment(post.createdAt).fromNow()}</Text>
            </View>

            <View style={styles.post}>

                <View style={styles.content}>
                    <Text style={{fontSize:16}}>
                        {post?.postText}
                    </Text>
                </View>
                {post.postImage !== '' && 
                    <Image source={{uri: post?.postImage }} style={styles.image} imageStyle={styles.background}></Image>
                }

                <View style={styles.reaction}>
                    <Button buttonStyle={{borderRadius:50}} icon={<Icon name="share-2" size={21} style={styles.reactionIcons} />}/>
                    <Button buttonStyle={{borderRadius:50}} icon={<Icon name="message-square" size={21} style={styles.reactionIcons} />}/>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Button buttonStyle={{borderRadius:50}} icon={<Icon name="heart" size={21} style={styles.reactionIcons} />}/>
                        <Text>{post?.likeCount}</Text>
                    </View>
                    <Button buttonStyle={{borderRadius:50}} icon={<Icon name="more-vertical" size={21} style={styles.reactionIcons} />}/>
                </View>

            </View>
            <View style={styles.divider}></View>
        </View>
    )
}

export default PostComponent;

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:20,
        marginTop:0,
    },
    avatar:{
        position:'absolute',
        zIndex:1,
        left:-15,
        top:1
    }
    ,
    post:{
        backgroundColor:'#313131',
        borderRadius:25,
        
    },
    content:{
        padding:7,
        paddingTop:20,
        paddingLeft:30
    },
    image:{
        height:180,
        resizeMode:'cover',
        marginTop:10,
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
        borderRadius:10
    },
    author:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:4
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
    reaction:{
        flexDirection:'row',
        margin:10,
        marginTop:15,
        marginBottom:15,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    reactionIcons:{
        color:'white'
    },
    divider:{
        height:4.3,
        backgroundColor:'#313131',
        marginTop:20
    },
})
