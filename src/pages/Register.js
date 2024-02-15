import React, { useEffect, useState } from 'react';
import './Auth.css';
import serverLink from '../data/defaults';
import { Navigate } from 'react-router-dom';
const {serverLink:prefix} = serverLink;

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function handleRegister(ev){
        ev.preventDefault();
        const response = await fetch(`${prefix}/register`,{
            method: "POST",
            body: JSON.stringify({username,password}),
            headers: {'Content-type':'application/json'}
        })
        if (response.status === 200){
            alert("Registration Successful");
            setRedirect(true);
            
        }else{
            alert("Registration Failed! Try again");
        }
    }

    if(redirect) return(
        <Navigate to={"/"}/>
    )

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
