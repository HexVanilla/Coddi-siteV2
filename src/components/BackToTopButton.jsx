// src/components/BackToTopButton.js

import React from "react";
import { MdArrowUpward } from "react-icons/md";
import "./BackToTopButton.css";

const BackToTopButton = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop} className={`back-to-top-button ${theme}`}>
      <MdArrowUpward />
    </button>
  );
};

export default BackToTopButton;
