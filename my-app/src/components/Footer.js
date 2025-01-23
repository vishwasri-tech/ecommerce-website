import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">About Us</h4>
          <p className="footer-text">
            At EternaJewels, we provide customers with exquisite, high-quality
            jewelry and exceptional service. Explore our timeless collections
            crafted to add elegance to every moment.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading2">Shop Now</h4>
          <ul className="footer-list">
            <li><a href="/necklace" className="footer-link2">Necklaces</a></li>
            <li><a href="/chains" className="footer-link2">Chains</a></li>
            <li><a href="/bracelet" className="footer-link2">Bracelets</a></li>
            <li><a href="/ear-rings" className="footer-link2">Earrings</a></li>
            <li><a href="/bangles" className="footer-link2">Bangles</a></li>
            <li><a href="/rings" className="footer-link2">Rings</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Customer Support</h4>
          <ul className="footer-list3">
            <li><a href="#" className="footer-link">Return & Exchange</a></li>
            <li><a href="#" className="footer-link">Shipping Information</a></li>
            <li><a href="#" className="footer-link">Track Your Order</a></li>
            <li><a href="#" className="footer-link">Cancel Order</a></li>
          </ul>
        </div>
        <div className="footer-section">
        <h4 className="footer-heading">Reach Us</h4>
        <p className="footer-text"><i className="fas fa-phone-alt"></i> 877-765-1004</p>
        <p className="footer-text"><i className="fas fa-envelope"></i> info@eternajewels.com</p>
        <div className="social-icons">
            <a href="https://x.com/?lang=en" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com" className="social-link"><i className="fab fa-youtube"></i></a>
            <a href="https://www.whatsapp.com/" className="social-link"><i className="fab fa-whatsapp"></i></a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;