import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <i className="fa fa-envelope"></i>
                <Link to="mailto:contact@focuscleaning.com.au">
                  contact@focuscleaning.com.au
                </Link>{" "}
                |<i className="fa fa-phone"></i>
                <Link to="tel:0414 072 701">0414 072 701</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <div className="site-info">
                <span>Give yourself a day off!</span>
                <div className="social-area">
                  <a
                    href="https://www.facebook.com/focuscleaningsydney.com.au/"
                    target="_blank"
                  >
                    <i className="header-top-icon fa fa-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/focus_cleaning/"
                  >
                    <i className="header-top-icon fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
