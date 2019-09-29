import React from 'react';

import './navbar.styles.scss';



const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1 className="nav-logo">CLICKY GAME</h1>
      <h2 className="nav-note">Click an image to begin!</h2>
    </div>
  )
}

export default Navbar;