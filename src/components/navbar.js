import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none' }}>
        <li><button style={{ border: 'none', backgroundColor: 'transparent', color: 'white' }}>Login</button></li>
        <li><button style={{ border: 'none', backgroundColor: 'transparent', color: 'white' }}>Settings</button></li>
        <li><button style={{ border: 'none', backgroundColor: 'transparent', color: 'white' }}>About</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
