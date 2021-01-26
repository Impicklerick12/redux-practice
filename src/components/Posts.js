import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/thunk/requests/posts'
import Post from './Post'

const Posts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <div class="posts">
                { posts.map((post) => {
                    return <Post key={post.id} post={post} />
                })}
            </div>
        </div>
    )
}

export default Posts
