import "./Menu.css";

function Menu({ onMenuOpen }) {
  return (
    <div className={`header__menu-cont`}>
      <h3>Menu</h3>
      <button className={`btn btn--menu-btn`} onClick={onMenuOpen}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Menu;
