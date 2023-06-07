import React from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-container">
      <img src={logo} alt="Logo" className="loading-logo" />
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
}

export default LoadingPage;
