import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/focuscleaning/data/testimonials.json")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="testimonial-area section-padding pb-50">
          <div className="capricorn-testimonial">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="section-title">
                    <h6>Testemonial</h6>
                    <h2>
                      Happy <b>client</b> Says
                      <br />
                      About us
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {data.testimonials.length > 0 && (
                    <Swiper
                      speed={1500}
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 30
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30
                        },
                        1100: {
                          slidesPerView: 3,
                          spaceBetween: 30
                        }
                      }}
                      className="testimonial-carousel"
                    >
                      {data.testimonials.map((item) => (
                        <SwiperSlide
                          key={item.id}
                          className="single-testimonial-item"
                        >
                          <div className="testimonial-icon">
                            <i className="las la-quote-left"></i>
                          </div>
                          <p>"{item.comment}"</p>
                          <div className="author-wrap">
                            <div className="author-desc">
                              <h5>{item.name}</h5>
                              <span>{item.rank}</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonial;
