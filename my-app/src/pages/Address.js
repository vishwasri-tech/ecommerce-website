import React from 'react';
import './Address.css';
import delivery from "./delivery-icon.png";
import calendar from "./calendar-icon.png";

const Address = () => {
  return (
    <div className="address-page">
      <div className="address-header">
        <h3>Select Delivery Address</h3>
        <h2>Default Address</h2>
      </div>

      <div className="address-container">
        <div className="address-card">
          <h4 className="address-name">Harika Reddy</h4>
          <p className="address-details">
          Kallur Estate Near Shukulamma Temple, Nagula <br/>Chatu, Kalluru, Kurnool,<br/> 
          Andhra Pradesh - 518003<br /><br/>
          Mobile: 9392845670<br /><br/>
            Pay on delivery available
          </p>
          <div className="address-buttons">
            <button className="address-btn">Remove</button>
            <button className="address-btn">Edit</button>
          </div>
        </div>

        <button className="address-add-btn">Add New Address&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</button>
      </div>

      <div className="address-summary">
        <h4>Delivery Estimates</h4>
        {/* <p><img src="delivery-icon.png" alt="Delivery Icon" style="width: 20px; height: 20px; margin-right: 8px;"></img>Estimated delivery by 22 Jan 2025</p>
        <p><img src="calendar-icon.png" alt="Calendar Icon" style="width: 20px; height: 20px; margin-right: 8px;"></img>Estimated delivery by 23 Jan 2025</p> */}

                    <p>
                    <img
                        src={delivery}
                        alt="Delivery Icon"
                        style={{ width: '20px', height: '20px', marginRight: '8px' }}
                    />
                    Estimated delivery by 22 Jan 2025
                    </p>
                    <p>
                    <img
                        src={calendar}
                        alt="Calendar Icon"
                        style={{ width: '20px', height: '20px', marginRight: '8px' }}
                    />
                    Estimated delivery by 23 Jan 2025
                    </p>

        <h4>Price Details (2 items)</h4>
        <div className="price-details">
          <p>Item MRP: <span>₹938</span></p>
          <p>Discount on MRP: <span>₹938</span></p>
          <p>Platform Fee: <span>₹938</span></p>
          <p>Shipping Fee: <span>₹938</span></p>
        </div>
        <h3>Total Amount: <span>₹938</span></h3>
        <button className="address-proceed-btn">Proceed</button>
      </div>
    </div>
  );
};

export default Address;