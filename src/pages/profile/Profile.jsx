import React from 'react'
import "./profile.scss"
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";


const Profile = () => {
  return (
   <div className="profile">
    <div className="images">
      <img src="./images/raj.jpg" alt="" className="cover" />
      <img src="./images/bista.jpg" alt="" className="profilePic" />
    </div>
    <div className="profileContainer">
      <div className="userInfo">
        <div className="left">
          <a href="http://facebook.com">
            <BsFacebook fontSize={"large"} />
          </a>

          <a href="http://www.linkedin.com">
            <AiFillLinkedin fontSize={"large"} />
          </a>

          <a href="http://www.instagram.com">
            <FiInstagram fontSize={"large"} />
          </a>

          <a href="http://www.twitter.com">
            <AiFillTwitterCircle fontSize={"large"} />
          </a>
        </div>
        <div className="center">
          <span>Rajan Shahi</span>
          <div className="info">
            <div className="item">
              <MdPlace/>
              <span>USA</span>
            </div>

            <div className="item">
            <GrLanguage/>
              <span>Rajan.Shahi</span>
            </div>
          </div>
          <button>follow</button>
        </div>
        <div className="right">
          <MdEmail/>
          <FiMoreVertical/>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Profile
