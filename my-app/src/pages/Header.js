import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo1">
        <span>EternaJewels</span>
       
      </div>
      <div className="breadcrumb">
  <span className="purple">Cart</span> ----------------- <span>Address</span> ----------------- 
  <span className="highlight">Payment</span>
</div>

    </div>
  );
};

export default Header;
