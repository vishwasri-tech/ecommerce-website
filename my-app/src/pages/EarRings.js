import React from "react";
import "./Bracelet.css";
import image207 from "./image207.png";
import image208 from "./image208.png";
import image209 from "./image209.png";
import image210 from "./image210.png";
import image211 from "./image211.png";
import image212 from "./image212.png";
import image213 from "./image213.png";
import image214 from "./image214.png";
import image215 from "./image215.png";
import image216 from "./image216.png";
import image217 from "./image217.png";
import image218 from "./image218.png";
import image219 from "./image219.png";
import image220 from "./image220.png";
import image221 from "./image221.png";
import image222 from "./image222.png";
import image223 from "./image223.png";
import image224 from "./image224.png";
import image225 from "./image225.png";
import image226 from "./image226.png";
import image227 from "./image227.png";
import image228 from "./image228.png";
import image229 from "./image229.png";
import image230 from "./image230.png";

import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Bangles", price: 559, discount: "(15% off)", image: image207 },
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image: image208 },
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image209 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image210 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image: image211 },
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image212 },
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image213 },
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image214 },
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image215 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image216 },
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image217 },
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image: image218 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image: image219 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image220 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image221 },
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image222 },
  { id: 17, name: "Bangles", price: 559, discount: "(15% off)", image: image223 },
  { id: 18, name: "Bangles", price: 559, discount: "(15% off)", image: image224 },
  { id: 19, name: "Bangles", price: 559, discount: "(15% off)", image: image225 },
  { id: 20, name: "Bangles", price: 559, discount: "(15% off)", image: image226 },
  { id: 21, name: "Bangles", price: 559, discount: "(15% off)", image: image227 },
  { id: 22, name: "Bangles", price: 559, discount: "(15% off)", image: image228 },
  { id: 23, name: "Bangles", price: 559, discount: "(15% off)", image: image229 },
  { id: 24, name: "Bangles", price: 559, discount: "(15% off)", image: image230 },
];



const EarRings= () => {
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
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>₹ {product.price} <span>{product.discount}</span></p>
          </div>
        ))}
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default EarRings;


