import React, { useState } from "react";
import { InputField, SubmitButton } from "../components/Form/Form";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [usernames,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const handelUserName=(userName)=>{
      setUserName(userName)
    }
    const handelUserPass=(pass)=>{
        setPassword(pass)
    }
    const handelLogin=(e)=>{
            e.preventDefault()
            let username=localStorage.getItem('user')
            let pass=localStorage.getItem('pass')
            if(username==usernames&&pass==password){
                navigate('/users')
                localStorage.setItem('login',true)
            }
            else{
                alert("Wrong details")
                localStorage.setItem('login',false)
            }
    }
  return (
    <div className="max-w-[400px] w-full mx-auto">
      <h1 className="text-[50px] font-bold">Login</h1>
      <p className="mb-6">Login to access the User page</p>
      <form
        action=""
        onSubmit={handelLogin}
      >
        <InputField label="User Name or Email" type="text" userInputValue={handelUserName} className="mb-5"/>
        <InputField label="Password" type="password" userInputValue={handelUserPass} className="mb-5"/>
        <SubmitButton value="Login"/>
      </form>
    </div>
  );
}
