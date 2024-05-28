
import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, type = 'button' }) => (
    <button className="button" onClick={onClick} disabled={disabled} type={type}>
        {children}
    </button>
);
export default Button;
