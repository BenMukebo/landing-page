import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Zoom, Navigation, Pagination,  Autoplay } from "swiper";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Log1 from '../../assets/images/logo1.webp';
import Log2 from '../../assets/images/logo2.webp';
import Log3 from '../../assets/images/logo3.webp';
import Log4 from '../../assets/images/logo4.webp';

import './company.scss';

export const Company = () => {
  useEffect(() => {
    AOS.init({duration: 2500});
    AOS.refresh(500);
  }, []);

  return (
    <div className="campany_main my-40 relative" data-aos="fade-up" data-aos-duration="3000">
      <div className="cercle-03" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" />
      {/* <div className="cercle-04" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" /> */}
      <div className="membership_header">
        <h2 className="membership_title">Membership</h2>
        <p className="membership_text" data-aos="fade-up" data-aos-duration="3000">
          The partner up with there clients,  the partner up with there clients
        </p>
      </div>

        <Swiper
        // style={{
        //   "--swiper-navigation-color": "#ccc",
        //   "--swiper-pagination-color": "#ccc",
        // }}
        // slidesPerView={2}
        // spaceBetween={25}
        // navigation={true}
        zoom={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        speed={800}
        loop
        modules={[Zoom, Navigation, Pagination, Autoplay]}
        className="mySwiper"  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          540: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          786: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="logo_img swiper-zoom-container">
            <img src={Log1} alt="logo_1" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo_img swiper-zoom-container">
            <img src={Log2} alt="logo_2" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo_img swiper-zoom-container">
            <img src={Log3} alt="logo_3" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo_img swiper-zoom-container">
            <img src={Log4} alt="logo_4" loading="lazy" />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Log1} alt="logo_1" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Log2} alt="logo_1" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo_img swiper-zoom-container">
            <img src={Log3} alt="logo_3" loading="lazy" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo_img swiper-zoom-container">
            <img src={Log4} alt="logo_4" loading="lazy" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

