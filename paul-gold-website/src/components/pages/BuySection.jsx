import React, { useState, useRef, useEffect } from "react";
import "../styling/BuySection.css";
import { FaExchangeAlt } from "react-icons/fa";

const BuySection = ({ onOpenPopup, onSuccess, metalRates, loading }) => {
  const [metal, setMetal] = useState("gold");
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("");
  const [activeFeature, setActiveFeature] = useState(null);
  const [activeInput, setActiveInput] = useState("weight");
  const [isAmountFocused, setIsAmountFocused] = useState(false);

  const weightInputRef = useRef(null);
  const amountInputRef = useRef(null);

  const APP_LINKS = {
    ios: import.meta.env.VITE_APPSTORE_URL,
    android: import.meta.env.VITE_PLAYSTORE_URL,
  };

  const pricePerGramGold = metalRates?.gold?.buy_rate || 0.00;
  const pricePerGramSilver = metalRates?.silver?.buy_rate || 0.00;

  // Update amount when rates change
  // useEffect(() => {
  //   const pricePerGram = metal === "gold" ? pricePerGramGold : pricePerGramSilver;
  //   setAmount(weight * pricePerGram);
  // }, [metalRates, metal, weight, pricePerGramGold, pricePerGramSilver]);

  const features = [
    {
      id: 1,
      title: "Gift",
      description: "Send digital gold as a gift to your loved ones",
      icon: "4.webp",
    },
    {
      id: 2,
      title: "Convert",
      description: "Convert between different denominations",
      icon: "2.webp",
    },
    {
      id: 3,
      title: "SIP",
      description: "Start a Systematic Investment Plan in gold",
      icon: "8.png",
    },
    {
      id: 4,
      title: "Sell",
      description: "Sell your gold anytime at live market rates",
      icon: "6.webp",
    },
  ];

  const getPricePerGram = () =>
    metal === "gold" ? pricePerGramGold : pricePerGramSilver;

  const formatAmount = (value) => {
    if (!value) return "";
    return `₹${Number(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  const handleWeightChange = (e) => {
    const val = e.target.value;

    if (val === "") {
      setWeight("");
      setAmount("");
      return;
    }

    const numericValue = parseFloat(val);
    if (isNaN(numericValue)) return;

    const price = getPricePerGram();
    setWeight(val);
    setAmount((numericValue * price).toFixed(2));
  };

  const handleAmountChange = (e) => {
    const val = e.target.value;

    // Allow only numbers and ONE dot
    if (!/^\d*\.?\d*$/.test(val)) return;

    setAmount(val);

    if (val === "" || val === ".") {
      setWeight("");
      return;
    }

    const price = getPricePerGram();
    setWeight((parseFloat(val) / price).toFixed(4));
  };

  const handleSwap = () => {
    if (activeInput === "weight") {
      amountInputRef.current?.focus();
      setActiveInput("amount");
    } else {
      weightInputRef.current?.focus();
      setActiveInput("weight");
    }
  };

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
            {features.map((feature) => (
              <div
                key={feature.id}
                className="feature-box"
                onClick={() =>
                  window.innerWidth <= 768 &&
                  setActiveFeature(
                    activeFeature === feature.id ? null : feature.id,
                  )
                }
                onMouseEnter={() =>
                  window.innerWidth > 768 && setActiveFeature(feature.id)
                }
                onMouseLeave={() =>
                  window.innerWidth > 768 && setActiveFeature(null)
                }
              >
                <div className="feature-icon-container">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="feature-icon"
                  />
                </div>
                <span className="feature-title">{feature.title}</span>

                {activeFeature === feature.id && (
                  <div className="feature-hover-tooltip">
                    <div className="tooltip-title">{feature.title}</div>
                    <div className="tooltip-description">
                      {feature.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="store-buttons">
            <a href={APP_LINKS.ios} target="_blank" rel="noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
              />
            </a>

            <a href={APP_LINKS.android} target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`buy-card ${
            metal === "silver" ? "silver-theme" : "gold-theme"
          }`}
        >
          <div className="tabs">
            <button
              className={metal === "gold" ? "active" : ""}
              onClick={() => {
                setMetal("gold");
                if (weight) {
                  setAmount((weight * pricePerGramGold).toFixed(2));
                }
              }}
            >
              GOLD
            </button>

            <button
              className={metal === "silver" ? "active" : ""}
              onClick={() => {
                setMetal("silver");
                if (weight) {
                  setAmount((weight * pricePerGramSilver).toFixed(2));
                }
              }}
            >
              SILVER
            </button>
          </div>

          <div className="price-row">
            <div className="price-left">
              <img
                src={metal === "gold" ? "5.webp" : "7.png"}
                alt={metal}
                className="gold-bar-image"
              />
              <div>
                <h3>Buying Price</h3>
                <span className="purity">
                  {metal === "gold" ? "24K 99.9%" : "999 Purity"}
                </span>
              </div>
            </div>

            <div className="price-right">
              <span className="price">₹{getPricePerGram().toFixed(2)}/g</span>
              <span className="live">
                <span className="live-dot" /> Live Price
              </span>
            </div>
          </div>

          <div className="calc-box">
            <div className="calc-input-group">
              <label>Weight (gms)</label>
              <input
                ref={weightInputRef}
                type="text"
                value={weight}
                onFocus={() => setActiveInput("weight")}
                onChange={handleWeightChange}
                placeholder="Enter weight"
              />
            </div>

            <button className="swap-button" onClick={handleSwap}>
              <FaExchangeAlt />
            </button>

            <div className="calc-input-group">
              <label>Amount (₹)</label>
              <input
                ref={amountInputRef}
                type="text"
                value={isAmountFocused ? amount : formatAmount(amount)}
                onFocus={() => {
                  setIsAmountFocused(true);
                  setActiveInput("amount");
                }}
                onBlur={() => setIsAmountFocused(false)}
                onChange={handleAmountChange}
                placeholder="Enter amount"
              />
            </div>
          </div>

          <button className="buy-btn" onClick={onOpenPopup}>
            BUY {metal.toUpperCase()}
          </button>

          <p className="note">Buy 24K 999 purity guaranteed by PML</p>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
