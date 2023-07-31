import React from "react";
import "./leftBar.scss"

const LeftBar = () => {
  return (
    <div className="LeftBar">
      <div className="container">
        <div className="menu">

          <div className="user">
            <img src="./images/party.png" alt="" />
            <span>Rajan Shahi.</span>
          </div>

          <div className="item">
            <img src="./images/friend.jpeg" alt="" />
            <span>Friends</span>
          </div>

          
          <div className="item">
            <img src="./images/group.jpeg" alt="" />
            <span>Groups</span>
          </div>

          
          <div className="item">
            <img src="./images/market.png" alt="" />
            <span>MarketPalce</span>
          </div>

          <div className="item">
            <img src="./images/youtube.jpeg" alt="" />
            <span>Watch</span>
          </div>

  
          <div className="item">
            <img src="./images/watch.jpeg" alt="" />
            <span>Memories</span>
          </div>

          <hr/>
          <div className="menu">
            <span>Your ShortCuts</span>
            
          <div className="item">
            <img src="./images/event.jpg" alt="" />
            <span>Events</span>
          </div>
          
          <div className="item">
            <img src="./images/gaming.webp" alt="" />
            <span>Gaming</span>
          </div>
          
          <div className="item">
            <img src="./images/gallery.png" alt="" />
            <span>Gallery</span>
          </div>

          <div className="item">
            <img src="./images/video.png" alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src="./images/message.png" alt="" />
            <span>Memories</span>
          </div>

          <hr />
          <div className="menu">
            <span>Others</span>
            
          <div className="item">
            <img src="./images/fund.jpeg" alt="" />
            <span>Fundraiser</span>
          </div>

          <div className="item">
            <img src="./images/tutorial.jpeg" alt="" />
            <span>Turorials</span>
          </div>

          <div className="item">
            <img src="./images/Course.avif" alt="" />
            <span>Courses</span>
          </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
