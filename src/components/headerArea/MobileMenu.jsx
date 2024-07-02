import "./mobileMenu.css";
import { Link } from "react-router-dom";

import { useState } from "react";

const data = [
  {
    id: "m1",
    text: "Home",
    link: "/",
    dropdown: []
  },
  {
    id: "m2",
    text: "About",
    link: "/about",
    dropdown: []
  },
  {
    id: "m3",
    text: "Services",
    link: "/services",
    dropdown: [
      {
        id: "c1",
        text: "Basic Cleaning",
        link: "/services/basic"
      },
      {
        id: "c2",
        text: "Commercial Cleaning",
        link: "/services/commercial"
      },
      {
        id: "c3",
        text: "Construction Cleaning",
        link: "/services/construction"
      },
      {
        id: "c4",
        text: "End of Lease Cleaning",
        link: "/services/endoflease"
      },
      {
        id: "c5",
        text: "Spring Cleaning",
        link: "/services/spring"
      },
      {
        id: "c6",
        text: "Mould Cleaning",
        link: "/services/mould"
      }
    ]
  },
  {
    id: "m4",
    text: "Contact us",
    link: "/contact",
    dropdown: []
  }
];

const MobileMenu = ({ showNav, setShowNav }) => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div className={`mobile-nav ${showNav ? "active" : ""}`}>
      <ul className="navbar-nav m-auto">
        {data.length > 0 &&
          data.map((m) => (
            <li key={m.id} className="nav-item">
              <div className="link-item">
                <Link to={m.link} className="mobile-nav-link">
                  {m.text}
                </Link>
                {m.dropdown.length > 0 && (
                  <button
                    className="mobile-sub-nav-toggler"
                    onClick={() => setSubMenu((p) => !p)}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                )}
              </div>
              <ul
                className={`mobile-sub-menu ${subMenu ? "active" : ""}`}
                onClick={() => setShowNav((p) => !p)}
              >
                {m.dropdown.length > 0 &&
                  m.dropdown.map((d) => (
                    <li key={d.id}>
                      <Link to={d.link}>{d.text}</Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
