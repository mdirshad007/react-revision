import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
    const params=useParams()
    const {user}=params;
    // const {email}=params;
    // const {dob}=params;
    console.log("=======>",params)
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-7 capitalize">
        Welcome {user}
      </h1>
      {/* <p>Email: {email}</p>
      <p>DOB: {dob}</p> */}
    </div>
  );
}
