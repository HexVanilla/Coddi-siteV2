import React, { useState } from "react";
import "./Login.css";
import logoDark from "../img/logoDark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src={logoDark} alt="Logo" className="logo" />
        </div>
        <div className="divider"></div>
        <form className="login-form">
          <input type="text" name="username" placeholder="Username" required />
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
                  style={{ color: "#364f6b" }}
                />
              ) : (
                <FontAwesomeIcon icon={faEye} style={{ color: "#364f6b" }} />
              )}
            </div>
          </div>

          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
}

export default Login;
