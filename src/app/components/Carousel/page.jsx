"use client"; //For the client-side rendering
import { Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from 'next/image';
import categoryImage from '../../../../public/img/category.png';
import style from "./carousel.module.css"

const Carousel = () => {
  const images =[
    {src:{categoryImage}, alt:"image1"},
    {src:{categoryImage}, alt:"image1"},
    {src:{categoryImage}, alt:"image1"},
    {src:{categoryImage}, alt:"image1"},
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      className={style.mySwiper}
    >
      {images.map((Image, index) => (
        <SwiperSlide key={index}>
          <Image src={categoryImage} alt="images" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;