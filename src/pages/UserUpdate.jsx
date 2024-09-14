import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {SubmitButton } from "../components/Form/Form";

export default function UserUpdate() {
  const params = useParams();
  const { id } = params;
  const [status, setStatus] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [userdata, setUserData] = useState("");

  useEffect(() => {
    const UserDetails = async () => {
      try {
        let result = await fetch(
          `https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users/${id}`
        );
        if (result.ok) {
          result = await result.json();
          setUserData(result);
          setUserName(result.name);
          setEmail(result.email);
          setPhone(result.phone);
          setCity(result.city);
        } else {
          console.log("Data is not fatching from the APi");
        }
      } catch (error) {
        console.log("Your error", error);
      }
    };
    UserDetails();
  }, []);

  
  const newUserData = {
    name: username,
    email: email,
    phone: phone,
    city: city,
  };

  const userUpdate=(data)=>{
   try{
    let result=fetch(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users/${id}`,{
      method:"PUT",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    if(result){
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 2000);
    }
   }catch(error){
    console.log("Error",error)
   }
  }
  const handelUpdateUser = (e) => {
    e.preventDefault();
    userUpdate(newUserData)
  };

  return (
    <div className="max-w-[400px] w-full mx-auto">
      {status && (
        <h3 className="text-green-700 font-bold text-xl">
          User Updated successfully
        </h3>
      )}

      <h1 className="text-[50px] font-bold">Update User</h1>
      <p className="mb-6">Please Update {userdata.name} details</p>
      <form action="" onSubmit={handelUpdateUser}>
        <div className={`text-left mb-3`}>
          <label className="block font-semibold text-lg mb-3">User Name</label>
          <input
            type="text"
            name=""
            value={username}
            id=""
            className="p-3 w-full border border-gray-500 rounded-md shadow-lg"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className={`text-left mb-3`}>
          <label className="block font-semibold text-lg mb-3">Email</label>
          <input
            type="email"
            name=""
            value={email}
            id=""
            className="p-3 w-full border border-gray-500 rounded-md shadow-lg"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className={`text-left mb-3`}>
          <label className="block font-semibold text-lg mb-3">Phone</label>
          <input
            type="text"
            name=""
            value={phone}
            id=""
            className="p-3 w-full border border-gray-500 rounded-md shadow-lg"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className={`text-left mb-3`}>
          <label className="block font-semibold text-lg mb-3">City</label>
          <input
            type="text"
            name=""
            value={city}
            id=""
            className="p-3 w-full border border-gray-500 rounded-md shadow-lg"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
       
        <SubmitButton value="Update User" />
      </form>
    </div>
  );
}
