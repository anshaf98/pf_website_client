import React from "react";
import "./TM.css";
import { TMData } from "./TMData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const TM = () => {
  return (
    <section className="tm section" id="portfolio">
      <h2 className="section-title">My Clients Say</h2>
      <span className="section-subtitle">Testimonial</span>
      <Swiper
        className="tm-container container"
        loop={true}
        grabCursor={true}
        // slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            //  spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {TMData.map(({ id, image, title, desc }) => {
          return (
            <SwiperSlide className="tm-card" key={id}>
              <img src={image} alt="" className="tm-img" />
              <h3 className="tm-name">{title}</h3>
              <p className="tm-desc">{desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TM;
