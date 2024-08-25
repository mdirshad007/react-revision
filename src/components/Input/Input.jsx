import { useState } from "react";

export default function Input() {
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <p className="text-2xl text-green-700 text-center mb-3">{inputData}</p>
      <input
        type="text"
        name=""
        id=""
        value={inputData}
        onChange={(event) => {
          setInputData(event.target.value);
        }}
        className="border border-gray-500 p-4 w-3/6 rounded-md"
        placeholder="Enter you text"
      />
    </div>
  );
}
