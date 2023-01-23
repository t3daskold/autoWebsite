import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {Navigation, EffectFade} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import car1 from "../assets/hyundai/1.jpg";
import car2 from "../assets/hyundai/2.jpg";
import car3 from "../assets/hyundai/3.jpg";
import car4 from "../assets/hyundai/4.jpg";
import car5 from "../assets/hyundai/5.jpg";
import mers1 from "../assets/mercedes/mers1.jpg";
import mers2 from "../assets/mercedes/mers2.jpg";
import mers3 from "../assets/mercedes/mers3.jpg";

export default function Slider() {
  return (
    <div className="container">
      <h3> Приклади наших робіт </h3>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, EffectFade]}
        navigation
        className="myswiper"
        speed={800}
      >
        <SwiperSlide className="swiperslide">
          <img src={car1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={car3} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={car4} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={car5} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={car2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={mers1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={mers2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={mers3} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
