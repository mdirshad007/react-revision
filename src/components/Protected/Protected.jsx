import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected({Component}) {
    const navigate=useNavigate()
    const login = localStorage.getItem("login") === "true";
    useEffect(()=>{
        if(!login){
            navigate("/login")
        }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}
