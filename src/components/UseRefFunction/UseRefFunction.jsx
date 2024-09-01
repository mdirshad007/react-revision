import React, { useRef } from "react";

export default function UseRefFunction() {
    const inputRef=useRef(null)
    const handelInputRef=()=>{
        console.log("Input Ref working..")
        console.log(inputRef)
        inputRef.current.value="Irshad"
        inputRef.current.style.color="red"
    }
  return (
    <div>
      <input
        type="text"
        name=""
        ref={inputRef}
        id=""
        className="w-4/12 mx-auto h-10 border border-gray-400 p-3"
        placeholder="Search.."
      />
      <button
        className="h-10 text-white bg-green-700 px-4 -mt-1"
        onClick={handelInputRef}
      >
        Search
      </button>
    </div>
  );
}
