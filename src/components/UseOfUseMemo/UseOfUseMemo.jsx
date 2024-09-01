import React, { useMemo, useState } from "react";

export default function UseOfUseMemo() {
  const [color, setColor] = useState({
    bgColor: "bg-[#000]",
    text: "text-[#fff]",
  });
  const [colorIndex, setColorIndex] = useState(1);
  const [count,setCount]=useState(1)


  const colorData = [
    {
      bgColor: "bg-[#000]",
      text: "text-[#fff]",
    },
    {
      bgColor: "bg-red-600",
      text: "text-[#fff]",
    },
    {
      bgColor: "bg-green-700",
      text: "text-[#fff]",
    },
    {
      bgColor: "bg-blue-700",
      text: "text-[#fff]",
    },
  ];
  const handelBackgroundColor = () => {
    let colorArrayLength = colorData.length;
    console.log("Inside the function");
    setColor({
      bgColor: colorData[colorIndex].bgColor,
      text: colorData[colorIndex].text,
    });
    if (colorIndex < colorArrayLength - 1) {
      setColorIndex(colorIndex + 1);
    } else {
      setColorIndex(0);
    }
  };
  return (
    <>
      <div className={`p-8 ${color.bgColor} ${color.text}`}>hello world!</div>
      <button
        className="bg-green-600 text-white mt-5 px-5 py-3"
        onClick={handelBackgroundColor}
      >
        Change Background
      </button>
      <button
        className="bg-blue-700 text-white mt-5 px-5 py-3"
        onClick={()=>setCount(count+1)}
      >
       Add Count {count}
      </button>
    </>
  );
}
