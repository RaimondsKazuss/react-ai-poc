
import React from 'react';
import { Link } from 'react-router-dom';
interface NavigationProps {
  links: { label: string; path: string }[];
}
const Navigation: React.FC<NavigationProps> = ({ links }) => (
  <nav className="navigation">
    {links.map(link => (
      <Link key={link.path} to={link.path}>{link.label}</Link>
    ))}
  </nav>
);
export default Navigation;
