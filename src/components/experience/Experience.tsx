import {Swiper,SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { HiArrowNarrowRight,HiArrowNarrowLeft } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

import image_gallary_1 from '../../assets/images/about_us.webp';

import "./experience.scss";
import {EffectCoverflow,Pagination,Navigation} from 'swiper';

export const Experience: React.FC<{}> = () =>{
  return (
    <section  className="experience_section">
      <div className="heading-details">
        <div className="left">
          <h4 className="experience_sub_title">OUR EXPERIENCES</h4>
          <h2 className="experience_title">Experience real, raw nature</h2>
          <p className="experience_text">Travelling is about more than the places you visit and the things you'll see.
              it's about people, culture, wildlife, history, and experiecing something you've never done before. With Wilderness you'll walk, boat, barge, float, fly. drive, ride, trek, track and discover a world of adventures.
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
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={
            {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }
          }
          pagination={{el: '.swiper-pagination',clickable: true}}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[EffectCoverflow,Pagination,Navigation]}
          className="swiper_container"
          >
          <SwiperSlide>
            <div className="card-holder">
              <div className="card-content">
                <div className="car-image-holder">
                  <img src={image_gallary_1} alt="flit_1" />
                </div>
                <div className="card-details-holder">
                    <h3 className="card-header">Nature walks</h3>
                    <p className="card-paragraph">
                      Have your camera ready and lace up your walking shoes - once your feet touch African soil, you’ll understand the magic.
                    </p>
                    {/* <div className="card-link-button">
                        <div className="icon"></div>
                        <span>Nature Walks</span>
                    </div> */}
                    <div className="card-link-button">
                      <HiArrowNarrowRight />
                      <span>Nature Walks</span>
                    </div>
                    <div className="card_location">
                      <FiMapPin />
                      <span>Namibia, Rwanda</span>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-holder">
              <div className="card-content">
                <div className="car-image-holder">
                  <img src={image_gallary_1} alt="flit_2" />
                </div>

                <div className="card-details-holder">
                  <h3 className="card-header">Nature walks</h3>
                  <p className="card-paragraph">
                    Have your camera ready and lace up your walking shoes - once your feet touch African soil, you’ll understand the magic.
                  </p>
                  <div className="card-link-button">
                    <HiArrowNarrowRight />
                    <span>Nature Walks</span>
                  </div>
                  <div className="card_location">
                    <FiMapPin />
                    <span>Namibia, Rwanda</span>
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