const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="copyright-line">
                © 2024 Focus Cleaning. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="privacy">
                Developed by:{" "}
                <a
                  href="http://alvarofernandes.com.au"
                  target="self"
                  className="link-external"
                >
                  Alvaro Fernandes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
