import React from "react";
import "./Foot.css";
import Cov from "../../images/cover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import WeatherBox from "../../Components/Api/WeatherBox";

function Footer() {
  return (
    <Router>
      <div
        className="Foot"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLink to="/" className="cover-container">
          <img src={Cov} alt="Cov" className="cover-img" />
        </NavLink>

        <div class="two-button-row">
          <NavLink to="/" className="two-blue-btn">
            <span className="sfera">
              <FontAwesomeIcon icon={faTwitter} color="white" />
            </span>
            @mozthunderbird
          </NavLink>
          <NavLink to="/" className="two-blue-btn">
            <span className="sfera">
              <FontAwesomeIcon icon={faFacebook} color="white" />
            </span>
            Thunderbird
          </NavLink>
          <NavLink to="/" className="two-blue-btn">
            <span className="sfera">
              <FontAwesomeIcon icon={faYoutube} color="white" />
            </span>
            Thunderbird
          </NavLink>
          <NavLink to="/" className="two-blue-btn">
            <span className="sfera">
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </span>
            Thunderbird
          </NavLink>
          <NavLink to="/" className="two-blue-btn">
            <span className="sfera">
              <FontAwesomeIcon icon={faMastodon} color="white" />
            </span>
            @thunderbird@mastodon.online
          </NavLink>
        </div>

        <div className="lin">
          <NavLink to="/">For Organizations</NavLink>
          <NavLink to="/">Careers</NavLink>
          <NavLink to="/">Get Help</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/">Contact Us</NavLink>
        </div>

        <div
          className="page-language"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p style={{ color: "white", fontSize: "14px", marginRight: "10px" }}>
            Page language:
          </p>
          <select
            onChange={(e) => {
              window.location.href = `/${e.target.value}`;
            }}
          >
            <option value="en" selected={window.location.pathname === "/en"}>
              English
            </option>
            <option value="fr" selected={window.location.pathname === "/fr"}>
              Français
            </option>
            <option value="es" selected={window.location.pathname === "/es"}>
              Español
            </option>
            <option value="de" selected={window.location.pathname === "/de"}>
              Deutsch
            </option>
          </select>
        </div>

        <div className="lin2">
          <NavLink to="/">Privacy</NavLink>
          <NavLink to="/">Cookies</NavLink>
          <NavLink to="/">Legal</NavLink>
          <NavLink to="/">Participation Guidelines</NavLink>
          <NavLink to="/">Report Trademark or Copyright Infringement</NavLink>
          <NavLink to="/">Report Misuse of Thunderbird Trademark</NavLink>
        </div>

        <div className="box4">
          <p>
            Thunderbird is now part of{" "}
            <NavLink to="/" style={{ color: "white", fontWeight: "bold" }}>
              MZLA Technologies Corporation
            </NavLink>{" "}
            a wholly owned subsidiary of Mozilla Foundation. Portions of this
            content are ©1998–2023 by individual contributors. Content available
            under a{" "}
            <NavLink to="/" style={{ color: "white", fontWeight: "bold" }}>
              Creative Commons License
            </NavLink>
            <br></br>
            <br></br>
            <NavLink
              to="/"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Contribute to this site
            </NavLink>
          </p>
        </div>
        <WeatherBox />
      </div>
    </Router>
  );
}

export default Footer;
