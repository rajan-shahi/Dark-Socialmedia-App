import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import "./style.scss";
import Login from "./pages/login/Login";

const App = () => {
  const [open, setOpen] = useState(false);
  const openClose = () => {
    setOpen(!open);
  };
  return (
    <div className="theme-dark">
      {open && <Login />}
      <NavBar openClose={openClose} />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <Home />
        <RightBar />
      </div>
    </div>
  );
};

export default App;
