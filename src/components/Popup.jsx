// src/components/Popup.js
import React, { useState } from "react";
import "./Popup.css";
import aiGif from "../img/Aigif.gif";
import es from "../img/es.svg";
import en from "../img/us.svg";

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
            <div className="popup-content">
              <img src={aiGif} alt="" width="196px" height="128px" />
              <h4>
                “Coddi is developing a new service for diagnostic condition
                monitoring, using Open AI Chat GPT-3. We are committed to
                providing a high-quality and innovative service. That's why we
                are conducting this survey your input is valuable and will help
                us to continue to innovate.”
              </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <button
                className="popup-cta-btn"
                onClick={() =>
                  window.open(
                    "https://forms.office.com/Pages/ResponsePage.aspx?id=WWZiz1oUp0yCXVzSHqmCJtTg8BHgoRNKg4opqFSG3zJUOVFXM1Q4UE5ERFlBQ05LWk9LREoyTjRRMS4u&embed=true"
                  )
                }
              >
                <p style={{ fontSize: "small" }}>
                  <span>
                    <img
                      src={en}
                      alt=""
                      width={16}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>{" "}
                  Take the Survey
                </p>
              </button>
              <button
                className="popup-cta-btn"
                onClick={() =>
                  window.open(
                    "https://forms.office.com/Pages/ResponsePage.aspx?id=WWZiz1oUp0yCXVzSHqmCJtTg8BHgoRNKg4opqFSG3zJUMDlZMjVVS0JCVVdSWjhLMzRRM083WFZKRi4u&embed=true"
                  )
                }
              >
                <p style={{ fontSize: "small" }}>
                  <span>
                    <img
                      src={es}
                      alt=""
                      width={16}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>{" "}
                  Responder la Encuesta
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
