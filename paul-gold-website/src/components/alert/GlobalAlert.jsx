import React, { useEffect, useState } from "react";
import "./GlobalAlert.css";

const GlobalAlert = ({ message, duration = 2500, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="global-alert">
      <span className="alert-tick">✔</span>
      {message}
    </div>
  );
};

export default GlobalAlert;