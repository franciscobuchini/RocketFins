//Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './../Assets/logo_black.webp'

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
        <select id="select-theme">
          <option value="light"> Light </option>
          <option value="dark"> Dark </option>
        </select>
        <select>
          <option value="english"> English </option>
          <option value="spanish"> Español </option>
          <option value="french"> Français </option>
        </select>
      </ul>
    </nav>
  );
}

export default Navbar;
