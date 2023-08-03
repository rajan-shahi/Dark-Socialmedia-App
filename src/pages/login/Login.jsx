import React from 'react'
import "./login.scss"


const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <h1>Hello Word.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique iure beatae deleniti nostrum laborum? Sequi obcaecati ?</p>
          <span>Don,t You Have an Account ?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h2>
            Login
          </h2>
          <input type='text' placeholder='username....'></input>
          <input type='password' placeholder='Password....'></input>
          <button>login</button>
        </div>

      </div>
    </div>
  )
}

export default Login
