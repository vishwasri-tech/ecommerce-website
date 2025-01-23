import React from "react";
import "./All.css";
import image300 from "./image300.png";
import image301 from "./image301.png";
import image302 from "./image302.png";
import image303 from "./image303.png";
import image304 from "./image304.png";
import image305 from "./image305.png";
import image306 from "./image306.png";
import image307 from "./image307.png";
import image308 from "./image308.png";
import image309 from "./image309.png";
import image310 from "./image310.png";
import image311 from "./image311.png";
import image312 from "./image312.png";
import image313 from "./image313.png";
import image314 from "./image314.png";
import image315 from "./image315.png";
import image316 from "./image316.png";
import image317 from "./image317.png";
import image318 from "./image318.png";
import image319 from "./image319.png";
import image320 from "./image320.png";
import image321 from "./image321.png";
import image322 from "./image322.png";
import image323 from "./image323.png";
import image324 from "./image324.png";
import image325 from "./image325.png";
import image326 from "./image326.png";
import image327 from "./image327.png";
import image328 from "./image328.png";
import image329 from "./image329.png";
import image330 from "./image330.png";
import image331 from "./image331.png";
import image332 from "./image332.png";
import image333 from "./image333.png";
import image334 from "./image334.png";
import image335 from "./image335.png";

import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Bangles", price: 559, discount: "(15% off)", image: image300 },
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image: image301 },
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image302 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image303 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image: image304 },
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image305 },
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image306 },
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image307 },
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image308 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image309 },
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image310 },
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image: image311 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image: image312 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image313 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image314 },
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image315 },
  { id: 17, name: "Bangles", price: 559, discount: "(15% off)", image: image316 },
  { id: 18, name: "Bangles", price: 559, discount: "(15% off)", image: image317 },
  { id: 19, name: "Bangles", price: 559, discount: "(15% off)", image: image318 },
  { id: 20, name: "Bangles", price: 559, discount: "(15% off)", image: image319 },
  { id: 21, name: "Bangles", price: 559, discount: "(15% off)", image: image320 },
  { id: 22, name: "Bangles", price: 559, discount: "(15% off)", image: image321 },
  { id: 23, name: "Bangles", price: 559, discount: "(15% off)", image: image322 },
  { id: 24, name: "Bangles", price: 559, discount: "(15% off)", image: image323 },
  { id: 25, name: "Bangles", price: 559, discount: "(15% off)", image: image324 },
  { id: 26, name: "Bangles", price: 559, discount: "(15% off)", image: image325 },
  { id: 27, name: "Bangles", price: 559, discount: "(15% off)", image: image326 },
  { id: 28, name: "Bangles", price: 559, discount: "(15% off)", image: image327 },
  { id: 29, name: "Bangles", price: 559, discount: "(15% off)", image: image328 },
  { id: 30, name: "Bangles", price: 559, discount: "(15% off)", image: image329 },
  { id: 31, name: "Bangles", price: 559, discount: "(15% off)", image: image330 },
  { id: 32, name: "Bangles", price: 559, discount: "(15% off)", image: image331 },
  { id: 33, name: "Bangles", price: 559, discount: "(15% off)", image: image332 },
  { id: 34, name: "Bangles", price: 559, discount: "(15% off)", image: image333 },
  { id: 35, name: "Bangles", price: 559, discount: "(15% off)", image: image334 },
  { id: 36, name: "Bangles", price: 559, discount: "(15% off)", image: image335 },
];

const All = () => {
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
              <div className="encoder10">
                <p className="product-description">Women Designer Bangle Set....</p>
              </div>
              <p>₹ {product.price} <span>{product.discount}</span></p>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default All;
