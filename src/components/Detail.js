import React, { useState } from 'react'
import './Detail.css'

import {  useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

import Display from './Display';

const Detail = () => {

    const user = useSelector(selectUser);
    const [key,setKey]=useState("");
    const KeyData=async(e)=>{
        e.preventDefault();
            const result=await fetch(
                `https://api.github.com/users/defunkt`
                )
                const resJson =await result.json();
                console.log(resJson);
               setKey({data:resJson.login,nodeid:resJson.node_id,name:resJson.type,blog:resJson.blog});
        
    }


    return (
        <>
        <div className="detail">
            <h1>WELCOME <span className="user_name">{user.name}</span></h1>
            <form className="KeyValue">
                <button className="getData" onClick={(e)=>KeyData(e)}>GET DATA</button>
            </form>
        </div>
        <div> 
        <Display data={key.data} sys={key.nodeid} name={key.name} blog={key.blog}/>
        </div>
        </>

    )
}

export default Detail
