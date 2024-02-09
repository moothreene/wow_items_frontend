import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <Link className="link_container" to="/">HOME</Link>
      <Link className="link_container" to="/bis">BIS</Link> 
    </div>
  )
}

export default Navbar
