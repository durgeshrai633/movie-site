import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <div className='nav'>
      <Link className='nav__link' to={"/"}>
        Home
      </Link>
      <Link className='nav__link' to={"/about"}>
        About
      </Link>
      <Link className='nav__link' to={"/products"}>
        Products
      </Link>
    </div>
  );
}

export default Navbar