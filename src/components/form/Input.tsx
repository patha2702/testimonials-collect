import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

const Input = ({ type, placeholder, name }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
    />
  );
};

export default Input;
