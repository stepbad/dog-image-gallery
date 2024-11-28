import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaImages } from 'react-icons/fa';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/" className="nav-link">
        <FaHome style={{ marginRight: '8px' }} />
        Home
      </NavLink>
      <NavLink to="/gallery" className="nav-link">
        <FaImages style={{ marginRight: '8px' }} />
        Gallery
      </NavLink>
    </nav>
  </header>
);

export default Header;
