import React, { useState } from 'react'
import "./post.scss"
import { FcLike } from "react-icons/fc";
import { MdOutlineMoreVert } from "react-icons/md";
import { BiCommentDots } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import Comments from '../comments/Comments';


const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false)

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post. profilePic} alt="" />
                        <div className="details">
                            <span className='name'>{post.name}</span>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <MdOutlineMoreVert />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                     <FcLike/>
                     25 likeds
                    </div>

                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                     <BiCommentDots/>
                     16 comments
                    </div>

                    <div className="item">
                    <BsShareFill/>
                     23 shares
                    </div>
                </div>
                { commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post
