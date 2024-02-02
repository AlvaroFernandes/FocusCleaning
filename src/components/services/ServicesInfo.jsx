import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import Icon from "../Icon";

const ServicesInfo = ({ data }) => {
  const services = data.Services;
  return (
    <div className="service-area  gray-bg section-padding ">
      <div className="container">
        <div className="row align-item-center position-relative">
          <div className="col-xl-4">
            <div className="section-title">
              <h6>What We Do</h6>
              <h2>What We Offer</h2>
            </div>
          </div>
          <div className="col-xl-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              iaculis finibus enim sed vestibulum. Vivamus eleifend ut leo sit
              amet mattis. Proin mattis ipsum id metus efficitur, et
              pellentesque elit malesuada.
            </p>
          </div>
          <div className="slide__navigation position-relative">
            <button className="slide__button-prev">
              <Icon name="ArrowLeft" size="30" />
            </button>
            <button className="slide__button-next">
              <Icon name="ArrowRight" size="30" />
            </button>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                speed={1500}
                navigation={{
                  nextEl: ".slide__button-next",
                  prevEl: ".slide__button-prev"
                }}
                loop={true}
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 50
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50
                  }
                }}
                className="service-slider"
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id} className="single-service-item">
                    <div className="service-icon">
                      <span>
                        <Icon name={service.icon} size={50} color="#4eb39a" />
                      </span>
                    </div>
                    <div className="service-title">
                      <h4>{service.heading}</h4>
                    </div>
                    <p>{service.title.substring(0, 50) + "..."}</p>
                    <Link to={service.link} className="service-link">
                      <Icon name="ArrowRight" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
