import React from 'react'
import "./home.scss"
import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'
import Profile from '../profile/Profile'

const Home = () => {
  return (
    <div className='homeBar'>
      <Profile/>
      {/* <Stories/> */}
      <Posts/>
    </div>
  )
}

export default Home
