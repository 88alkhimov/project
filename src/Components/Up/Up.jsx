import React from "react";
import "./App.css";
import bgHeader from "../../images/bg-header.png";
import logo from "../../images/logo.svg";
import linuxScreenshot from "../../images/screenshot-linux.png";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Up() {
  return (
    <Router>
      <header className="header-container">
        <img src={bgHeader} alt="Header" className="header-image" />
        <div className="info">
          <div className="infoContainer">
            <div className="infoText">
              <h3 className="info-heading">Make Email Easier.</h3>
              <p className="info-paragraph">
                Thunderbird is a free email application that’s easy to set up
              </p>
              <p className="info-paragraph">
                and customize - and it’s loaded with great features!
              </p>
            </div>
          </div>
        </div>

        <p className="info-paragraph2">
          <div className="infoText2">
            <b>Want to try new features early?</b>
            <span className="little-links-separator"> </span>
            <span>
              Get the beta and be a part of the future of Thunderbird.
            </span>
            <span className="little-links-separator"> </span>
            <NavLink to="/" className="beta-button">
              GET THE BETA
            </NavLink>
          </div>
        </p>
        <div className="button-container">
          <NavLink to="/" className="download-button">
            FREE DOWNLOAD
          </NavLink>
        </div>
        <div className="little-links-container">
          <NavLink to="/" className="little-links">
            Systems & Languages
          </NavLink>
          <span className="little-links-separator">•</span>
          <NavLink to="/" className="little-links">
            What's New
          </NavLink>
          <span className="little-links-separator">•</span>
          <NavLink to="/" className="little-links">
            Privacy
          </NavLink>
        </div>
        <div className="up-container">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-image" />
          </NavLink>
          <nav className="side-links">
            <NavLink to="/" className="side-link">
              Feauters
            </NavLink>
            <NavLink to="/" className="side-link">
              Add-ons
            </NavLink>
            <NavLink to="/" className="side-link">
              Get Involved
            </NavLink>
            <NavLink to="/" className="side-link">
              Get Help
            </NavLink>
            <NavLink to="/" className="side-link">
              About Us
            </NavLink>
            <NavLink to="/" className="side-link">
              Blog
            </NavLink>
          </nav>
          <NavLink to="donate" className="donate-button">
            <span className="button-heart">&#x2764;</span> DONATE
          </NavLink>
        </div>
        <div className="screenshot-container">
          <img
            src={linuxScreenshot}
            alt="Screenshot"
            className="screenshot-image"
          />
        </div>
      </header>
    </Router>
  );
}

export default Up;
