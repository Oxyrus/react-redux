import React from 'react'
import { NavBar } from './NavBar';

import './Header.css';

const Header = () => (
  <div>
    <div className="header">
      <span>Ceiba</span>
    </div>
    <div className="nav-bar-header">
      <NavBar />
    </div>
  </div>
);

export default Header;
