import React from "react";
interface InputProps {
  type: "text" | "number" | "email" | "password" | "checkbox";
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

import "./Input.scss";
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => (
  <input
    type={type}
    className="input"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);
export default Input;
