import React from 'react'
import "./comments.scss"


const Comments = () => {

    const comments = [
        {
            id: 1,
            name: "Saroj Rokaya",
            profilePic: "./images/party.png",
            desc: "WOW You Are hxm Man",
            userId: 1
        },

        {
            id: 2,
            name: "Riya Sapkota",
            profilePic: "./images/party.png",
            desc: "Good You are right",
            userId: 1
        },

        {
            id: 3,
            name: "Jun Parsad Rokaya",
            profilePic: "./images/party.png",
            desc: "Surely You are right",
            userId: 1
        },
    ];
  return (
    <div className='comments'>

        <div className="write">
            <img src="./images/friend.jpeg" alt="" />
            <input type="text" placeholder='write a comment' />
            <button>send</button>
        </div>
        
        {
        comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))
    }
    </div>
  )
}

export default Comments
