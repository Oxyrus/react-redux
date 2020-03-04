import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => (
  <>
    <Link to="/" replace={true} className="link">Home</Link>
    <span> </span>
    <Link to="/productos">Productos</Link>
  </>
);
