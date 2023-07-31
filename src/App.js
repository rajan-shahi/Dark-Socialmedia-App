import React from 'react'
// import Login from './pages/login/Login'
import NavBar from './components/navBar/NavBar'
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
  {/* <Login/> */}
  <NavBar/>
  <div style={{display:"flex"}}>
  <LeftBar/>
  <Home/>
  <RightBar/>
  </div>
    </div>
  )
}

export default App
