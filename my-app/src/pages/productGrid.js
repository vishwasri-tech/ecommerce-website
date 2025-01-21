
import React from "react";
import "./productGrid.css";

// Import images from the local path
import image01 from "../assets/image01.png";
import image02 from "../assets/image02.png";
import image03 from "../assets/image03.png";
import image04 from "../assets/image04.png";
import image05 from "../assets/image05.png";
import image06 from "../assets/image06.png";
import image07 from "../assets/image07.png";
import image08 from "../assets/image08.png";
import image09 from "../assets/image09.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";
import image21 from "../assets/image21.png";
import image22 from "../assets/image22.png";
import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import image25 from "../assets/image25.png";
import image26 from "../assets/image26.png";
import image27 from "../assets/image27.png";
import image28 from "../assets/image28.png";
import Footer from "../components/Footer";

const products = [
  { id: 1, image: image01, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 2, image: image02, title: "Bangles", price: "Rs. 250", discount: "25% (Off)" },
  { id: 3, image: image03, title: "Bangles", price: "Rs. 300", discount: "20% (Off)" },
  { id: 4, image: image04, title: "Bangles", price: "Rs. 280", discount: "10% (Off)" },
  { id: 5, image: image05, title: "Bangles", price: "Rs. 230", discount: "15% (Off)" },
  { id: 6, image: image06, title: "Bangles", price: "Rs. 220", discount: "5% (Off)" },
  { id: 7, image: image07, title: "Bangles", price: "Rs. 400", discount: "35% (Off)" },
  { id: 8, image: image08, title: "Bangles", price: "Rs. 500", discount: "50% (Off)" },
  { id: 9, image: image09, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 10, image: image10, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 11, image: image11, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 12, image: image12, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 13, image: image13, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 14, image: image14, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 15, image: image15, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 16, image: image16, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 17, image: image17, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 18, image: image18, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 19, image: image19, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 20, image: image20, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 21, image: image21, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 22, image: image22, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 23, image: image23, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 24, image: image24, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 25, image: image25, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 26, image: image26, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 27, image: image27, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
  { id: 28, image: image28, title: "Bangles", price: "Rs. 210", discount: "30% (Off)" },
 
];

const ProductGrid = () => {
  return (
  
    <div className="container">
      <div className="container-content">
      <h2>You may also like</h2></div>
      <div className="grid">
        {products.map((product) => (
  
              // <div className="card" key={product.id}>
              //   <img src={product.image} alt={product.title} />
              //   <h3>{product.title}</h3>
              //   <div className="encoder">
              //     <p className="product-description">Women Designer Bangle Set....</p>
              //     <p>{product.price}</p>
              //     <p className="discount">{product.discount}</p>
              //   </div>
              //   <button>Add to cart</button>
              // </div>
         
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <div className="encoder">
                  <p className="product-description">Women Designer Bangle Set....</p>
                  <div className="price-discount">
                    <p>{product.price}</p>
                    <p className="discount">{product.discount}</p>
                  </div>
                </div>
                <button>Add to cart</button>
              </div>
        ))}
      </div>
    </div>
    
    
   
  );
};

export default ProductGrid;
