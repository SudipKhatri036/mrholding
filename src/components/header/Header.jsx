import { useState, useEffect } from "react";

import NavBar from "./navBar/NavBar";
import Menu from "./menu/Menu";
import Logo from "../logo/Logo";

import "./Header.css";
import { useLocation } from "react-router-dom";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isFixedNav, setIsFixedNav] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  function setFixed() {
    if (window.scrollY >= 100) setIsFixedNav(true);
    else setIsFixedNav(false);
  }

  function handleMenuOpen() {
    setIsMenuActive(!isMenuActive);
  }

  useEffect(
    function () {
      window.addEventListener("scroll", setFixed);
    },
    [isFixedNav]
  );

  return (
    <header
      className={`header${isMenuActive ? " active" : ""}${
        isFixedNav ? " header--fixed" : ""
      }${!isHomePage ? " header--not-home" : ""}`}
    >
      <Logo />
      <NavBar setIsMenuActive={setIsMenuActive} />
      <Menu onMenuOpen={handleMenuOpen} />
    </header>
  );
}

export default Header;
