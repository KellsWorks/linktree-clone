import React, { useState } from 'react';

interface CoreInputProps {
  type: "text" | "email" | "password" | "number" | "date";
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CoreInput: React.FC<CoreInputProps> = ({ type, label, value, required, onChange }) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [isInputFocused, setInputFocused] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
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
            ? 'text-gray-400'
            : 'text-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        className="w-full pl-2 pt-4 pb-2 pr-2 bg-gray-100 hover:border-2 rounded-md focus:outline-none focus:border-black transition duration-150"
        type={type}
        required={required}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default CoreInput;
