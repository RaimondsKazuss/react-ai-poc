import React from "react";
interface LinkProps {
  to: string;
  children: React.ReactNode;
}
const Link: React.FC<LinkProps> = ({ to, children }) => (
  <a href={to} className="link">
    {children}
  </a>
);
export default Link;
