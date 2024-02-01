import "./mobileMenu.css";

import Menu from "./Menu";

const data = [
  {
    id: "m1",
    text: "Home",
    link: "/focuscleaning/",
    dropdown: []
  },
  {
    id: "m2",
    text: "About",
    link: "/focuscleaning/about",
    dropdown: []
  },
  {
    id: "m3",
    text: "Services",
    link: "/focuscleaning/services",
    dropdown: [
      {
        id: "c1",
        text: "Basic Cleaning",
        link: "/focuscleaning/services/basic"
      },
      {
        id: "c2",
        text: "Commercial Cleaning",
        link: "/focuscleaning/services/commercial"
      },
      {
        id: "c3",
        text: "Construction Cleaning",
        link: "focuscleaning/services/construction"
      },
      {
        id: "c4",
        text: "Premiun Cleaning",
        link: "/focuscleaning/services/premiun"
      },
      {
        id: "c5",
        text: "End of Lease Cleaning",
        link: "/focuscleaning/services/endoflease"
      },
      {
        id: "c6",
        text: "Spring Cleaning",
        link: "/focuscleaning/services/spring"
      }
    ]
  },
  {
    id: "m4",
    text: "Contact us",
    link: "/focuscleaning/contact",
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
