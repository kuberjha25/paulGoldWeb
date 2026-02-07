import React, { useState } from 'react';
import '../styling/Header.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadClick = () => {
    // Add your download app logic here
    alert('Download App clicked!');
    closeMenu();
  };

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Mobile Menu Button */}
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo Section */}
          <div className="logo-section">
            <div className="company-logo">
              <img src="/logo.webp" alt="Paul Gold Logo" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <ul>
              <li><a href="#partner" onClick={closeMenu}>Partner with us</a></li>
              <li><a href="#about" onClick={closeMenu}>About Us</a></li>
              <li><a href="#terms" onClick={closeMenu}>Terms & Conditions</a></li>
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <button className="cta-button" onClick={handleDownloadClick}>
            Download App
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-close-btn" 
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FiX />
        </button>
        <ul>
          <li><a href="#partner" onClick={closeMenu}>Partner with us</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#terms" onClick={closeMenu}>Terms & Conditions</a></li>
          <li>
            <button 
              className="mobile-cta-button" 
              onClick={handleDownloadClick}
            >
              Download App
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;