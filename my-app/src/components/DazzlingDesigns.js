


import React from "react";
import "./DazzlingDesigns.css";
import necklace from "./necklace.png";
import chains from "./chains.png";
import bracelet from "./bracelet.png";
import earrings from "./earrings.png";
import bangles from "./bangles.png";
import rings from "./rings.png";
import arrival1 from "./Arrival1.png";
import arrival2 from "./Arrival2.png";
import arrival3 from "./Arrival3.png";



const DazzlingDesigns = () => {
  return (
    <div>
      {/* Existing Dazzling Designs Section */}
      <div className="dazzling-container">
        <div className="dazzling-text">
          <h1 className="dazzling-title">Dazzling Designs</h1>
          <p className="dazzling-description">
            Explore our exquisite collection of <br /> handcrafted jewelry,
            where every piece is <br /> meticulously designed to captivate and{" "}
            <br />
            shine. From timeless classics to <br /> contemporary masterpieces,
            our dazzling <br /> designs are crafted with the finest materials{" "}
            <br /> to elevate your elegance.
          </p>
          <button className="dazzling-button">Explore Now</button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2 className="section-title">Categories</h2>
        <div className="categories">
          <div className="category">
            <img src={necklace} alt="Necklace" />
            <p>Necklace</p>
          </div>
          <div className="category">
            <img src={chains} alt="Chains" />
            <p>Chains</p>
          </div>
          <div className="category">
            <img src={bracelet}alt="Bracelet" />
            <p>Bracelet</p>
          </div>
          <div className="category">
            <img src={earrings}alt="Ear Rings" />
            <p>Ear Rings</p>
          </div>
          <div className="category">
            <img src={bangles} alt="Bangles" />
            <p>Bangles</p>
          </div>
          <div className="category">
            <img src={rings} alt="Rings" />
            <p>Rings</p>
          </div>
        </div>
      </div>

      {/* Stunning Arrivals Section */}
      <div className="stunning-arrivals-section">
        <h2 className="section-title">Stunning Arrivals</h2>
        <div className="arrivals">
          <div className="arrival">
            <img src={arrival1} alt="Arrival 1" />
          </div>
          <div className="arrival">
            <img src={arrival2} alt="Arrival 2" />
          </div>
          <div className="arrival">
            <img src={arrival3} alt="Arrival 3" />
          </div>
        
        </div>
       
      </div>
      
    </div>
  );
};

export default DazzlingDesigns;




