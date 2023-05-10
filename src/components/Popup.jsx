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
            <h4>
              Coddi is developing a new service for knowledge management in the
              diagnostic of condition monitoring techniques, using Open AI Chat
              GPT-3. We are committed to providing a high-quality service and we
              want to ensure that it meets the needs of our customers.
            </h4>
            <h4>
              That's why we are conducting this survey to gather feedback and
              identify other functions that customers would like to see in our
              service. Your input is valuable and will help us to continue to
              improve and innovate.
            </h4>
            <button
              className="popup-cta-btn"
              onClick={() =>
                window.open(
                  "https://forms.office.com/Pages/ResponsePage.aspx?id=WWZiz1oUp0yCXVzSHqmCJtTg8BHgoRNKg4opqFSG3zJUOVFXM1Q4UE5ERFlBQ05LWk9LREoyTjRRMS4u&embed=true"
                )
              }
            >
              Take the survey
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
