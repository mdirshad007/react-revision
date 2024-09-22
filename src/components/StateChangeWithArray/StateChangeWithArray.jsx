import React, { useState } from 'react'

export default function StateChangeWithArray() {
    const [user, setUser] = useState([
        { name: "Furqan" },
        { age: 27 }
    ]);

    const handleNameChange = (e) => {
        // Update the "name" property in the array
        const updatedUser = [...user];
        updatedUser[0] = { ...updatedUser[0], name: e.target.value };
        setUser(updatedUser);
    }

    const handleAgeChange = (e) => {
        // Update the "age" property in the array
        const updatedUser = [...user];
        updatedUser[1] = { ...updatedUser[1], age: e.target.value };
        setUser(updatedUser);
    }

    return (
        <div>
            <h1 className='text-[40px] font-bold mb-5 mt-8'>State Change with Array</h1>
            <input
                type="text"
                name='name'
                value={user[0].name}
                onChange={handleNameChange}
                className='border-gray-300 border p-3 focus:outline-none focus:border-green-600 rounded'
                placeholder='Enter your name'
            /><br />
            <input
                type="text"
                name='age'
                value={user[1].age}
                onChange={handleAgeChange}
                className='border-gray-300 border p-3 mb-5 mt-2 focus:outline-none focus:border-green-600 rounded'
                placeholder='Enter your Age'
            />

            <div className='bg-gray-200 p-3 border-gray-400 rounded-md w-96 mt-3 mx-auto'>
                <p>Name: {user[0].name}</p>
                <p>Age: {user[1].age}</p>
            </div>
        </div>
    )
}
