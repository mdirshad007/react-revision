import { useState } from "react";

export default function PreviousState() {
  const [count, setCount] = useState(0);
  const handelCountUpdate = () => {
    let rand = Math.floor(Math.random() * 10);
    setCount((pre)=>{
        console.log(pre)
        if(pre<5){
            alert("Less then 5 and state is "+pre)
        }
        return rand
    });
  };
  return (
    <div>
      <h1 className="text-[60px] font-bold mb-7">{count}</h1>
      <button onClick={handelCountUpdate}>Change count</button>
    </div>
  );
}
