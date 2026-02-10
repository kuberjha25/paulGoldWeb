import React from "react";
import "../styling/HeroSection.css";

const HeroSection = () => {
  const handleGetStarted = () => {
    // Add your get started logic here
    document.getElementById("buy-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleLearnMore = () => {
    // Add your learn more logic here
   document.getElementById("contact-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="hero-section" className="hero-section">
    <div className="body-container">
      {/* Horizontal line at bottom */}
      {/* <div className="horizontal-line"></div> */}

      <div className="container">
        <div className="content-wrapper">
          {/* Left Content Section */}
          <div className="left-content">
            <div className="content-inner">
              {/* Main Heading */}
              <h1 className="main-heading">
                The smartest way to invest in{" "}
                <span className="gold-text">24K Digital Gold</span> & Silver.
              </h1>

              {/* Subheading */}
              <p className="subheading">
                Invest in pure 24K gold and silver starting from just ₹10.
                Secure, transparent, and stored in world-class bank vaults.
              </p>

              {/* Button Group */}
              <div className="button-group">
                <button className="btn-primary" onClick={handleGetStarted}>
                  Get Started
                </button>
                <button className="btn-secondary" onClick={handleLearnMore}>
                  Learn More
                </button>
              </div>

              {/* Stats Section (Optional) */}
              <div className="stats-section">
                <div className="stat-item">
                  <img src="5.webp" alt="Gold Bar" className="stat-icon" />
                  <div>
                    <h3>24K</h3>
                    <p>Pure Gold</p>
                  </div>
                </div>

                <div className="stat-item-silver">
                  <img
                    src="7.png"
                    alt="Silver Bar"
                    className="stat-icon"
                  />
                  <div>
                    <h3>999</h3>
                    <p>Silver Purity</p>
                  </div>
                </div>
                {/* <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Instant Liquidity</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="right-image">
            <div className="image-container">
              <img
                src="9.svg"
                alt="Gold Investment Illustration"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
