import React, { useState } from "react";
import "./AppLinkPopup.css";

const AppLinkPopup = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [contactMode, setContactMode] = useState("phone");
  const [inputValue, setInputValue] = useState("");
  
  const APP_LINKS = {
    ios: "https://apps.apple.com/in/app/maya-buy-gold-silver/id1533203377",
    android: "https://play.google.com/store/apps/details?id=com.mayaa&hl=en&gl=US",
  };
  
  if (!isOpen) return null;

  const handleSubmit = () => {
    if (contactMode === "phone") {
      if (inputValue.length !== 10) {
        alert("Please enter a valid 10 digit Indian mobile number");
        return;
      }
    } else {
      if (!/^\S+@\S+\.\S+$/.test(inputValue)) {
        alert("Please enter a valid email address");
        return;
      }
    }

    // SUCCESS FLOW
    const successMessage = `App link has been sent to your ${contactMode === "phone" ? "phone" : "email"}`;
    
    // Call parent's success callback
    if (onSuccess) {
      onSuccess(successMessage);
    }
    
    // Reset form
    setInputValue("");
    onClose();
  };

  const handleClose = () => {
    setInputValue("");
    onClose();
  };

  return (
    <>
      <div className="z-popup-overlay">
        <div className="z-popup">
          {/* LEFT IMAGE */}
          <div className="z-left">
            <img src="Dashboard.svg" alt="Paul Gold App" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="z-right">
            <h2>Get the Paul Gold App</h2>
            <p>
              We will send you a link, open it on your phone to download the app
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

            {/* INPUT CONTAINER */}
            <div className="z-input-container">
              {/* INPUT WITH COUNTRY CODE */}
              <div className="z-input-with-country">
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
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
              </div>

              {/* SEPARATE SHARE BUTTON TO THE RIGHT */}
              <button
                className="z-share-btn"
                onClick={handleSubmit}
              >
                Share App Link
              </button>
            </div>

            {/* STORE BUTTONS */}
            <div className="z-store">
              <a href={APP_LINKS.android} target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
              <a href={APP_LINKS.ios} target="_blank" rel="noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
            </div>

            
          </div>
          {/* CLOSE BUTTON AT BOTTOM */}
            <button
              className="z-close-x-button"
              onClick={handleClose}
            >
              ×
            </button>
        </div>
        
      </div>
    </>
  );
};

export default AppLinkPopup;