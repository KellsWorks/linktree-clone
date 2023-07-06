import React, { useState } from 'react';

interface props{
    type: "text" | "email" | "password" | "number" | "date";
    label: string;
    value: string;
}
const CoreInput: React.FC<props> = ({type, label, value}) => {

  const [inputValue, setInputValue] = useState<string>(value);
  const [isInputFocused, setInputFocused] = useState<boolean>(false);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="w-full relative">
      <label
        className={`absolute left-2 transition-all duration-300 ${
          isInputFocused || inputValue ? 'top-0 text-sm' : 'top-2 text-base'
        } ${
          isInputFocused
            ? 'text-blue-600'
            : 'text-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        className="w-full pl-2 pt-4 pb-2 pr-2 bg-gray-100 hover:border-2 rounded-md focus:outline-none focus:border-black transition duration-150"
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default CoreInput;
