import React, { useState } from 'react'

export default function StateWithObject() {
    const [user,setUser]=useState({
        name:"Irshad",
        age:30
      })
  return (
    <div>
        <h1 className='text-[40px] font-bold mb-5'>State Change with Object</h1>
        <input type="text" name='name' value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}} className='border-gray-300 border p-3 focus:outline-none focus:border-green-600 rounded' placeholder='Enter your name' /><br/>
        <input type="text" name='age' value={user.age} onChange={(e)=>{setUser({...user,age:e.target.value})}} className='border-gray-300 border p-3 mb-5 mt-2 focus:outline-none focus:border-green-600 rounded' placeholder='Enter your Age'/>

        <div className='bg-gray-200 p-3 border-gray-400 rounded-md w-96 mt-3 mx-auto'>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    </div>
  )
}
