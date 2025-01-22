import React from "react";
import "./Bangles.css";
import image263 from "./image263.png";
import image264 from "./image264.png";
import image265 from "./image265.png";
import image266 from "./image266.png";
import image267 from "./image267.png";
import image268 from "./image268.png";
import image269 from "./image269.png";
import image270 from "./image270.png";
import image271 from "./image271.png";
import image272 from "./image272.png";
import image273 from "./image273.png";
import image274 from "./image274.png";
import image275 from "./image275.png";
import image276 from "./image276.png";
import image277 from "./image277.png";
import image278 from "./image278.png";
import image279 from "./image279.png";
import image280 from "./image280.png";
import image281 from "./image281.png";
import image282 from "./image282.png";
import image283 from "./image283.png";
import image284 from "./image284.png";
import image285 from "./image285.png";
import image286 from "./image286.png";
import image287 from "./image287.png";
import image288 from "./image288.png";
import image289 from "./image289.png";
import image290 from "./image290.png";
import image291 from "./image291.png";
import image292 from "./image292.png";
import image293 from "./image293.png";
import image294 from "./image294.png";
import image295 from "./image295.png";
import image296 from "./image296.png";
import image297 from "./image297.png";
import image298 from "./image298.png";

import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Bangles", price: 559, discount: "(15% off)", image: image263 },
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image: image264 },
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image265 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image266 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image: image267 },
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image268 },
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image269 },
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image270 },
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image271 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image272 },
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image273 },
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image: image274 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image: image275 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image276 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image277 },
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image278 },
  { id: 17, name: "Bangles", price: 559, discount: "(15% off)", image: image279 },
  { id: 18, name: "Bangles", price: 559, discount: "(15% off)", image: image280 },
  { id: 19, name: "Bangles", price: 559, discount: "(15% off)", image: image281 },
  { id: 20, name: "Bangles", price: 559, discount: "(15% off)", image: image282 },
  { id: 21, name: "Bangles", price: 559, discount: "(15% off)", image: image283 },
  { id: 22, name: "Bangles", price: 559, discount: "(15% off)", image: image284 },
  { id: 23, name: "Bangles", price: 559, discount: "(15% off)", image: image285 },
  { id: 24, name: "Bangles", price: 559, discount: "(15% off)", image: image286 },
  { id: 25, name: "Bangles", price: 559, discount: "(15% off)", image: image287 },
  { id: 26, name: "Bangles", price: 559, discount: "(15% off)", image: image288 },
  { id: 27, name: "Bangles", price: 559, discount: "(15% off)", image: image289 },
  { id: 28, name: "Bangles", price: 559, discount: "(15% off)", image: image290 },
  { id: 29, name: "Bangles", price: 559, discount: "(15% off)", image: image291 },
  { id: 30, name: "Bangles", price: 559, discount: "(15% off)", image: image292 },
  { id: 31, name: "Bangles", price: 559, discount: "(15% off)", image: image293 },
  { id: 32, name: "Bangles", price: 559, discount: "(15% off)", image: image294 },
  { id: 33, name: "Bangles", price: 559, discount: "(15% off)", image: image295 },
  { id: 34, name: "Bangles", price: 559, discount: "(15% off)", image: image296 },
  { id: 35, name: "Bangles", price: 559, discount: "(15% off)", image: image297 },
  { id: 36, name: "Bangles", price: 559, discount: "(15% off)", image: image298 },
];




const Bangles= () => {
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
            <div className="encoder2">
                  <p className="product-description">Women Designer Bangle Set....</p>
                  </div>
            <p>₹ {product.price} <span>{product.discount}</span></p>
          </div>
        ))}
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Bangles;



