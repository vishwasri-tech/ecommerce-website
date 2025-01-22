// import React from 'react';
// import './Address.css';
// import delivery from "./delivery-icon.png";
// import calendar from "./calendar-icon.png";

// const Address = () => {
//   return (
//     <div className="address-page">
//       <div className="address-header">
//         <h3>Select Delivery Address</h3>
//         <h2>Default Address</h2>
//       </div>

//       <div className="address-container">
//         <div className="address-card">
//           <h4 className="address-name">Harika Reddy</h4>
//           <p className="address-details">
//           Kallur Estate Near Shukulamma Temple, Nagula <br/>Chatu, Kalluru, Kurnool,<br/> 
//           Andhra Pradesh - 518003<br /><br/>
//           Mobile: 9392845670<br /><br/>
//             Pay on delivery available
//           </p>
//           <div className="address-buttons">
//             <button className="address-btn">Remove</button>
//             <button className="address-btn">Edit</button>
//           </div>
//         </div>

//         <button className="address-add-btn">Add New Address</button>
//       </div>

//       <div className="address-summary">
//         <h4>Delivery Estimates</h4>
//         {/* <p><img src="delivery-icon.png" alt="Delivery Icon" style="width: 20px; height: 20px; margin-right: 8px;"></img>Estimated delivery by 22 Jan 2025</p>
//         <p><img src="calendar-icon.png" alt="Calendar Icon" style="width: 20px; height: 20px; margin-right: 8px;"></img>Estimated delivery by 23 Jan 2025</p> */}

// <div className="delivery-details">
//           <p>
//             <img
//               src={delivery}
//               alt="Delivery Icon"
//               style={{ width: '70px', height: '60px', marginRight: '8px' }}
//             />
//             <span className="centered-text">Estimated delivery by 22 Jan 2025</span>
//           </p>
//           <p>
//             <img
//               src={calendar}
//               alt="Calendar Icon"
//               style={{ width: '70px', height: '60px', marginRight: '8px' }}
//             />
//             <span className="centered-text">Estimated delivery by 23 Jan 2025</span>
//           </p>
//         </div>

//         <h4>Price Details (2 items)</h4>
//         <div className="price-details">
//           <p>Item MRP: <span>₹938</span></p>
//           <p>Discount on MRP: <span>₹938</span></p>
//           <p>Platform Fee: <span>₹938</span></p>
//           <p>Shipping Fee: <span>₹938</span></p>
//         </div>
//         <h3>Total Amount: <span>₹938</span></h3>
//         {/* <button className="address-proceed-btn">Proceed</button> */}
//         <div className="proceed-btn-container">
//           <button className="address-proceed-btn">Proceed</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Address;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Address.css';
import Header22 from './Header22'; // Import Header22 component
import delivery from "./delivery-icon.png";
import calendar from "./calendar-icon.png";

const Address = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/payment'); // Navigate to the PaymentPage
  };

  return (
    <>
      {/* Include Header22 component */}
      <Header22 />

      <div className="address-page">
        <div className="address-header">
          <h3>Select Delivery Address</h3>
          <h2 className='sharvani'>Default Address</h2>
        </div>

        <div className="address-container">
          <div className="address-card">
            <h4 className="address-name">Harika Reddy</h4>
            <p className="address-details">
              Kallur Estate Near Shukulamma Temple, Nagula <br /> Chatu, Kalluru, Kurnool,<br />
              Andhra Pradesh - 518003<br /><br />
              Mobile: 9392845670<br /><br />
              Pay on delivery available
            </p>
            <div className="address-buttons">
              <button className="address-btn">Remove</button>
              <button className="address-btn">Edit</button>
            </div>
          </div>

          <button className="address-add-btn">Add New Address</button>
        </div>

        <div className="address-summary1">
          <h4>Delivery Estimates</h4>
          <div className="delivery-details1">
            <p>
              <img
                src={delivery}
                alt="Delivery Icon"
                style={{ width: '70px', height: '60px', marginRight: '8px' }}
              />
              <span className="centered-text1">Estimated delivery by 22 Jan 2025</span>
            </p>
            <p>
              <img
                src={calendar}
                alt="Calendar Icon"
                style={{ width: '70px', height: '60px', marginRight: '8px' }}
              />
              <span className="centered-text1">Estimated delivery by 23 Jan 2025</span>
            </p>
          </div>

          <h4>Price Details (2 items)</h4>
          <div className="price-details1">
            <p>Item MRP: <span>₹938</span></p>
            <p>Discount on MRP: <span>₹938</span></p>
            <p>Platform Fee: <span>₹938</span></p>
            <p>Shipping Fee: <span>₹938</span></p>
          </div>
          <h3>Total Amount: <span>₹938</span></h3>
          <div className="proceed-btn-container">
            <button className="address-proceed-btn" onClick={handleProceed}>Proceed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
