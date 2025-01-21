import React from "react";
import "./Bracelet.css";
import image183 from "./image183.png";
import image184 from "./image184.png";
import image185 from "./image185.png";
import image186 from "./image186.png";
import image187 from "./image187.png";
import image188 from "./image188.png";
import image189 from "./image189.png";
import image190 from "./image190.png";
import image191 from "./image191.png";
import image192 from "./image192.png";
import image193 from "./image193.png";
import image194 from "./image194.png";
import image195 from "./image195.png";
import image196 from "./image196.png";
import image197 from "./image197.png";
import image198 from "./image198.png";
import image199 from "./image199.png";
import image200 from "./image200.png";
import image201 from "./image201.png";
import image202 from "./image202.png";
import image203 from "./image203.png";
import image204 from "./image204.png";
import image205 from "./image205.png";
import image206 from "./image206.png";

import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Bangles", price: 559, discount: "(15% off)", image: image183 },
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image: image184 },
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image185 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image186 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image: image187 },
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image188 },
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image189 },
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image190 },
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image191 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image192 },
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image193 },
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image: image194 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image: image195 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image196 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image197 },
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image198 },
  { id: 17, name: "Bangles", price: 559, discount: "(15% off)", image: image199 },
  { id: 18, name: "Bangles", price: 559, discount: "(15% off)", image: image200 },
  { id: 19, name: "Bangles", price: 559, discount: "(15% off)", image: image201 },
  { id: 20, name: "Bangles", price: 559, discount: "(15% off)", image: image202 },
  { id: 21, name: "Bangles", price: 559, discount: "(15% off)", image: image203 },
  { id: 22, name: "Bangles", price: 559, discount: "(15% off)", image: image204 },
  { id: 23, name: "Bangles", price: 559, discount: "(15% off)", image: image205 },
  { id: 24, name: "Bangles", price: 559, discount: "(15% off)", image: image206 },
];


const Bracelet = () => {
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

export default Bracelet;


