import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const login = localStorage.getItem("login") === "true";

  return (
    <div className="bg-gray-300 px-10 text-center py-3 mb-10">
      <ul className="flex justify-center gap-4 items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {login ? (
          <>
           <li>
           <NavLink to="/add-new-user">Add New User</NavLink>
         </li>
          <li>
            <button
              onClick={() => {
                localStorage.setItem("login", "false");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={() => navigate("/login")}>Login</button>
            </li>
            <li>
              <button onClick={() => navigate("/signup")}>SignUp</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
