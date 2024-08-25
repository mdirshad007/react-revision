import { useEffect, useState } from "react";

export function InputField({
  type = "text",
  name = "",
  placeholder = "",
  label = "Your Label",
  className,
  userInputValue = () => {},
}) {
  const [inputValue, setInputvalue] = useState("");
  useEffect(() => {
    userInputValue(inputValue);
  }, [inputValue]);
  return (
    <div className={`text-left ${className}`}>
      <label htmlFor={name} className="block font-semibold text-lg mb-3">
        {label}
      </label>
      <input
        type={type}
        value={inputValue}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          setInputvalue(e.target.value);
        }}
        className="p-3 w-full border border-gray-500 rounded-md shadow-lg"
      />
    </div>
  );
}
export function CheckBox({
  text = "checkbox text",
  className,
  name,
  userCheckValue,
}) {
  const [checkboxValue, setCheckBoxValue] = useState(false);
  userCheckValue(checkboxValue)
  return (
    <div className="text-left">
      <label htmlFor={name} className="flex justify-start items-center">
        <input
          type="checkbox"
          name={name}
          id=""
          className="mr-3"
          onChange={(e) => {
            setCheckBoxValue(e.target.checked);
          }}
        />
        <span>{text}</span>
      </label>
    </div>
  );
}
export function SubmitButton() {
  return (
    <div className="text-left mt-6">
      <input
        type="submit"
        value="Submit"
        className="bg-green-600 text-white px-5 py-2 rounded"
      />
    </div>
  );
}
