const AboutInfo = ({ data }) => {
  const about = data.About;
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
            data-wow-delay=".6s"
          >
            <div className="about-img">
              <img src="/focuscleaning/assets/img/about/about.png" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <div className="info-content-area">
              <div className="section-title">
                <h6>{about.h6}</h6>
                <h2>{about.h2}</h2>
              </div>
              <p className="highLight">{about.p1}</p>
              <br />
              <p>{about.p2}</p>
              <br />
              <p>{about.p3}</p>
              <br />
              <p>{about.p4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
