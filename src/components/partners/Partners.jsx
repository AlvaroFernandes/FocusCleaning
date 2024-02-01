import { Swiper, SwiperSlide } from "swiper/react";
import { PartnerCard } from "./PartnerCard";
import { Autoplay, Pagination } from "swiper/modules";

const Partners = ({ type, data }) => {
  const partners = data.partners;

  const index = (i) => {
    let k = i + 2;
    if (type && k > 5) {
      if (k % 5 !== 0) {
        k = (k % 5) + 1;
      } else {
        k = 5;
      }
    }
    return k;
  };

  return (
    <div className="partner-area gray-bg section-padding">
      <div className="container">
        {!type ? (
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h4>Our Partners</h4>
              </div>
            </div>
          </div>
        ) : null}
        <div className="row">
          <Swiper
            speed={1500}
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
            {partners.length > 0 &&
              (!type ? partners : partners.slice(0, 4)).map((item, i) => (
                <SwiperSlide key={item.id}>
                  <PartnerCard partner={item} i={i} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
