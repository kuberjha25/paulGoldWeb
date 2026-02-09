import React, { useState } from "react";
import "../styling/Header.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = ({ onOpenPopup, onSuccess }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    closeMenu();
    navigate("/");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("hero-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("hero-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePartnerClick = () => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("contact-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* LOGO */}
          <div className="logo-section" onClick={handleLogoClick}>
            <div className="company-logo">
              <img src="/logo.webp" alt="Paul Gold Logo" />
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/" onClick={handlePartnerClick}>
                  Partner with us
                </Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms-condition" onClick={closeMenu}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="cta-button"
            onClick={onOpenPopup}
          >
            Download App
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <button className="mobile-close-btn" onClick={closeMenu}>
          <FiX />
        </button>
        <ul>
          <li>
            <Link to="/" onClick={handlePartnerClick}>Partner with us</Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/terms-condition" onClick={closeMenu}>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <button 
              className="mobile-cta-button"
              onClick={() => {
                onOpenPopup();
                closeMenu();
              }}
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