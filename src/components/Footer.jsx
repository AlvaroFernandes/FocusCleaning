import { Link } from "react-router-dom";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="/" className="logo">
                <img
                  src="/focuscleaning/assets/img/logo.png"
                  alt="focuscleaning-logo"
                />
              </a>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Contact</h5>
              <div className="company-email">
                <Link to="mailto:contact@focuscleaning.com.au">
                  contact@focuscleaning.com.au
                </Link>
              </div>
              <div className="phone-number">
                <Link to="tel:0414 072 701">0414 072 701</Link>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/focuscleaning/about">About</Link>
                  <Link to="/focuscleaning/services">Services</Link>
                  <Link to="/focuscleaning/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Get in touch</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a
                      href="https://www.facebook.com/focuscleaningsydney.com.au/"
                      target="_blank"
                    >
                      <Icon name="Facebook" size="24" /> Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/focus_cleaning/"
                      target="_blank"
                    >
                      <Icon name="Instagram" size="24" /> Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
