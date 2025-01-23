import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

function BottomNavbar() {
  return (
    <div className="bottom-navbar">
      <ul className="nav-links">
        <li><Link to="/all">All</Link></li>
        <li><Link to="/best-sellers">Best Sellers</Link></li>
        <li><Link to="/necklace">Necklace</Link></li>
        <li><Link to="/chains">Chains</Link></li>
        <li><Link to="/bracelet">Bracelet</Link></li>
        <li><Link to="/ear-rings">Ear Rings</Link></li>
        <li><Link to="/bangles">Bangles</Link></li>
        <li><Link to="/rings">Rings</Link></li>
      </ul>
    </div>
  );
}

export default BottomNavbar;
