import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"
import { UserContext } from './UserContext';
import serverLink from '../data/defaults';

const {serverLink:prefix} = serverLink;

function Navbar(){
  const {userInfo,setUserInfo} = useContext(UserContext);

  useEffect(()=>{
    fetch(prefix+"/profile",{
      credentials:"include",
    }).then(response=>{
      response.json().then(profileInfo=>{
        setUserInfo(profileInfo)
      })
    }
    )
  },[]);

function logout(){
  fetch(prefix+ "/logout",{
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
            <Link className="link_container" to="/add">Add News</Link>
            <a className="link_container" onClick={logout}>Logout</a>
          </div>
      )}
      {!username &&(
        <div>
          <Link className="link_container" to="/login">LOGIN</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
