// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TopNavbar from './components/Navbar/TopNavbar';
// import BottomNavbar from './components/Navbar/BottomNavbar';
// import DazzlingDesigns from './components/DazzlingDesigns';
// import JewelryShowcase from './components/Design';
// import Wishlist from './pages/Wishlist';
// import Cart from './pages/Cart';
// import Signup from './pages/Signup';
// import All from './pages/All';
// import BestSellers from './pages/BestSellers';
// import Necklace from './pages/Necklace';
// import Chains from './pages/Chains';
// import Bracelet from './pages/Bracelet';
// import EarRings from './pages/EarRings';
// import Bangles from './pages/Bangles';
// import Rings from './pages/Rings';
// import Login from './pages/Login';
// import Address from './pages/Address';
// import PaymentPage from './pages/PaymentPage';
// import OrderConfirmation from './pages/OrderConfirmation';

// function App() {
//   return (
//     <Router>
//       <TopNavbar />
//       <BottomNavbar />

//       {/* Routes to display components based on the URL */}
//       <Routes>
//         {/* Default route */}
//         <Route 
//           path="/" 
//           element={
//             <>
//               <DazzlingDesigns />
//               <JewelryShowcase />
             
//             </>
//           } 
//         />
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/all" element={<All />} />
//         <Route path="/best-sellers" element={<BestSellers />} />
//         <Route path="/necklace" element={<Necklace />} />
//         <Route path="/chains" element={<Chains />} />
//         <Route path="/bracelet" element={<Bracelet />} />
//         <Route path="/ear-rings" element={<EarRings />} />
//         <Route path="/bangles" element={<Bangles />} />
//         <Route path="/rings" element={<Rings />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/address" element={<Address />} />
//         <Route path="/payment" element={<PaymentPage />} />
//         <Route path="/order-confirmation" element={<OrderConfirmation />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopNavbar from './components/Navbar/TopNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
import DazzlingDesigns from './components/DazzlingDesigns';
import JewelryShowcase from './components/Design';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Whole from './pages/Whole';
import BestSellers from './pages/BestSellers';
import Necklace from './pages/Necklace';
import Chains from './pages/Chains';
import Bracelet from './pages/Bracelet';
import EarRings from './pages/EarRings';
import Bangles from './pages/Bangles';
import Rings from './pages/Rings';
import Login from './pages/Login';
import Address from './pages/Address';
import PaymentPage from './pages/PaymentPage';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Separate component for content to use useLocation
const AppContent = () => {
  const location = useLocation();

  // Define the routes where navbars should be hidden
  const hideNavbarsRoutes = ['/signup', '/cart','/address','/login','/payment','/order-confirmation'];

  return (
    <>
      {/* Conditionally render navbars */}
      {!hideNavbarsRoutes.includes(location.pathname) && (
        <>
          <TopNavbar />
          <BottomNavbar />
        </>
      )}

      {/* Routes to display components based on the URL */}
      <Routes>
       
        <Route 
          path="/" 
          element={
            <>
              <DazzlingDesigns />
              <JewelryShowcase />
            </>
          } 
        />
        
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all" element={<Whole/>} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/chains" element={<Chains />} />
        <Route path="/bracelet" element={<Bracelet />} />
        <Route path="/ear-rings" element={<EarRings />} />
        <Route path="/bangles" element={<Bangles />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        {/* <Route path='/'element={<DazzlingDesigns/>}/>
        <Route path ='/'element ={<JewelryShowcase/>}/> */}
      </Routes>
    </>
  );
};

export default App;

