import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProfileContext } from '../components/CommonContext/CommonContext'

export default function Home() {
  const profileData=useContext(ProfileContext)
  const navigate=useNavigate()
  return (
    <div>
        <h1 className='text-[50px] font-bold'>Hello {profileData.name}</h1>
        <p>This is our home page</p>
        <p><Link to="/about">Learn More</Link></p>
        <button className='mt-3' onClick={()=>navigate('/users')}>Go to Users</button>
    </div>
  )
}
