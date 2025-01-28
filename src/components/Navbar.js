import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
