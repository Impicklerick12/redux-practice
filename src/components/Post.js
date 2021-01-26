import React from 'react'

const Post = ({post}) => {
    const {
        userId,
        id,
        title,
        body
    } = post

    return (
        <div className="post">
            <p>{id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}

export default Post
