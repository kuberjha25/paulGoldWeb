import React, { useState } from "react";
import "../styling/BuySection.css";
import { FaGift, FaExchangeAlt, FaPiggyBank, FaArrowUp } from "react-icons/fa";

const BuySection = () => {
  const [metal, setMetal] = useState("gold");
  const [weight, setWeight] = useState(10);
  const [showPopup, setShowPopup] = useState(false);
  const [contactMode, setContactMode] = useState("phone"); // phone | email
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const APP_LINKS = {
    ios: "#", // later replace with App Store link
    android: "#", // later replace with Play Store link
  };
  //   const APP_LINKS = {
  //   ios: import.meta.env.VITE_APPSTORE_URL,
  //   android: import.meta.env.VITE_PLAYSTORE_URL,
  // };

  const pricePerGramGold = 1599.5;
  const pricePerGramSilver = 200.25;
  const amount = (
    weight * (metal === "gold" ? pricePerGramGold : pricePerGramSilver)
  ).toFixed(4);

  return (
    <section id="buy-section" className="buy-section">
      <div className="buy-container">
        {/* LEFT */}
        <div className="buy-left">
          <h1>
            Get access to the safest way
            <br />
            of procuring Gold / Silver
          </h1>

          <p>
            We at DigiGold want to make your gold journey simple, transparent
            and trustworthy so that you can get the optimum output of your
            savings.
          </p>

          <div className="feature-row">
            <div className="feature-box">
              <FaGift />
              <span>Gift</span>
            </div>
            <div className="feature-box">
              <FaExchangeAlt />
              <span>Convert</span>
            </div>
            <div className="feature-box">
              <FaPiggyBank />
              <span>SIP</span>
            </div>
            <div className="feature-box">
              <FaArrowUp />
              <span>Sell</span>
            </div>
          </div>

          <div className="activity">
            <span className="dot" />3 people bought 2.8463gm gold in the last
            hour
          </div>

          <div className="store-buttons">
            <a
              href={APP_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
              />
            </a>

            <a
              href={APP_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="buy-card">
          <div className="tabs">
            <button
              className={metal === "gold" ? "active" : ""}
              onClick={() => setMetal("gold")}
            >
              GOLD
            </button>
            <button
              className={metal === "silver" ? "active" : ""}
              onClick={() => setMetal("silver")}
            >
              SILVER
            </button>
          </div>

          <div className="price-row">
            <div className="price-left">
              {/* <div className="bar-icon">🪙</div> */}
              {metal === "gold" ? (
                <img src="goldbar.png" className="gold-bar-image" />
              ) : (
                <img src="silverbar.png" className="gold-bar-image" />
              )}
              <div>
                <h3>Buying Price</h3>
                <span className="purity">
                  {metal === "gold" ? "24K 99.9%" : "999 Purity"}
                </span>
              </div>
            </div>

            <div className="price-right">
              <span className="price">
                ₹{metal === "gold" ? pricePerGramGold : pricePerGramSilver}/g
              </span>
              <span className="live">
                <span className="live-dot" /> Live Price
              </span>
            </div>
          </div>

          <div className="calc-box">
            <div>
              <label>Weight (gms)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="equals">⇄</div>

            <div>
              <label>Amount</label>
              <input value={`₹${amount}`} readOnly />
            </div>
          </div>

          <button className="buy-btn" onClick={() => setShowPopup(true)}>
            BUY {metal.toUpperCase()}
          </button>

          <p className="note">Buy 24K 999 purity guaranteed by PML</p>
        </div>
      </div>

      {/* TOP ALERT */}
      {showAlert && (
        <div className="top-alert">
          <span className="tick">✔</span>
          App link sent successfully
        </div>
      )}
      {showPopup && (
        <>
          <div className="z-popup-overlay">
            <div className="z-popup">
              {/* CLOSE */}
              <button className="z-close" onClick={() => setShowPopup(false)}>
                ✕
              </button>

              {/* LEFT IMAGE */}
              <div className="z-left">
                <img src="Dashboard.svg" alt="Paul Gold App" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="z-right">
                <h2>Get the Paul Gold App</h2>
                <p>
                  We will send you a link, open it on your phone to download the
                  app
                </p>

                {/* TOGGLE */}
                <div className="z-toggle">
                  <label
                    className={`z-radio ${contactMode === "phone" ? "active" : ""}`}
                    onClick={() => {
                      setContactMode("phone");
                      setInputValue("");
                    }}
                  >
                    <span className="radio-circle" />
                    <span className="radio-text">Phone</span>
                  </label>

                  <label
                    className={`z-radio ${contactMode === "email" ? "active" : ""}`}
                    onClick={() => {
                      setContactMode("email");
                      setInputValue("");
                    }}
                  >
                    <span className="radio-circle" />
                    <span className="radio-text">Email</span>
                  </label>
                </div>

                {/* INPUT */}
                {/* INPUT */}
                <div className="z-input-row">
                  {contactMode === "phone" && (
                    <span className="country">+91</span>
                  )}
                  <input
                    type={contactMode === "phone" ? "tel" : "email"}
                    placeholder={
                      contactMode === "phone"
                        ? "Enter mobile number"
                        : "Enter email address"
                    }
                    value={inputValue}
                    maxLength={contactMode === "phone" ? 10 : undefined}
                    onChange={(e) => {
                      let val = e.target.value;

                      if (contactMode === "phone") {
                        val = val.replace(/\D/g, "");
                      }

                      setInputValue(val);
                    }}
                    className="z-input"
                  />

                  {/* SEPARATE SHARE BUTTON */}
                  <button
                    className="z-share-btn"
                    onClick={() => {
                      if (contactMode === "phone") {
                        if (inputValue.length !== 10) {
                          alert(
                            "Please enter a valid 10 digit Indian mobile number",
                          );
                          return;
                        }
                      } else {
                        if (!/^\S+@\S+\.\S+$/.test(inputValue)) {
                          alert("Please enter a valid email address");
                          return;
                        }
                      }

                      // SUCCESS FLOW
                      setShowPopup(false);
                      setShowAlert(true);
                      setInputValue("");

                      setTimeout(() => {
                        setShowAlert(false);
                      }, 2500);
                    }}
                  >
                    Share App Link
                  </button>
                </div>

                {/* STORE BUTTONS */}
                <div className="z-store">
                  <a href={APP_LINKS.android} target="_blank">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                    />
                  </a>
                  <a href={APP_LINKS.ios} target="_blank">
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default BuySection;
