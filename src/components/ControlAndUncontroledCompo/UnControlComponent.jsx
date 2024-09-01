import React, { useRef } from 'react'

export default function() {
    let inputRef=useRef(null)
    let text=null;
    let textValue=null;
    const handelInputValue=()=>{
        const inputValue = inputRef.current.value;
        const displayElement = document.getElementById('display-text');
        displayElement.textContent = inputValue;
    }
  return (
    <div>
         <input
        type="text"
        ref={inputRef}
        id='input123'
        onChange={handelInputValue}
        className="border border-black rounded-lg w-[50%] h-14 px-4 py-3 focus:outline-none focus:border-green-600"
        placeholder='Enter text for uncontrol component'
      />
      { console.log("==>",textValue)}
      <p className="mt-5" id="display-text" ></p>
    </div>
  )
}
