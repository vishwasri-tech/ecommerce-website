import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./PaymentPage.css";
import arrowDown from "./down-arrow.png"; // Import the down arrow image
import arrowUp from "./down-arrow.png"; // Import the up arrow image

const PaymentPage = () => {
  const [selectedMode, setSelectedMode] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleDropdownClick = (mode) => {
    setSelectedMode(selectedMode === mode ? "" : mode);
  };

  const handleContinue = () => {
    navigate("/order-confirmation"); // Navigate to the order confirmation page
  };

  return (
    <div className="payment-page">
      <div className="breadcrumb11">
        <span>Cart</span> ----------------- <span>Address</span> -----------------
        <span className="highlight1">Payment</span>
      </div>
      <h2 className="payment-heading">Select Payment Mode</h2>
      <div className="payment-container">
        <div className="payment-options">
          {["UPI", "EMI", "Credit/Debit Card", "Wallet", "Net Banking", "Cash on Delivery"].map(
            (mode) => (
              <div
                key={mode}
                className={`dropdown ${selectedMode === mode ? "active" : ""}`}
                onClick={() => handleDropdownClick(mode)}
              >
                <div className="dropdown-header">
                  <span>{mode}</span>
                  <img
                    src={selectedMode === mode ? arrowUp : arrowDown} // Use arrow images
                    alt="Arrow"
                    className="arrow"
                  />
                </div>
                {selectedMode === mode && (
                  <div className="dropdown-content">
                    <p>Details for {mode} payment</p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
        <div className="price-details">
          <h3>PRICE DETAILS (2 ITEMS)</h3>
          <p>Total MRP: <span>938</span></p>
          <p>Discount on MRP: <span>938</span></p>
          <p>Platform Fee: <span>938</span></p>
          <p>Shipping Fee: <span>938</span></p>
          <hr />
          <p className="total-amount">Total Amount: <span>938</span></p>
          <button className="functionality" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
