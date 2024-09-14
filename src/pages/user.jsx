import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const apiUrl = "https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users";
  const [data, setData] = useState([]);  // Initialize data as an empty array
  const [deleteStatus,setDeleteStatus]=useState(false)

  const fetchData = async () => {
    try {
      const result = await fetch(apiUrl);
      if (result.ok) {  // Check if the result is successful
        const data = await result.json();
        setData(data);  // Set the fetched data to state
        console.log(data);  // Log the data for debugging
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData();  // Call the async function to fetch data
  }, []);

  const handelUserDelete=async (id)=>{
    let result=await fetch(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users/${id}`,{
      method:'DELETE'
    })
    result=await result.json()
    if(result.id){
      setDeleteStatus(true)
      fetchData(); 
    }
    
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-7">
        Welcome to users page
      </h1>
      <table className="mx-auto">
        <thead>
          <tr className="border-b">
          <th className="p-3">
            Name
          </th>
          <th className="p-3">View</th>
          <th className="p-3">Delete</th>
          <th className="p-3">Update</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
          <tr className="border-b" key={item.id}>
            <td className="p-3">{item.name}</td>
            <td className="p-3"><Link to={`/users/${item.id}`}><button className="bg-blue-600 text-white px-3 py-2">Profile</button></Link></td>
            <td className="p-3"><button className="bg-red-600 text-white px-3 py-2" onClick={()=>handelUserDelete(item.id)}>Delete</button></td>
            <td className="p-3"><Link to={`/update/${item.id}`}><button className="bg-green-600 text-white px-3 py-2">Update</button></Link></td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
