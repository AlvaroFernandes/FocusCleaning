import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ menu, setShowNav }) => {
  const [homeSubMenu, setHomeSubMenu] = useState(false);

  return (
    <>
      <li key={menu.id} className={`nav-item`}>
        <div className="link-item">
          <a className={`mobile-nav-link`} href={menu.link}>
            {menu.text}
          </a>
          {menu.dropdown.length > 0 && (
            <button
              className="mobile-sub-nav-toggler"
              onClick={() => setHomeSubMenu((p) => !p)}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          )}
        </div>
        <ul
          className={`mobile-sub-menu ${homeSubMenu ? "active" : ""}`}
          onClick={() => setShowNav((p) => !p)}
        >
          {menu.dropdown.length > 0 &&
            menu.dropdown.map((d) => (
              <li key={d.id}>
                <Link to={d.link}>{d.text}</Link>
              </li>
            ))}
        </ul>
      </li>
    </>
  );
};

export default Menu;
