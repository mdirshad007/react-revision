import React, { useState } from 'react'

export default function ShowName() {
    let [name,setName]=useState("Irshad");
    let dispalyName=()=>{
        if(name!="Furqan"){
       setName("Furqan")
    }
    else{
        setName("Irshad")
    }
    }
  return (
    <div>
        My name is <b className='text-blue-600'>{name}</b><br/>
        <button onClick={dispalyName} className='bg-black text-white px-5 py-2 mt-6'>Change Name</button>
    </div>
  )
}
