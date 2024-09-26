import { IoIosArrowUp } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

import "./Footer.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [scrollActive, setScrollActive] = useState(false);

  function handleMoveToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    if (window.scrollY > window.innerHeight) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-links-cont">
        <div>
          <div className="footer-logo">
            <img src="./logo.png" alt="Logo" className="logo__image" />
          </div>
          <h3 className="footer-heading">Mr Holdings</h3>
          <div className="footer-contact-detail">
            <p className="footer-txt">
              Contact:{" "}
              <a href="#" className="footer-txt">
                +9779813112182
              </a>
            </p>
            <p className="footer-txt">
              Email:{" "}
              <a href="#" className="footer-txt">
                mountroyal@gmail.com
              </a>
            </p>
            <p className="footer-txt">
              Website:{" "}
              <a href="#" className="footer-txt">
                mountroyal.co.jp
              </a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Policy</h3>
          <ul>
            <li>
              <Link className="footer-txt">Privacy Policies</Link>
            </li>
            <li>
              <Link className="footer-txt">Information Security Policy</Link>
            </li>
            <li>
              <Link className="footer-txt">Terms and conditions</Link>
            </li>
            <li>
              <Link className="footer-txt">
                Report Dispute, Fraud and Misuse
              </Link>
            </li>
            <li>
              <Link className="footer-txt">Transaction Limitss</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">General</h3>
          <ul>
            <li>
              <Link className="footer-txt">Getting Started</Link>
            </li>
            <li>
              <Link className="footer-txt">Security</Link>
            </li>
            <li>
              <Link className="footer-txt">SMS Syntax</Link>
            </li>
            <li>
              <Link className="footer-txt">Reward Points</Link>
            </li>
            <li>
              <Link className="footer-txt">Video Tutorials</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Comapny</h3>
          <ul>
            <li>
              <Link className="footer-txt">About Us</Link>
            </li>
            <li>
              <Link className="footer-txt">Career</Link>
            </li>
            <li>
              <Link className="footer-txt" to="blog">
                Blog/News
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Partners</h3>
          <ul>
            <li>
              <Link className="footer-txt">Banks</Link>
            </li>
            <li>
              <Link className="footer-txt">Western Union</Link>
            </li>
            <li>
              <Link className="footer-txt">Agents</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Help</h3>
          <ul>
            <li>
              <Link className="footer-txt">Developer's Guide</Link>
            </li>
            <li>
              <Link className="footer-txt">FAQ's</Link>
            </li>
            <li>
              <Link className="footer-txt">Contact Us</Link>
            </li>
            <li className="btn-cont-merchant">
              <Link className="footer-btn-merchant">Become a merchant</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-app-sec">
        <div>
          <ul className="footer-card-sup">
            <li>
              <img src="./visa-verified-img.webp" alt="ISO" />
            </li>
            <li>
              <img src="./master-card-img.webp" alt="ISO" />
            </li>
            <li>
              <img src="./ISO.webp" alt="ISO" />
            </li>
          </ul>
        </div>
        <div className="footer-flx">
          <h3 className="footer-txt">Download Mobile Apps</h3>
          <div className="footer-badge">
            <div className="badge">
              <img src="google-play-badge.webp" alt="Google Play badge" />
            </div>

            <div className="badge">
              <img src="google-play-badge.webp" alt="Appstore Badge" />
            </div>
          </div>
        </div>
        <div className="footer-flx">
          <div className="footer-badge footer-badge-2">
            <div className="badge">
              <img src="google-play-badge.webp" alt="Appstore Badge" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-cont">
          <p className="footer-txt">
            © 2009-2024 Mr Holding. All Rights Reserved.
          </p>

          <div className="social-icon-cont footer-txt">
            <p className="footer-txt">
              Keep in touch <span className="social-icon-line"></span>{" "}
              <div className="social-link-cont">
                <div className="social-link">
                  <FaSquareFacebook />
                </div>
                <div className="social-link">
                  <FaSquareFacebook />
                </div>
                <div className="social-link">
                  <FaSquareFacebook />
                </div>
                <div className="social-link">
                  <FaSquareFacebook />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      {scrollActive && (
        <div className="btn-pulse-cont">
          <button className="btn btn--pulse-up" onClick={handleMoveToTop}>
            <IoIosArrowUp className="btn-icon-up" />
          </button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
