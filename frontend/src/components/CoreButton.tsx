import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loading-icons'

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  color: "primary" | "success" | "error" | "default";
  loading: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const CoreButton: React.FC<Props> = ({ text, type, loading, color, disabled, onClick }) => {
  const [buttonColor, setButtonColor] = useState<string>("");

  useEffect(() => {
    switch (color) {
      case "primary":
        setButtonColor("purple");
        break;
      case "success":
        setButtonColor("green");
        break;
      case "error":
        setButtonColor("red");
        break;
      default:
        setButtonColor("blue");
        break;
    }
  }, [color]);

  return (
    <button
      type={type}
      className={`flex items-center justify-center w-full rounded-full px-4 py-3 text-white ${disabled ? 'bg-gray-400 cursor-not-allowed' : `bg-${buttonColor}-700`
        } font-medium hover:${disabled ? 'none' : `bg-${buttonColor}-800`
        } transition duration-150`}
      onClick={onClick}
      disabled={disabled}
    >
      <p className={loading ? 'hidden' : 'text-center'}>{text}</p>
      {loading && <TailSpin strokeWidth={3} speed={2} height={25} width={25} />}
    </button>
  );
};

export default CoreButton;
