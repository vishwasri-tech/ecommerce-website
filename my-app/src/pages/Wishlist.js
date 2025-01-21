import React from 'react';
import './Wishlist.css';
import image100 from "./necklace1.png";
import image101 from "./image101.png";
import image102 from "./image102.png";
import image103 from "./image103.png";
import image104 from "./image104.png";
import image105 from "./image105.png";
import image106 from "./image106.png";
import image107 from "./image107.png";
import image108 from "./image108.png";
import image109 from "./image109.png";
import image110 from "./image110.png";
import image111 from "./image111.png";
import image112 from "./image112.png";
import image113 from "./image113.png";
import image114 from "./image114.png";
import Footer from "../components/Footer.js";



const Wishlist = () => {
  const items = [
    { id: 1, name: 'Necklace set', price: '$2,500', img: image100, },
    { id: 2, name: 'Necklace set', price: '$2,500', img: image101 },
    { id: 3, name: 'Couple rings', price: '$1,700', img: image102 },
    { id: 4, name: 'Blue bangles', price: '$5,505', img: image103 },
    { id: 5, name: 'Stone Bracelet', price: '$3,000', img: image104 },
    { id: 6, name: 'Leaf Bangles', price: '$1,500', img: image105 },
    { id: 7, name: 'Pearl chain', price: '$1,000', img:image106  },
    { id: 8, name: 'Earring set', price: '$2,200', img: image107},
    { id: 9, name: 'Necklace set', price: '$1,500', img: image108 },
    { id: 10, name: 'Blue bangles', price: '$5,505', img: image109 },
    { id: 11, name: 'Stone Bracelet', price: '$3,000', img: image110 },
    { id: 12, name: 'Leaf Bangles', price: '$1,500', img: image111 },
    { id: 13, name: 'Pearl chain', price: '$1,000', img: image112 },
    { id: 14, name: 'Earring set', price: '$2,200', img: image113},
    { id: 15, name: 'Necklace set', price: '$1,500', img: image114},
  ];

  return (
    <>
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      <div className="wishlist-grid">
        {items.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <img src={item.img} alt={item.name} className="wishlist-image" />
            <h3>{item.name}</h3>
            <p className="price">{item.price} <span>(incl. tax)</span></p>
            <button className="add-to-cart">Add to cart</button>
          </div>
        ))}
      </div>
    
   
    </div>
    <Footer/>
    </>
  );
};

export default Wishlist;

