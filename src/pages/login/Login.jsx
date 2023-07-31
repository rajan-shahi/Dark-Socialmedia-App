import React from "react";
import "./login.scss"

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello Word.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              quis sint amet nulla provident soluta voluptates iure vitae nam!
              Aut, ducimus sit eaque voluptatibus nihil amet mollitia sunt
              corporis eos.
            </p>
            <span>Don't You Have an Account ?</span>
            <button>Register</button>
          </div>

          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username"></input>
              <input type="password" placeholder="Password"></input>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
