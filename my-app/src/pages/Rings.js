import React from "react";
import "./Rings.css";
import image231 from "./image231.png";
import image232 from "./image232.png";
import image233 from "./image233.png";
import image234 from "./image234.png";
import image235 from "./image235.png";
import image236 from "./image236.png";
import image237 from "./image237.png";
import image238 from "./image238.png";
import image239 from "./image239.png";
import image240 from "./image240.png";
import image241 from "./image241.png";
import image242 from "./image242.png";
import image243 from "./image243.png";
import image244 from "./image244.png";
import image245 from "./image245.png";
import image246 from "./image246.png";
import image247 from "./image247.png";
import image248 from "./image248.png";
import image249 from "./image249.png";
import image250 from "./image250.png";
import image251 from "./image251.png";
import image252 from "./image252.png";
import image253 from "./image253.png";
import image254 from "./image254.png";
import image255 from "./image255.png";
import image256 from "./image256.png";
import image257 from "./image257.png";
import image258 from "./image258.png";
import image259 from "./image259.png";
import image260 from "./image260.png";
import image261 from "./image261.png";
import image262 from "./image262.png";

import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Bangles", price: 559, discount: "(15% off)", image: image231 },
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image: image232 },
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image233 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image234 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image: image235 },
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image236 },
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image237 },
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image238 },
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image239 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image240 },
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image241 },
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image: image242 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image: image243 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image244 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image245 },
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image246 },
  { id: 17, name: "Bangles", price: 559, discount: "(15% off)", image: image247 },
  { id: 18, name: "Bangles", price: 559, discount: "(15% off)", image: image248 },
  { id: 19, name: "Bangles", price: 559, discount: "(15% off)", image: image249 },
  { id: 20, name: "Bangles", price: 559, discount: "(15% off)", image: image250 },
  { id: 21, name: "Bangles", price: 559, discount: "(15% off)", image: image251 },
  { id: 22, name: "Bangles", price: 559, discount: "(15% off)", image: image252 },
  { id: 23, name: "Bangles", price: 559, discount: "(15% off)", image: image253 },
  { id: 24, name: "Bangles", price: 559, discount: "(15% off)", image: image254 },
  { id: 25, name: "Bangles", price: 559, discount: "(15% off)", image: image255 },
  { id: 26, name: "Bangles", price: 559, discount: "(15% off)", image: image256 },
  { id: 27, name: "Bangles", price: 559, discount: "(15% off)", image: image257 },
  { id: 28, name: "Bangles", price: 559, discount: "(15% off)", image: image258 },
  { id: 29, name: "Bangles", price: 559, discount: "(15% off)", image: image259 },
  { id: 30, name: "Bangles", price: 559, discount: "(15% off)", image: image260 },
  { id: 31, name: "Bangles", price: 559, discount: "(15% off)", image: image261 },
  { id: 32, name: "Bangles", price: 559, discount: "(15% off)", image: image262 },
];




const Rings= () => {
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
            <div className="encoder8">
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

export default Rings;



