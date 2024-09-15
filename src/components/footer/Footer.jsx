import { IoIosArrowUp } from "react-icons/io";
import Logo from "../logo/Logo";
import "./Footer.css";

function Footer() {
  function handleMoveToTop() {
    window.scrollTo(0, 0);
  }

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

      <button className="btn btn--backto-top" onClick={handleMoveToTop}>
        Back to Top
        <IoIosArrowUp className="btn-icon-up" />
      </button>
    </div>
  );
}

export default Footer;
