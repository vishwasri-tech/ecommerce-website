import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';

function TopNavbar() {
  return (
    <div className="top-navbar">
      {/* Logo */}
      <div className="logo">
        <h1>EternaJewels</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jewellery"
        />
        <i className="fa fa-search search-icon"></i>
      </div>

      {/* Wishlist, Cart, SignUp */}
      <div className="actions">
        <Link to="/wishlist" className="icon">
          <i className="fa fa-heart"></i> Wishlist
        </Link>
        <Link to="/cart" className="icon">
          <i className="fa fa-shopping-cart"></i> Cart
        </Link>
        <Link to="/signup" className="icon">
          <i className="fa fa-user"></i> Sign Up
        </Link>
      </div>
    </div>
  );
}

export default TopNavbar;
