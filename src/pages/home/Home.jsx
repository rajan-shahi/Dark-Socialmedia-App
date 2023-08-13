
import "./home.scss"
import Posts from '../../components/posts/Posts'
import Profile from '../profile/Profile'

const Home = () => {
  return (
    <div className='homeBar'>
      <Profile />
      <Posts />
    </div>
  )
}

export default Home
