import React, { useState } from "react";

export default function ControlComponent() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="border border-black rounded-lg w-[50%] h-14 px-4 py-3 focus:outline-none focus:border-green-600"
        placeholder='Enter text for control component'
      />
      <p className="mt-5">{text}</p>
    </div>
  );
}
