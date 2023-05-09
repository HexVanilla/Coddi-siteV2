// src/components/Popup.js
import React, { useState } from "react";
import "./Popup.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup-close-btn" onClick={handleClose}>
              &times;
            </button>
            <h2>Welcome to our website!</h2>
            <button className="popup-cta-btn">Learn More</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
