import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import Implementation from "./components/Implementation";
import TheProblem from "./components/TheProblem";
import TheTech from "./components/TheTech";
import TheTeam from "./components/TheTeam";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import OurClients from "./components/OurClients";
import Popup from "./components/Popup";
import Login from "./components/Login";
import LoadingPage from "./components/LoadingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#111414";
    } else {
      document.body.style.backgroundColor = "#efefef";
    }
  }, [theme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route
          path="/"
          element={
            <div className="App">
              <Popup />
              <Navbar
                theme={theme}
                setTheme={setTheme}
                language={language}
                setLanguage={setLanguage}
                scrollToSection={scrollToSection}
              />
              <WhatWeDo theme={theme} language={language} />
              <Implementation theme={theme} language={language} />
              <TheProblem theme={theme} language={language} />
              <TheTech theme={theme} language={language} />
              <OurClients theme={theme} language={language} />
              <TheTeam theme={theme} language={language} />
              <Footer theme={theme} language={language} />
              <BackToTopButton theme={theme} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
