import React from 'react'
import "./register.scss"

const Register = () => {
  return (
    <div className="login">
      <div className="container">

      <div className="right">
          <h2>
            Register
          </h2>
          <input type='text' placeholder='username....'></input>
          <input type='email' placeholder='email....'></input>
          <input type='password' placeholder='Password....'></input>
        <button>Register</button>
        </div>
        <div className="left">
          <h1>Rajan.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique iure beatae deleniti nostrum laborum? Sequi obcaecati ?</p>
          <span>Do You Have an Account ?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register
