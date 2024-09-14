import { useEffect, useState } from "react";
import { InputField, SubmitButton } from "../components/Form/Form";

export default function AddNewUser() {
  const [status, setStatus] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handelUserName = (userName) => {
    setUserName(userName);
  };
  const handelUserPass = (pass) => {
    setPassword(pass);
  };
  const handelUserEmail = (email) => {
    setEmail(email);
  };
  const handelUserPhone = (phone) => {
    setPhone(phone);
  };
  const handelUserCity = (city) => {
    setCity(city);
  };

  const newUserData = {
    name: username,
    email: email,
    password: password,
    phone: phone,
    city: city,
  };

  const handelAddUser = (e) => {
    e.preventDefault();
    addUser();
  };

  const resetForm = () => {
    setUserName("");
    setPassword("");
    setEmail("");
    setPhone("");
    setCity("");
  };

  const addUser = async () => {
    try {
      let response = await fetch(
        "https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setStatus(true);
        console.log("New User added successfully");
        resetForm(); // Clear form inputs after successful submission
      } else {
        setStatus(false);
        console.log("Failed to submit your record");
      }
    } catch (error) {
      setStatus(false);
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-[400px] w-full mx-auto">
      {status && (
        <h3 className="text-green-700 font-bold text-xl">
          User added successfully
        </h3>
      )}

      <h1 className="text-[50px] font-bold">Add New User</h1>
      <p className="mb-6">Please add User details</p>
      <form action="" onSubmit={handelAddUser}>
        <InputField
          label="User Name"
          type="text"
          userInputValue={handelUserName}
          value={username} // Bind state value to input
          className="mb-5"
        />
        <InputField
          label="Email"
          type="email"
          userInputValue={handelUserEmail}
          value={email} // Bind state value to input
          className="mb-5"
        />
        <InputField
          label="Password"
          type="password"
          userInputValue={handelUserPass}
          value={password} // Bind state value to input
          className="mb-5"
        />
        <InputField
          label="Phone"
          type="text"
          userInputValue={handelUserPhone}
          value={phone} // Bind state value to input
          className="mb-5"
        />
        <InputField
          label="City"
          type="text"
          userInputValue={handelUserCity}
          value={city} // Bind state value to input
          className="mb-5"
        />
        <SubmitButton value="Add User" />
      </form>
    </div>
  );
}
