// import React from "react";
// import "./Design.css";
// import ringBackground from "./bang.png"; 
// import coupleImage from "./gift2.png"; 
// import giftImage from "./gift3.png"; 

// const JewelryShowcase = () => {
//   return (
//     <div>
//       {/* Expression of Love Section */}
//       <div
//         className="love-expression-section"
//         style={{
//           backgroundImage: `url(${ringBackground})`,
//         }}
//       >
//         <h2 className="love-expression-title">Expression of love</h2>
//         <div className="love-expression-container">
//           <div className="love-text">
//             <h3 className="love-heading">A symbol of promises made to last</h3>
//             <p className="love-description">
//               Celebrate life’s meaningful moments with our<br/> exquisite rings,
//               crafted to symbolize promises that<br/> endure. Discover timeless
//               designs that capture the <br/>essence of commitment and elegance.
//             </p>
//             <button className="love-button">Browse Collection</button>
//           </div>
//         </div>
//       </div>

//       {/* Elegant Gifts Section */}
//       <div className="elegant-gifts-section">
//         <h2 className="gifts-title">Gift Elegance to Your Loved One</h2>
//         <p className="gifts-description">
//           Celebrate the special moments with timeless<br/> jewelry that speaks from
//           the heart. Whether it’s a <br/>dazzling necklace, elegant earrings, or a<br/>
//           charming bracelet, our exclusive collection has<br/> the perfect piece to
//           express your love.
//         </p>
//         <p className="gifts-description11">
//         Make every occasion unforgettable with a gift that<br/> lasts forever. Explore our handcrafted designs and <br/>find the sparkle that matches their smile.
//         </p>
//         <div className="gifts-images-container">
//           <div className="gift-image-item">
//             <img src={coupleImage} alt="Couple" />
//           </div>
//           <div className="gift-image-item">
//             <img src={giftImage} alt="Gift Box" />
//           </div>
//         </div>
//         <p className="gifts-footer">Discover the Perfect Gift Today!</p>
        
//       </div>
//     </div>
//   );
// };

// export default JewelryShowcase;



import React from "react";
import "./Design.css";
import ringBackground from "./bang.png"; 
import coupleImage from "./gift2.png"; 
import giftImage from "./gift3.png"; 
import aboutImage1 from "./about1.png";
import aboutImage2 from "./about2.png";
import customerImage1 from "./customer1.png";
import customerImage2 from "./customer2.png";
import customerImage3 from "./customer3.png";
import customerImage4 from "./customer5.png";
import customerImage5 from "./customer4.png";
import Footer from "./Footer";


const JewelryShowcase = () => {
  return (
    <div>
      {/* Existing Sections */}
      <div
        className="love-expression-section"
        style={{
          backgroundImage: `url(${ringBackground})`,
        }}
      >
        <h2 className="love-expression-title">Expression of love</h2>
        <div className="love-expression-container">
          <div className="love-text">
            <h3 className="love-heading">A symbol of promises made to last</h3>
            <p className="love-description">
              Celebrate life’s meaningful moments with our<br /> exquisite rings,
              crafted to symbolize promises that<br /> endure. Discover timeless
              designs that capture the <br />essence of commitment and elegance.
            </p>
            <button className="love-button">Browse Collection</button>
          </div>
        </div>
      </div>

      <div className="elegant-gifts-section">
        <h2 className="gifts-title">Gift Elegance to Your Loved One</h2>
        <p className="gifts-description">
          Celebrate the special moments with timeless<br /> jewelry that speaks from
          the heart. Whether it’s a <br />dazzling necklace, elegant earrings, or a<br />
          charming bracelet, our exclusive collection has<br /> the perfect piece to
          express your love.
        </p>
        <p className="gifts-description11">
          Make every occasion unforgettable with a gift that<br /> lasts forever. Explore
          our handcrafted designs and <br />find the sparkle that matches their smile.
        </p>
        <div className="gifts-images-container">
          <div className="gift-image-item">
            <img src={coupleImage} alt="Couple" />
          </div>
          <div className="gift-image-item">
            <img src={giftImage} alt="Gift Box" />
          </div>
        </div>
        <p className="gifts-footer">Discover the Perfect Gift Today!</p>
      </div>

      {/* New Sections */}
      <div className="about-us-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-images">
            <img src={aboutImage1} alt="About Us 1" className="about-image" />
            <img src={aboutImage2} alt="About Us 2" className="about-image" />
          </div>
          <div className="about-text">
            <p>
              At EternaJewels, we believe in celebrating life’s<br/> most cherished
              moments with jewelry that tells<br/> your unique story. Our timeless designs
              are<br/> crafted with precision, blending elegance with<br/> quality to create
              pieces that last a lifetime.
            </p>
            <p>
              From dazzling rings and necklaces to intricate<br/> bracelets and earrings,
              our collection<br/> embodies sophistication and grace. Whether <br/>you’re marking
              a special occasion or simply<br/> indulging in beauty, EternaJewels offers<br/>
              unmatched craftsmanship and designs that<br/> inspire.
            </p>
          </div>
        </div>
      </div>

      <div className="happy-customers-section">
        <h2 className="section-title">Happy Customers</h2>
        <div className="customer-images">
          <img src={customerImage1} alt="Customer 1" className="customer-image" />
          <img src={customerImage2} alt="Customer 2" className="customer-image" />
          <img src={customerImage3} alt="Customer 3" className="customer-image" />
          <img src={customerImage4} alt="Customer 4" className="customer-image" />
          <img src={customerImage5} alt="Customer 5" className="customer-image" />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
   
  );
};

export default JewelryShowcase;

