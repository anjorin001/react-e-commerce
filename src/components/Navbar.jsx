import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import { ShoppingCart } from 'lucide-react'
const Navbar = ({ GetProduct, setFilteredProduct }) => {
  const navigate = useNavigate()
  return (
    <div className="navbar-container">     
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive? 'active-page' : 'inactive-page' }>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active-page' : 'inactive-page' }>About</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-page' : 'inactive-page' }>Account</NavLink>
        <Category GetProduct={GetProduct} setFilteredProduct={setFilteredProduct} />
        <NavLink to="/cart" className='mobile-cart'>Cart</NavLink>
      </nav>
        <button className="cart" onClick={() => navigate('/cart')}><ShoppingCart size={20}/></button>
    </div>
  );
};

export default Navbar;
