import React from "react";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>

          <div className="user">
            <div className="userInfo">
              <img src="./images/party.png" alt="" />
              <span>Rajan</span>
            </div>
            <div className="bottons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="./images/party.png" alt="" />
              <span>Rajan</span>
            </div>
            <div className="bottons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
