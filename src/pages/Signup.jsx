import React, { useState } from "react";
import { InputField, SubmitButton } from "../components/Form/Form";

export default function Signup() {
    const [usernames,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [status,setStatus]=useState(false)
    const handelUserName=(userName)=>{
      setUserName(userName)
    }
    const handelUserPass=(pass)=>{
        setPassword(pass)
    }
    const handelSignUp=(e)=>{
            e.preventDefault()
            localStorage.setItem('user',usernames)
            localStorage.setItem('pass',password)
            setStatus(true)
    }
  return (
    <div className="max-w-[400px] w-full mx-auto">
        {
            status&& <h3 className="text-green-700 font-bold text-xl">Signup Successfully</h3>
        }
       
      <h1 className="text-[50px] font-bold">Sign Up</h1>
      <p className="mb-6">Login to access the User page</p>
      <form
        action=""
        onSubmit={handelSignUp}
      >
        <InputField label="User Name or Email" type="text" userInputValue={handelUserName} className="mb-5"/>
        <InputField label="Password" type="password" userInputValue={handelUserPass} className="mb-5"/>
        <SubmitButton value="Signup"/>
      </form>
    </div>
  );
}
