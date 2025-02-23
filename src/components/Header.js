import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/DesignTool">Design Tool</Link></li>
          <li><Link to="/DesignTool">Jewellers Page</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
