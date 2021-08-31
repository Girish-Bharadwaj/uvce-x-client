import React,{useEffect,useState} from 'react';
import { ScrollView,StyleSheet } from 'react-native';
import PostComponent from '../components/PostComponent';
import { useDispatch } from 'react-redux';
import { getHomeFeed } from '../actions/feed.js'
import { useSelector } from 'react-redux';

const HomePage = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getHomeFeed(page));
    }, [])

    // const {homePosts} = useSelector(state => state.feed);

    return (
        <ScrollView>
            {/* {homePosts?.map((post) => (
                    <PostComponent key = {post._id} post = {post}/>
                ))}   */}
        </ScrollView>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    
})
