import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import TheTeam from "./components/TheTeam";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import OurClients from "./components/OurClients";
import Solutions from "./components/Solutions";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

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
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar
                theme={theme}
                setTheme={setTheme}
                language={language}
                setLanguage={setLanguage}
                scrollToSection={scrollToSection}
              />
              {/*<WhatWeDo theme={theme} language={language} />*/}
              <Solutions theme={theme} language={language} />
              <OurClients theme={theme} language={language} />
              <TheTeam theme={theme} language={language} />
              <News theme={theme} language={language} />
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
