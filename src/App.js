import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Counter from "./classComponents/Counter/Counter";
import { CheckBox, InputField, SubmitButton } from "./components/Form/Form";
import { useState } from "react";
import LifeCycle from "./classComponents/LifeCycle/LifeCycle";

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
      <div className="px-10 py-20">
        <div className="max-w-5xl w-full mx-auto">
          {/* <Accordion title="Hello click me" description={'Hello I am description'} />
          <Counter/> */}
     
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputField
              name="user-name"
              label="User Name"
              type="text"
              placeholder="User Name"
              className="mb-5"
              userInputValue={handelUserName}
            />
            <InputField
              name="email"
              label="Email"
              type="email"
              placeholder="User Email"
              value=""
              className="mb-5"
              userInputValue={handelUserEmail}
            />
            <InputField
              name="phone"
              label="Phone"
              type="text"
              placeholder="Phone"
              value=""
              className="mb-5"
              userInputValue={handelUserPhone}
            />
            <CheckBox text="Are you agree for term and conditions" userCheckValue={handelCheckValue}/>
            <SubmitButton />
          </form>

          <div className="text-left mt-9">
            <p><span className="font-bold mr-5">User Name:</span>{userName}</p>
            <p><span className="font-bold mr-5">User Email:</span>{userEmail}</p>
            <p><span className="font-bold mr-5">User Phone:</span>{userPhone}</p>
            <p><span className="font-bold mr-5">Terms and Condition:</span>{checkValue?"True":"False"}</p>
          </div>
        </div>
      </div>

      <section className="px-10 py-20 bg-gray-100">
        <div className="max-w-5xl w-full mx-auto">
            <LifeCycle/>
        </div>
      </section>
    </div>
  );
}

export default App;
