import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/Navbar/TopNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
import DazzlingDesigns from './components/DazzlingDesigns';
import JewelryShowcase from './components/Design';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import All from './pages/All';
import BestSellers from './pages/BestSellers';
import Necklace from './pages/Necklace';
import Chains from './pages/Chains';
import Bracelet from './pages/Bracelet';
import EarRings from './pages/EarRings';
import Bangles from './pages/Bangles';
import Rings from './pages/Rings';
import Login from './pages/Login';
import Address from './pages/Address';

function App() {
  return (
    <Router>
      <TopNavbar />
      <BottomNavbar />

      {/* Routes to display components based on the URL */}
      <Routes>
        {/* Default route */}
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
        <Route path="/all" element={<All />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/chains" element={<Chains />} />
        <Route path="/bracelet" element={<Bracelet />} />
        <Route path="/ear-rings" element={<EarRings />} />
        <Route path="/bangles" element={<Bangles />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}

export default App;
