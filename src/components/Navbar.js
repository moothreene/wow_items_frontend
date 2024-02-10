import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"
import { UserContext } from './UserContext';

function Navbar(){
  const {userInfo,setUserInfo} = useContext(UserContext);

  useEffect(()=>{
    fetch("http://localhost:5000/profile",{
      credentials:"include",
    }).then(response=>{
      response.json().then(profileInfo=>{
        setUserInfo(profileInfo)
      })
    }
    )
  },[]);

function logout(){
  fetch("http://localhost:5000/logout",{
    credentials:"include",
    method:"POST",
  });
  setUserInfo(null);  
}

const username = userInfo?.username;

  return (
    <div className="navbar">
      <div className="links">
        <Link className="link_container" to="/">HOME</Link>
        <Link className="link_container" to="/bis">BIS</Link> 
      </div>
          {username &&(<div className="auth_info">
            <div className='username'>{username}</div>
            <a onClick={logout}>Logout</a>
          </div>
      )}
      {!username &&(
        <div>
          <Link to="/login">LOGIN</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
