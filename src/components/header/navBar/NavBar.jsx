import "./NavBar.css";
import NavBarLink from "../navbarLink/NavBarLink";

const menuList = [
  {
    title: "Japan Ai Chat",
    href: "/chat",
  },
  {
    title: "Japan Ai Speech",
    href: "/speech",
  },
  {
    title: "Japan Ai Marketing",
    href: "/marketing",
  },
  {
    title: "Company profile",
    href: "#profile",
  },
  {
    title: "Seminar",
    href: "/seminar",
  },

  {
    title: "News",
    href: "/news",
  },
  {
    title: "company introduction materials",
    href: "/companyguide",
  },
  {
    title: "inquiry",
    href: "/inquiry",
  },
];

function NavBar({ setIsMenuActive }) {
  return (
    <nav className={`nav`}>
      <ul className="nav__list">
        {menuList.map((list, index) => {
          return (
            <NavBarLink
              key={index}
              list={list}
              index={index}
              setIsMenuActive={setIsMenuActive}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
