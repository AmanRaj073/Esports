import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar mt-3">
      {/* Left-side Links for Desktop */}
      <div className="navbar-left">
        <NavLink to="/esports" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ESPORTS</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>SHOP</NavLink>
        <NavLink to="/content" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTENT</NavLink>
      </div>

      {/* Logo in the center */}
      <NavLink to="/" className="logos cursor-pointer">
        <img src={logo} alt="2600 Logo" className="logo-img" />
      </NavLink>

      {/* Right-side Links for Desktop */}
      <div className="navbar-right">
        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>BLOG</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ABOUT US</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTACT US</NavLink>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Mobile Menu (includes ALL links) */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/esports" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ESPORTS</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>SHOP</NavLink>
        <NavLink to="/content" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTENT</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>BLOG</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ABOUT US</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTACT US</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;