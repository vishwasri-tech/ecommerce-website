import React from "react";
import "./Chains.css";
import image115 from "./image115.png";
import image116 from "./image116.png";
import image117 from "./image117.png";
import image118 from "./image118.png";
import image119 from "./image119.png";
import image120 from "./image120.png";
import image121 from "./image121.png";
import image122 from "./image122.png";
import image123 from "./image123.png";
import image124 from "./image124.png";
import image125 from "./image125.png";
import image126 from "./image126.png";
import image127 from "./image127.png";
import image128 from "./image128.png";
import image129 from "./image129.png";
import image130 from "./image130.png";
import image131 from "./image131.png";
import image132 from "./image132.png";
import image133 from "./image133.png";
import image134 from "./image134.png";
import image135 from "./image135.png";
import image136 from "./image136.png";
import image137 from "./image137.png";
import image138 from "./image138.png";
import image139 from "./image139.png";
import image140 from "./image140.png";
import image141 from "./image141.png";
import image142 from "./image142.png";

const products = [
  { id: 1, name: "Bangles", price: 559, discount: "(15% off)", image: image115},
  { id: 2, name: "Bangles", price: 559, discount: "(15% off)", image:  image116},
  { id: 3, name: "Bangles", price: 559, discount: "(15% off)", image: image117 },
  { id: 4, name: "Bangles", price: 559, discount: "(15% off)", image: image118 },
  { id: 5, name: "Bangles", price: 559, discount: "(15% off)", image:  image119},
  { id: 6, name: "Bangles", price: 559, discount: "(15% off)", image: image120},
  { id: 7, name: "Bangles", price: 559, discount: "(15% off)", image: image121 },
  { id: 8, name: "Bangles", price: 559, discount: "(15% off)", image: image122 },
  { id: 9, name: "Bangles", price: 559, discount: "(15% off)", image: image123 },
  { id: 10, name: "Bangles", price: 559, discount: "(15% off)", image: image124},
  { id: 11, name: "Bangles", price: 559, discount: "(15% off)", image: image125 },
  { id: 12, name: "Bangles", price: 559, discount: "(15% off)", image:image126 },
  { id: 13, name: "Bangles", price: 559, discount: "(15% off)", image: image127 },
  { id: 14, name: "Bangles", price: 559, discount: "(15% off)", image: image128 },
  { id: 15, name: "Bangles", price: 559, discount: "(15% off)", image: image129},
  { id: 16, name: "Bangles", price: 559, discount: "(15% off)", image: image130 },
  { id: 17, name: "Bangles", price: 559, discount: "(15% off)", image: image131 },
  { id: 18, name: "Bangles", price: 559, discount: "(15% off)", image:image132},
  { id: 19, name: "Bangles", price: 559, discount: "(15% off)", image: image133 },
  { id: 20, name: "Bangles", price: 559, discount: "(15% off)", image: image134 },
  { id: 21, name: "Bangles", price: 559, discount: "(15% off)", image: image135 },
  { id: 22, name: "Bangles", price: 559, discount: "(15% off)", image:  image136},
  { id: 23, name: "Bangles", price: 559, discount: "(15% off)", image:  image137},
  { id: 24, name: "Bangles", price: 559, discount: "(15% off)", image:  image138},
  { id: 25, name: "Bangles", price: 559, discount: "(15% off)", image: image139},
  { id: 26, name: "Bangles", price: 559, discount: "(15% off)", image:image140  },
  { id: 27, name: "Bangles", price: 559, discount: "(15% off)", image:image141},
  { id: 28, name: "Bangles", price: 559, discount: "(15% off)", image:  image142},
];

const Chains = () => {
  return (
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
  );
};

export default Chains;

