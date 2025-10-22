import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import AncarLogo from "/src/assets/media/AncarLogo.7ad7473b37e000adbeb6.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuToggleClose = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="home" className='boxNav'>
      <nav className="App-nav">

      <img className='App-logo navLogoMobile' src={AncarLogo} alt="Ancar Motors Inc Logo" />
      <span className='navCompanyName navLogoMobile'>Ancar Motors Inc.</span>

        <div className={`menu-toggle ${menuOpen ? 'change' : ''}`} onClick={handleMenuToggleOpen}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
       
        <img className='App-logo navLogoWeb' src={AncarLogo} alt="Ancar Motors Inc Logo" />
        <span className='navCompanyName navLogoWeb'>Ancar Motors Inc.</span>
       
          <Link className='Order-list' to="/HomeNav" onClick={handleMenuToggleClose}>
            <div className='textnav-size'>HOME<hr/></div>
          </Link>

          <Link className='Order-list' to="/InventoryNav" onClick={handleMenuToggleClose}>
            <div className='textnav-size'>UNITS STOCK<hr/></div>
          </Link>

          <Link className='Order-list' to="/BrandAvailableNav" onClick={handleMenuToggleClose}>
            <div className='textnav-size'>PARTNERSHIPS<hr/></div>
          </Link>

          <Link className='Order-list' to="/Branches" onClick={handleMenuToggleClose}>
            <div className='textnav-size'>BRANCHES<hr/></div>
          </Link>

          <Link className='Order-list' to="/FaqContentNav" onClick={handleMenuToggleClose}>
            <div className='textnav-size'>FAQ's<hr/></div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;