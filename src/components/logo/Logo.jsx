import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="logo">
      <img src="logo.png" className="logo__image" />
    </NavLink>
  );
}

export default Logo;
