import { IoIosArrowUp } from "react-icons/io";
import Logo from "../logo/Logo";
import "./Footer.css";
import { useState, useEffect } from "react";

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
    <div className="footer">
      <Logo imgSrc="./logo_b.svg" />
      <ul className="footer__link-list">
        <li>
          <a href="#">Privacy policy</a>
        </li>
        <li>
          <a href="#">Disclaimer</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <div className="footer__p-mark">
        <img src="./p-mark.png" alt="P mark" />
      </div>
      <p className="footer__copyright">&copy; JAPAN AI, Inc.</p>

      {scrollActive && (
        <div className="btn-pulse-cont">
          <button className="btn btn--pulse-up" onClick={handleMoveToTop}>
            <IoIosArrowUp className="btn-icon-up" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Footer;
