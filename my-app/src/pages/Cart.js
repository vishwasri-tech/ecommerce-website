import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Cart.css';
import ProductGrid from './productGrid';
import Footer from '../components/Footer';


const Cart = () => {
  const navigate = useNavigate(); 

  const handleContinueClick = () => {
    navigate('/address');  // Use absolute path for navigation
  };

  const products = [
    {
      id: 1,
      name: 'Bangles set',
      description: 'White and Gold colour bangle set design features',
      price: '₹320',
      discountPrice: '15% OFF',
      sizeOptions: ['2.6', '2.8', '3.0'],
      quantityOptions: [1, 2, 3],
      delivery: '10 days returnable',
      image: 'https://s3-alpha-sig.figma.com/img/0b6f/c299/deb9c1cf72029ea7d004978dd27524ad?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j3MS~yjvPmpXgRaNSLVmn0QbQEco7Qbr84FQmlo8BS0r4GR~8DipYJFlmX0xV6SN4GgUcGdw62iJmwaCDSjWnuyslRVlRLGMwZ2-IWH05k3kNXKVDEz8dy~EISg~CIk~kVQqmeLejNKYIIDLvHmwOz25Q53qTwbb5y-ax5E~UEQpQID0-SEMABLOt4LR9TYXX5~95s4aka-b1Vi0XMXZ1AXrIOvBaRsGhyI8WEq8Gug6FAybav-1mfMm8L~RKn7vU5MMHKAfWgbziXh3Jh7VXcJrQbvwxGjioVghnNV7hACQfaD3S6i7bPALhqsQJRRADO0gqDO9y9P4uSt-HJfy3Q__',
    },
    {
      id: 2,
      name: 'Ear Rings',
      description: 'A white-colored earring design exudes a minimalist finish',
      price: '₹650',
      discountPrice: '15% OFF',
      sizeOptions: ['Free'],
      quantityOptions: [1, 2, 3],
      delivery: '15 days returnable',
      image: 'https://s3-alpha-sig.figma.com/img/1996/9965/2eba487b01f329a9bfe7b4f9edc079fe?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URnlYSp5QaBkn1ghHQz39fRhYFXCSpffB4Tvr9V7ubmQwwm58WlUnHCqS9ZxzkSneFl1i64rcwyvvAwBbtgLbLN4aeyqxjlZ4FrL3dO8il~iz50xEXEmCVwKFz759ZjcABKOu1qtOX0WETy086pcckdBPNtCGmLiyb8bvqP4BMShg51cmJG4upqX7pVDtdMt58B9V1ouALQ709J-e36qkRQWTu964VORruoZ6~ScYxbDzMI6Hoj9czVGsbPKa6M4dnkXI3PHo3U7JEnfQiwdvni6~nvrDvjVzxUsl1adpaeWouV~Vbsm-XTd8k5LllsvxJ2oR6-c9GlTlZ1mkIQgIg__',
    },
  ];

  return (
    <>

 
    <div className="main-container-updated">
      <header>
        <h1 className="jewels-brand">EternaJewels</h1>
      </header>

      <div className="content-wrapper">
        <div className="left-panel">
          <div className="address-wrapper">
            <p className="delivery-address">
              Delivery to: <strong>Shambavi, 518003</strong>
            </p>
            <p className="address-details">
              Kallur Estate Near Shukulamma Temple, Nagula Chatu, Kalluru, Kurnool
            </p>
            <button className="update-address-btn">Change Address</button>
          </div>

          <h2 className="item-count">2/2 ITEMS SELECTED</h2>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-box">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="selection-options">
                    <label>
                      Size:
                      <select>
                        {product.sizeOptions.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Qty:
                      <select>
                        {product.quantityOptions.map((qty, index) => (
                          <option key={index} value={qty}>{qty}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="pricing-info">
                    <span className="sale-price">{product.discountPrice}</span>
                    <span className="regular-price">{product.price}</span>
                  </div>
                  <p className="shipping-info">{product.delivery}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-panel">
          <div className="order-summary">
            <h3>Price Details (2 Items)</h3>
            <p>Total Product Price <span>+Rs821</span></p>
            <p>Order Total <span>+Rs821</span></p>
            <div>
              <p className="note">Clicking on 'Continue' will not deduct any money</p>
              <button className="proceed-btn" onClick={handleContinueClick}>Continue</button>
            </div>
          </div>
        </div>
      </div>
      <ProductGrid />
     
    </div>
    <Footer/>
    </>

  );
};

export default Cart;
