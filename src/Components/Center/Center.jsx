import React from "react";
import "./Center.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Mac from "../../images/mac.png";
import Hand from "../../images/handshake.png";
import Beta from "../../images/beta.png";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Center() {
  useEffect(() => {
    const clickableContent = document.getElementById("clickable-content");
    clickableContent.addEventListener("click", handleClick);
    function handleClick() {
      window.scrollTo({
        top: 1500,
        behavior: "smooth",
      });
    }
    return () => {
      clickableContent.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const clickableContent2 = document.getElementById("clickable-content2");
    clickableContent2.addEventListener("click", handleClick);
    function handleClick() {
      window.scrollTo({
        top: 2700,
        behavior: "smooth",
      });
    }
    return () => {
      clickableContent2.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const clickableContent3 = document.getElementById("clickable-content3");
    clickableContent3.addEventListener("click", handleClick);
    function handleClick() {
      window.scrollTo({
        top: 2700,
        behavior: "smooth",
      });
    }
    return () => {
      clickableContent3.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Router>
      <div className="Center" style={{ alignItems: "flex-start" }}>
        <div className="column">
          <div className="icon-container">
            <FontAwesomeIcon icon={faPen} />
          </div>
          <h1 className="header">Tailored for all your needs</h1>
          <div className="content">
            <p className="description">
              Thunderbird makes email better for you, bringing together speed,
              privacy and the latest technologies. Focus on what matters and
              forget about complexity.
            </p>
            <div className="content">
              <button className="button">
                <NavLink to="/"> EXPLORE ALL FEATURES ></NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <h1 className="header">Secure & Private</h1>
          <div className="content">
            <p className="description">
              Multiple features, such as built-in Do Not Track and remote
              content blocking, work together to ensure your safety and privacy,
              so you can have peace of mind.
            </p>
            <div className="content">
              <button className="button">
                <NavLink to="/"> KNOW YOUR RIGHTS ></NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="icon-container">
            <FontAwesomeIcon icon={faPuzzlePiece} />
          </div>
          <h1 className="header">Highly Customizable</h1>
          <div className="content">
            <p className="description">
              With Add-ons (Extensions & Themes) and many more features you can
              change the look and feel of Thunderbird in an instant.
              <br />
              <br />
            </p>
            <div className="content">
              <button className="button">
                <NavLink to="/"> MAKE IT PERSONAL ></NavLink>
              </button>
            </div>
          </div>
        </div>
        <h2 className="center-header">
          <span id="clickable-content"></span>
          <span>STAY IN THE LOOP</span>
        </h2>
        <p className="center-text">
          Keep yourself up to date with recent announcements and<br></br>
          releases by following the official Thunderbird Blog!
        </p>

        <div>
          <div className="new-column2">
            <div className="new-container3">
              <NavLink to="/" className="new-link2">
                <h3 className="new-header2">
                  MEET THE TEAM: WOLF-MARTELL MONTWE, ANDROID DEVELOPER
                </h3>
              </NavLink>
              <div className="new-text2">
                <p>
                  Having recently joined us as a full-time Android developer,
                  Wolf brings his passion for building mobile applications to
                  the Thunderbird team. He'll be helping to bring new features
                  and an updated interface to K-9 Mail as we transform it into
                  Thunderbird for Android. I spoke with him about his first
                  computer, what he hopes to accomplish for the Thunderbird
                  mobile app, and how our community of contributors can help!
                </p>
                <br />
                <p>
                  The post{" "}
                  <NavLink to="/">
                    Meet The Team: Wolf-Martell Montwe, Android Developer
                  </NavLink>{" "}
                  appeared first on{" "}
                  <NavLink to="/" style={{ color: "#0167c4" }}>
                    The Thunderbird Blog.
                  </NavLink>
                </p>
              </div>
              <div className="new-footer2">
                <div className="new-footer-left2">
                  <p className="new-footer-date2">APRIL 4, 2023</p>
                </div>
                <div className="new-footer-right2">
                  <p className="new-footer-comments2">COMMENTS 0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="new-column2">
            <div className="new-container2">
              <NavLink to="/" className="new-link2">
                <h3 className="new-header2">
                  {" "}
                  THESE TOP 20 THUNDERBIRD FEATURE REQUESTS NEED YOUR VOTE{" "}
                </h3>
              </NavLink>
              <div className="new-text2">
                <p>
                  <br />
                  <br />
                  <br />
                  Mozilla Connect is an easy-to-use community tool that can help
                  shape future Thunderbird (and Firefox) releases. It allows you
                  to post a feature request, contribute your opinions to
                  existing ones, and give kudos to the features you believe in.
                </p>
                <br />
                <p>
                  The post{" "}
                  <NavLink to="/">
                    Meet The Team: Wolf-Martell Montwe, Android Developer
                  </NavLink>{" "}
                  appeared first on{" "}
                  <NavLink to="/" style={{ color: "#0167c4" }}>
                    The Thunderbird Blog.
                  </NavLink>
                </p>
              </div>
              <div className="new-footer2">
                <div className="new-footer-left2">
                  <p className="new-footer-date2">APRIL 4, 2023</p>
                </div>
                <div className="new-footer-right2">
                  <p className="new-footer-comments2">COMMENTS 16</p>
                </div>
              </div>
            </div>
          </div>

          <div className="new-column2">
            <div className="new-container4">
              <NavLink to="/" className="new-link2">
                <h3 className="new-header2">
                  {" "}
                  THUNDERBIRD FOR ANDROID / K-9 <br></br> MAIL: MARCH PROGRESS
                  REPORT{" "}
                </h3>
              </NavLink>
              <div className="new-text2">
                <p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Last month we reported on the progress we made in turning K-9
                  Mail into Thunderbird for Android. Since then a month has
                  passed, so it’s time for another detailed update. Let's dive
                  in!
                </p>
                <br />
                <p>
                  The post{" "}
                  <NavLink to="/">
                    Meet The Team: Wolf-Martell Montwe, Android Developer
                  </NavLink>{" "}
                  appeared first on{" "}
                  <NavLink to="/" style={{ color: "#0167c4" }}>
                    The Thunderbird Blog.
                  </NavLink>
                </p>
              </div>
              <div className="new-footer2">
                <div className="new-footer-left2">
                  <p className="new-footer-date2">APRIL 4, 2023</p>
                </div>
                <div className="new-footer-right2">
                  <p className="new-footer-comments2">COMMENTS 6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-content5">
          <button className="button">
            <NavLink to="/">READ THE BLOG ></NavLink>
          </button>
        </div>

        <div>
          <h2 className="left-header style={{ display: 'flex', alignItems: 'center' }}">
            <span id="clickable-content2"></span>
            <span>THUNDERBIRD IS FUNDED BY USERS LIKE YOU </span>
          </h2>
          <p className="left-text">
            Thunderbird is both free and freedom respecting, but<br></br> we’re
            also completely funded by donations! Help us<br></br> sustain the
            project and continue to improve.{" "}
          </p>
        </div>
        <div>
          <h2 className="right-header">
            <span id="clickable-content3"></span>
            <span> JOIN OUR NEWSLETTER</span>
          </h2>
          <p className="right-text">
            Keep up with the latest and greatest updates on news,<br></br>{" "}
            features, events, and previews, and get a sneak peek on <br></br>{" "}
            the upcoming releases.{" "}
          </p>
        </div>

        <div>
          <NavLink to="donate.html" className="donate-button2">
            <span className="button-heart">&#x2764;</span> DONATE
          </NavLink>
        </div>

        <div className="form-group">
          <form action="/submit-form" method="post">
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail"
              required
              autocomplete="off"
              placeholder="Your Email"
            />
            <NavLink to="/" className="btn-primary">
              SIGN ME UP!
            </NavLink>
          </form>
        </div>

        <div className="image-container">
          <img src={Mac} alt="Mac" className="centered-image" />
        </div>

        <div className="box">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <h1 className="header">
            CALENDAR
            <h6>Organize your life — it’s about time!</h6>
          </h1>
          <div className="box-text">
            <p className="style-text">
              Organize your schedule and life’s important events in a calendar
              that’s fully integrated with your Thunderbird email.
              <br></br>
              <br></br>
              Manage multiple calendars, create your daily to do list, invite
              friends to events, and subscribe to public calendars.
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <button className="button">
            <NavLink to="/">EXPLORE FEAUTERS ></NavLink>
          </button>
          <button className="button2">
            <NavLink to="/">Explore Add-ons ></NavLink>
          </button>
        </div>

        <div className="new-box">
          <h1 className="down-header">GET INVOLVED</h1>
          <p className="style-text">
            Thunderbird is an open source project, which means anyone can
            contribute ideas, designs, code, and time helping fellow users.
          </p>
        </div>

        <div>
          <NavLink to="/" className="donate-button3">
            JOIN US
          </NavLink>
        </div>

        <img className="handshake-img" src={Hand} alt="Hand" />

        <div className="new-little-links-container">
          <NavLink to="/" className="little-link">
            Make a Donation
          </NavLink>
          <span className="little-link-separator">•</span>
          <NavLink to="/" className="little-link">
            Get Support
          </NavLink>
          <span className="little-link-separator">•</span>
          <NavLink to="/" className="little-link">
            Report a Bug
          </NavLink>
        </div>

        <div className="new-box2">
          <h1 className="down-header">THE FUTURE OF THUNDERBIRD</h1>
          <p className="style-text">
            <br></br>
            Experience cutting edge features. Provide feedback to help refine
            and polish what will be in the final release.
          </p>
        </div>

        <div>
          <NavLink to="/" className="donate-button4">
            DOWNLOAD BETA
          </NavLink>
        </div>

        <img className="handshake-img2" src={Beta} alt="Beta" />

        <div className="button-row">
          <NavLink to="/" className="release-channel-btn">
            RELEASE CHANNEL
          </NavLink>
          <NavLink to="/" className="blue-btn">
            BETA CHANNEL
          </NavLink>
          <NavLink to="/" className="second-release-channel-btn">
            DAILY CHANNEL
          </NavLink>
        </div>

        <div className="two-new-little-links-container">
          <NavLink to="/" className="little-link">
            Systems & Languages
          </NavLink>
          <span className="little-link-separator">•</span>
          <NavLink to="/" className="little-link">
            What's New
          </NavLink>
          <span className="little-link-separator">•</span>
          <NavLink to="/" className="little-link">
            Privacy
          </NavLink>
        </div>
      </div>
    </Router>
  );
}

export default Center;
