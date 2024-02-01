import "./mobileMenu.css";

import Menu from "./Menu";

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
        text: "Premiun Cleaning",
        link: "/services/premiun"
      },
      {
        id: "c5",
        text: "End of Lease Cleaning",
        link: "/services/endoflease"
      },
      {
        id: "c6",
        text: "Spring Cleaning",
        link: "/spring"
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
  return (
    <div className={`mobile-nav ${showNav ? "active" : ""}`}>
      <ul className="navbar-nav m-auto">
        {data.length > 0 &&
          data.map((m) => <Menu key={m.id} menu={m} setShowNav={setShowNav} />)}
      </ul>
    </div>
  );
};

export default MobileMenu;
