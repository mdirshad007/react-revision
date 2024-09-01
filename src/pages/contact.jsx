import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1 className="text-[50px] font-bold">Contact Page</h1>
      <p>You are on contact page</p>
      <p>
        <Link to="contact-info">Contact Info</Link>
        <Outlet/>
      </p>
    </div>
  );
}
