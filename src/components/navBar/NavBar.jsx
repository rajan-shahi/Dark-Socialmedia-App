import React from "react";
import "./navBar.scss";
import { BiHome } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPersonDashFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

export default function NavBar({openClose}) {
  return (
    <div className="navbar">
      <div className="left">
        <span>Rajan Social.</span>
        <BiHome />
        <BsFillMoonFill />
        <AiFillAppstore />
        <div className="search">
          <BiSearch />
          <input type="text" placeholder="Search...."></input>
        </div>
      </div>

      <div className="right">
        <BsPersonDashFill />
        <MdEmail />
        <IoMdNotifications />
        <div className="user">
        <img src="./images/party.png" alt="" />
        <span>Rajan Shahi.</span>
        </div>
        <button onClick={openClose}>login</button>
      </div>
    </div>
  );
}
