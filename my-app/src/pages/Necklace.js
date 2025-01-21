import React from "react";
import "./Necklace.css";
import image159 from "./image159.png";
import image160 from "./image160.png";
import image161 from "./image161.png";
import image162 from "./image162.png";
import image163 from "./image163.png";
import image164 from "./image164.png";
import image165 from "./image165.png";
import image166 from "./image166.png";
import image167 from "./image167.png";
import image168 from "./image168.png";
import image169 from "./image169.png";
import image170 from "./image170.png";
import image171 from "./image171.png";
import image172 from "./image172.png";
import image173 from "./image173.png";
import image174 from "./image174.png";
import image175 from "./image175.png";
import image176 from "./image176.png";
import image177 from "./image177.png";
import image178 from "./image178.png";
import image179  from "./image179.png";
import image180 from "./image180.png";
import image181 from "./image181.png";
import image182 from "./image182.png";
import Footer from "../components/Footer";


const products = [
  { id: 1, name: "Bangles", price: 559, discount: "(15% off)", image: image159},
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image:  image160},
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image161 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image162 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image:  image163},
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image164},
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image165 },
  
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image166 },
  
  
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image167 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image168 },
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image169},
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image: image170 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image:image171 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image172 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image173 },
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image174},
  { id: 17, name: "Bangles", price: 559, discount: "(15% off)", image: image175},
  { id: 18, name: "Bangles", price: 559, discount: "(15% off)", image: image176 },
  { id: 19, name: "Bangles", price: 559, discount: "(15% off)", image:image177},
  { id: 20, name: "Bangles", price: 559, discount: "(15% off)", image: image178 },
  { id: 21, name: "Bangles", price: 559, discount: "(15% off)", image: image179 },
  { id: 22, name: "Bangles", price: 559, discount: "(15% off)", image: image180},
  { id: 23, name: "Bangles", price: 559, discount: "(15% off)", image:  image181},
  { id: 24, name: "Bangles", price: 559, discount: "(15% off)", image:  image182},

  
];

const Necklace = () => {
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

export default Necklace;


