import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { login } from '../features/userSlice';
import './Login.css'


const Login = () => {


    const [name,setName]=useState("");
    
    const[email,setEmail]=useState("");
    
    const dispatch = useDispatch();
    
    const handleSubmit=(e)=>{
    
        e.preventDefault();

        dispatch(login({
                name:name,
                email:email,
                loggedIn:true,
        })
        );

        setEmail("");
        setName("");
    };
    return (
        <div className="login">
            <form className="login_form" onSubmit={(e)=>handleSubmit(e)}>
                <input type="name" 
                placeholder="UserName"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input type="email" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

            <button type="submit" className="btn">Submit</button>
            </form>
            
        </div>
    )
}

export default Login
