import React from "react";
import "./OrderConfirmation.css";
import successIcon from "./success-icon.png"; // Replace with the correct path to the success icon image

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <div className="success-icon">
        <img src={successIcon} alt="Success Icon" />
      </div>
      <h2>Your order has been successfully confirmed</h2>
      <p>Your OrderID is <span className="order-id">GA34567900</span>.</p>
      <p>You'll receive an email with the details shortly.</p>

      <div className="delivery-details">
        <h3>Delivering to</h3>
        <p>
          <strong>Harika Reddy</strong>{" "}
          <span className="home-tag">Home</span>
        </p>
        <p>
          Kallur Estate Near Shukulamma Temple, Nagula Chatu, Kalluru, Kurnool,
          Andhra Pradesh - 518003
        </p>
        <p>Mobile: 9392845670</p>
      </div>

      <div className="buttons">
        <button className="continue-shopping">Continue Shopping</button>
        <button className="view-order">View Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
