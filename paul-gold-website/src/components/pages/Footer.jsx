import React from "react";
import "../styling/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pg-footer">
      <div className="pg-footer-container">
        <div className="pg-footer-grid">
          {/* LEFT : LOGO */}
          <div className="pg-footer-logo">
            <img src="/logo.webp" alt="Paul Gold Logo" />
          </div>

          {/* ADDRESS */}
          <div className="pg-footer-block">
            <h4>
              Paul Gold - A product of
              <br />
              Paul Fincare Pvt Ltd
            </h4>
            <p>
              3rd Floor, Industrial Plot
              <br />
              No. 161 Industrial Area,
              <br />
              Phase II Chandigarh Chandigarh India 160002
            </p>
          </div>

          {/* EMAIL */}
          <div className="pg-footer-block">
            <h4>Email</h4>
            <p>support@mayaa.money</p>
            <p>info@mayaa.money</p>
          </div>

          {/* TOLL FREE */}
          <div className="pg-footer-block">
            <h4>Phone</h4>
            <p className="bold">0172-5041754</p>
            <p>(9AM–8PM IST, Mon–Sat)</p>
          </div>

          {/* SOCIAL */}
          <div className="pg-footer-block">
            <h4>Follow Us</h4>
            <div className="pg-socials">
              <a href="#" aria-label="Facebook" color="#FFE1B6">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pg-footer-bottom">
          © Paul Gold - Paul Fincare Pvt Ltd 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
