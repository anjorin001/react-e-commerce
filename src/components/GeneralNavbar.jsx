import React from "react";
import { NavLink } from "react-router-dom";
const GeneralNavbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink to={'/'} className={({ isActive }) => isActive? 'active-page' : 'inactive-page' }>Home</NavLink>
        <NavLink to={'/about'} className={({ isActive }) => isActive? 'active-page' : 'inactive-page' }>About</NavLink>
        <NavLink to={'/cart'} className={({ isActive }) => isActive? 'active-page' : 'inactive-page' }>Cart</NavLink>
        <NavLink to={'/dashboard'} className={({ isActive }) => isActive? 'active-page' : 'inactive-page' } >Account</NavLink>
      </nav>
    </div>
  );
};

export default GeneralNavbar;
