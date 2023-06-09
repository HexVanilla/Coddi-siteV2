import React, { useState, useEffect } from "react";
import "./Login.css";
import logoColor from "../img/logoColor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import animationData from "../img/bgAnim.json";
import animationDataT from "../img/bgAnimT.json";
import animationDataM from "../img/bgAnimM.json";
import animationDataSM from "../img/bgAnimSM.json";
function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [msg, setMsg] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    let choice = Math.floor(Math.random() * 3);
    randomMsg(choice);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function randomMsg(choice) {
    switch (choice) {
      case 0:
        setMsg("Welcome Back!");
        break;
      case 1:
        setMsg("Iniciar Sesión");
        break;
      case 2:
        setMsg("Es Bueno Volver a Verte!");
        break;

      default:
        setMsg("Iniciar Sesión");
        break;
    }
  }

  return (
    <>
      <div className="login-animation">
        <Lottie
          animationData={
            screenWidth > 1440
              ? animationData
              : screenWidth > 768
              ? animationDataT
              : screenWidth > 320
              ? animationDataM
              : animationDataSM
          }
          id="lottie-animation"
          loop={false}
        />
      </div>

      <div className="login-container">
        <div className="login-card">
          <div className="logo-container">
            <img src={logoColor} alt="Logo" className="logo" />
          </div>
          <div className="divider"></div>
          <h4 className="hello-msg">{msg}</h4>
          <form className="login-form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <div className="password-container">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <div onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    style={{ color: "#fbd758" }}
                  />
                ) : (
                  <FontAwesomeIcon icon={faEye} style={{ color: "#fbd758" }} />
                )}
              </div>
            </div>

            <input type="submit" value="Log in" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
