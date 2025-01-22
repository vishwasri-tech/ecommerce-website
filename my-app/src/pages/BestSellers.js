import React from "react";
import "./BestSellers.css";
import image143 from "./image143.png";
import image144 from "./image144.png";
import image145 from "./image145.png";
import image146 from "./image146.png";
import image147 from "./image147.png";
import image148 from "./image148.png";
import image149 from "./image149.png";
import image150 from "./image150.png";
import image151 from "./image151.png";
import image152 from "./image152.png";
import image153 from "./image153.png";
import image154 from "./image154.png";
import image155 from "./image155.png";
import image156 from "./image156.png";
import image157 from "./image157.png";
import image158 from "./image158.png";
import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Best", price: 559, discount: "(15% off)", image: image143 },
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image: image144 },
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image145 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image146 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image: image147 },
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image148 },
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image149 },
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image150 },
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image151 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image152 },
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image153 },
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image: image154 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image: image155 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image156 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image157 },
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image158 },
];

const BestSellers = () => {
  return (
    <>
    <div className="container">
      <aside className="filters">
        <h3>Filter</h3>
        <ul>
          <li>Prices</li>
          <li>Discount</li>
          <li>Product Type</li>
          <li>Gender</li>
          <li>Occasion</li>
        </ul>
      </aside>

      <section className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" id={`product-${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <div className="encoder1">
                  <p className="product-description">Women Designer Bangle Set....</p>
                  </div>
            <p>
              ₹ {product.price} <span>{product.discount}</span>
            </p>
          </div>
        ))}
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default BestSellers;
