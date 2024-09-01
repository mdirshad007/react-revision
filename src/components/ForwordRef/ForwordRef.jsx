import { useRef } from "react";
import InputForRef from "./InputForRef";

export default function ForwordRef(){
    let inputRef=useRef(null)
    const handelInputRef=()=>{
        inputRef.current.value="1000";
        inputRef.current.focus();
    }
    return(
        <div>
            <InputForRef ref={inputRef}/>
            <button className="bg-blue-700 text-white px-4 py-2 mt-3" onClick={handelInputRef}>Change dom by forword Ref</button>
        </div>
    )
}