import React,{useEffect,useState} from 'react';
import { ScrollView,StyleSheet } from 'react-native';
import PostComponent from '../components/PostComponent';
import { useDispatch } from 'react-redux';
import { getHomeFeed } from '../actions/feed.js'
import { useSelector } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import { Text } from 'react-native-elements';

const HomePage = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const {isLoading}=useSelector((state)=>state.feeds);
    useEffect(() => {
        dispatch(getHomeFeed(page));
    }, [])

    const {homePosts} = useSelector(state => state.feeds);

    return (
        <>
        {!isLoading?<ScrollView>
            {homePosts?.map((post) => (<PostComponent key = {post._id} post = {post}/>))}
            </ScrollView>:<LoadingScreen/>
        }   
        </>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    
})
