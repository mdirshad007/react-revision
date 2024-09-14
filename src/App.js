import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar/Navbar";
import Page404 from "./pages/page404";
import User from "./pages/user";
import UserDetail from "./pages/userDetail";
import ContactInfo from "./pages/contactInfo";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Protected from "./components/Protected/Protected";
import AddNewUser from "./pages/addNewUser";
import UserUpdate from "./pages/UserUpdate";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPhone, setPhone] = useState("");
  const [checkValue, setcheckValue] = useState(false);
  const handelUserName = (name) => {
    setUserName(name);
  };
  const handelUserEmail = (email) => {
    setEmail(email);
  };
  const handelUserPhone = (phone) => {
    setPhone(phone);
  };
  const handelCheckValue=(check)=>{
    setcheckValue(check)
  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/users" element={<Protected Component={User}/>}/>
        <Route path="/add-new-user" element={<Protected Component={AddNewUser}/>}/>
        <Route path="/users/:id" element={<Protected Component={UserDetail}/>}/>
        <Route path="/update/:id" element={<Protected Component={UserUpdate}/>}/>
        <Route path="/contact/" element={<Contact/>}>
        <Route path="contact-info" element={<ContactInfo/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;
