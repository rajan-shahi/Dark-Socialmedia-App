import React from 'react'
import "./posts.scss"
import Post from '../post/Post';

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "rajan shahi",
            profilePic: "./images/party.png",
            desc: "<. Trust Me ,I Never Comeback In your life If you are happy without me.../>",
            img: "/images/rajan.jpg"
        },

        {
            id: 2,
            name: "Loki",
            profilePic: "./images/party.png",
            desc: "<..You can not change your future but you can change your habits and surely your habits will change your future../>",
            img: "/images/loki.jpg"
        },

        {
            id: 3,
            name: "Gita",
            profilePic: "./images/party.png",
            desc: "< Life is so beautiful, one day,one hour,one minute will never come again ...! So just forget all problems And be Happy...!! />",
            img: "/images/bista.jpg"
        },
    ];
  return (
    <div className="posts">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
       
  )
}

export default Posts
