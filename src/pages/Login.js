import React from 'react';
import './Auth.css';
function Login() {
  return (
    <form className="login" action="">
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button>Login</button>
    </form>
  )
}

export default Login
