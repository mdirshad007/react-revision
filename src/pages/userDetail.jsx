import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
    const params=useParams()
    const {id}=params;
    const apiLink=`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users/${id}`
    const [data,setData]=useState([])
    useEffect(()=>{
      async function fetchData(){
        try{
          let result=await fetch(apiLink)
          if(result.ok){
            result=await result.json()
            setData(result)
            console.log(data)
          }
        }catch(error){
          console.log("Api data is not fetching",error)
        }
      }
      fetchData()
    },[])

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-7 capitalize">
        Welcome {data.name}
      </h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>City: {data.city}</p>
    </div>
  );
}
