import {Swiper,SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper';

import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { GoQuote } from "react-icons/go";

import image_gallary_1 from '../../assets/images/about_us.webp';
import image_gallary_2 from '../../assets/images/about_us2.webp';


import "./experience.scss";

export const Experience: React.FC<{}> = () =>{
  return (
    <section  className="experience_section">
      <div className="heading-details">
        <div className="left">
          <h4 className="experience_sub_title">TESTIMONIALS</h4>
          <h2 className="experience_title">WHAT PEOPLE SAYS ABOUT US</h2>
          <p className="experience_text">
            We had an absolutely amazing time on our two-day tour with Kawira! Isaac was a fantastic guide, 
            extremely friendly and knowledgeable and lots of good conversation along the way. 
            Ian went above and beyond to organize our tour as well as help us organize other parts of our vacation. 
            Nyungwe Forest is just stunningly beautiful and is a must-visit for a trip to Rwanda.
            I can't recommend Kawira enough - great tour and lovely people!
          </p>
        </div>
        <div className="holzpntal"></div>
        <div className="right">
          <div className="domain_more_btn">
            <HiArrowNarrowRight />
            <p>EXPLORE ALL EXPERIENCES</p>
          </div>
        </div>
          {/* <div className="card-link-button">
            <div className="icon"></div>
            <span>EXPLORE ALL EXPERIENCES</span>
          </div>
        </div> */}
      </div>

      <div className="card-body">
        <Swiper
        //   style={{
        //   "--swiper-navigation-color": "#ccc",
        //   "--swiper-pagination-color": "#ccc",
        // }}
          // effect={'coverflow'}
          // pagination={{el: '.swiper-pagination',clickable: true}}
          navigation={true}
          // navigation={{
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev'
          // }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          speed={1000}
          grabCursor={true}
          loop={true}
          // centeredSlides={true}
          // slidesPerView={'auto'}
          // navigation={true}
          // spaceBetween={45}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }
          }
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // 480: {
            //   slidesPerView: 1,
            //   // spaceBetween: 20,
            // },
            // 640: {
            //   slidesPerView: 2,
            //   // spaceBetween: 20,
            // },
            786: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 180,
            },
          }}
          className="swiper_container"
          >
          <SwiperSlide>
            <div className="card-holder">
              <div className="card-content">
                <div className="car-image-holder">
                  <img src={image_gallary_2} alt="flit_1" />
                </div>
                <div className="card-details-holder">
                    <h3 className="card-header">Nature walks</h3>
                    <p className="card-paragraph">
                    We had an absolutely amazing time on our two-day tour with Kawira! Isaac was a fantastic guide,
                    extremely friendly and knowledgeable and lots of good conversation along the way.
                    Ian went above and beyond to organize our tour as well as help us organize other parts of our vacation.
                    Nyungwe Forest is just stunningly beautiful and is a must-visit for a trip to Rwanda.
                    I can't recommend Kawira enough - great tour and lovely people!
                    </p>
                    {/* <div className="card-link-button">
                      <HiArrowNarrowRight />
                      <span>Nature Walks</span>
                    </div> */}
                    <div className="card_location">
                      <GoQuote />
                      <p>Rachel - <span>Trip-advisor </span></p>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-holder">
              <div className="card-content">
                <div className="car-image-holder">
                  <img src={image_gallary_1} alt="flit_1" />
                </div>
                <div className="card-details-holder">
                    <h3 className="card-header">Nature walks</h3>
                    <p className="card-paragraph">
                      I've been on a handful of Safaris in east Africa and my trip with Ian and Kawira was by far the best.
                      The guides were super accommodating and had great stories to tell.
                      Couldn't have chosen a better way to see the gorillas in Rwanda and would recommend Ian and his crew to anyone! 
                    </p>
                    <div className="card_location">
                      <GoQuote />
                      <p>Duncan - <span>Tripadvisor</span></p>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-holder">
              <div className="card-content">
                <div className="car-image-holder">
                  <img src={image_gallary_2} alt="flit_1" />
                </div>
                <div className="card-details-holder">
                    <h3 className="card-header">Nature walks</h3>
                    <p className="card-paragraph">
                    We had an absolutely amazing time on our two-day tour with Kawira! Isaac was a fantastic guide,
                    extremely friendly and knowledgeable and lots of good conversation along the way.
                    Ian went above and beyond to organize our tour as well as help us organize other parts of our vacation.
                    Nyungwe Forest is just stunningly beautiful and is a must-visit for a trip to Rwanda.
                    I can't recommend Kawira enough - great tour and lovely people!
                    </p>
                    {/* <div className="card-link-button">
                      <HiArrowNarrowRight />
                      <span>Nature Walks</span>
                    </div> */}
                    <div className="card_location">
                      <GoQuote />
                      <p>Rachel - <span>Trip-advisor </span></p>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-holder">
              <div className="card-content">
                <div className="car-image-holder">
                  <img src={image_gallary_1} alt="flit_1" />
                </div>
                <div className="card-details-holder">
                    <h3 className="card-header">Nature walks</h3>
                    <p className="card-paragraph">
                      I've been on a handful of Safaris in east Africa and my trip with Ian and Kawira was by far the best.
                      The guides were super accommodating and had great stories to tell.
                      Couldn't have chosen a better way to see the gorillas in Rwanda and would recommend Ian and his crew to anyone! 
                    </p>
                    <div className="card_location">
                      <GoQuote />
                      <p>Duncan - <span>Tripadvisor</span></p>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <HiArrowNarrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <HiArrowNarrowRight />
            </div>
          </div> */}
        </Swiper>
      </div>
    </section>
  )
}