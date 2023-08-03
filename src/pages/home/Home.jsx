
import "./home.scss"
// import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'
import Profile from '../profile/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './../register/Register';

const Home = () => {
  return (
    <div className='homeBar'>
      <Profile />
      <BrowserRouter>
        <Routes>
          <Route path="/register/rajan" element={<Register/>} />
        </Routes>
      </BrowserRouter>
      {/* <Stories/> */}
      <Posts />
    </div>
  )
}

export default Home
