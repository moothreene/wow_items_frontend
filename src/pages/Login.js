import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Auth.css';
import { UserContext } from '../components/UserContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(e){
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login",{
      method: "POST",
      body: JSON.stringify({username,password}),
      headers: {'Content-type':'application/json'},
      credentials:"include",
    });
    if(response.ok){
      response.json().then(userInfo=>{
        setUserInfo(userInfo)
        setRedirect(true);
      })
    }else{
      alert("Wrong Credentials")
    }
  }
  if(redirect){
    return <Navigate to={"/"}/>
  }
  return (
    <form className="login" onSubmit={login}>
        <input type="text" 
          placeholder="username" 
          value={username} 
          onChange={e=>setUsername(e.target.value)}>
        </input>

        <input type="password"
          placeholder="password" 
          value={password} 
          onChange={e=>setPassword(e.target.value)}>
        </input>

        <button>Login</button>
    </form>
  )
}

export default Login
