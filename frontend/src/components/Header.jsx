import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Upcoming IPOs</h1>
      <nav className="nav-bar">
        <span>Products</span>
        <span>Pricing</span>
        <span>Community</span>
        <span>Sign In</span>
      </nav>
    </header>
  );
};

export default Header;
