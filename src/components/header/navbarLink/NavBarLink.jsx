import { NavLink } from "react-router-dom";

function NavBarLink({ list, index, setIsMenuActive }) {
  const { title, href } = list;
  const linksShort = index <= 2 ? "nav__links--short" : "";
  const linksSpecial = index > 5 ? "nav__links--special" : "";
  return (
    <li className={linksSpecial} onClick={() => setIsMenuActive(false)}>
      <NavLink
        to={href}
        className={`nav__links ${linksShort}`}
        data-hover={title}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default NavBarLink;
