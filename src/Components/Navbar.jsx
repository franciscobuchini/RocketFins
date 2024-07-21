//Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './../Assets/logo.webp'

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <img src={Logo} />
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/Store' ? 'active' : ''}>
          <Link to="/Store">Order</Link>
        </li>
        <li className={location.pathname === '/FAQ' ? 'active' : ''}>
          <Link to="/FAQ">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
