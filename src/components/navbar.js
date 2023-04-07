import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
        <li><Link to="/" style={{ textDecoration: 'none' }}><button style={{ border: 'none', backgroundColor: 'transparent', color: 'white' }}>Home</button></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
