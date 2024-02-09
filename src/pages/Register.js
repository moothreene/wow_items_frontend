import React, { useEffect, useState } from 'react';
import './Auth.css';
import { json } from 'react-router-dom';
function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(ev){
        ev.preventDefault();
        const response = await fetch("http://localhost:5000/register",{
            method: "POST",
            body: JSON.stringify({username,password}),
            headers: {'Content-type':'application/json'}
        })
        if (response.status === 200){
            alert("Registration Successful");
            
        }else{
            alert("Registration Failed! Try again");
        }
    }

  return (
    <form className="register" action="" onSubmit={handleRegister}>
        <input 
            type="text" 
            placeholder="username"
            onChange={ev =>setUsername(ev.target.value)}>
        </input>

        <input 
            type="password" 
            placeholder="password"
            onChange={ev =>setPassword(ev.target.value)}>
        </input>
        <button>Register</button>
    </form>
  )
}

export default Register
