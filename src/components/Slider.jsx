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
  const imageArr = [car1,car3,car4,car5,car2,mers1,mers2,mers3]
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
          {
            imageArr.map((el,i) => {

              return <SwiperSlide className="swiperslide">
                  <img src={el} alt={i}/>
                 </SwiperSlide>
            })
          }
      </Swiper>
    </div>
  );
}
