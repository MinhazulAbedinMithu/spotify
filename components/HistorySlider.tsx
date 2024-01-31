import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const HistorySlider = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      //   pagination={{ el: ".swiper-pagination", clickable: true }}
      //   navigation={{
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //     // clickable: true,
      //   }}
      //   modules={[EffectCoverflow, Pagination, Navigation]}
      //   className="swiper_container"
    >
      {/* <SwiperSlide>
        <img src={slide_image_1} alt="slide_image" />
        <h4>Lorem, ipsum dolor.</h4>
      </SwiperSlide> */}
      <div>sdfsd</div>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <FaArrowAltCircleLeft />
        </div>
        <div className="swiper-button-next slider-arrow">
          <FaArrowAltCircleRight />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default HistorySlider;
