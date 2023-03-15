import "./experience.css";
import {Swiper,SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image_gallary_1 from '../../assets/images/about_us.webp';

// import {EffectCoverflow,Pagination,Navigation} from 'swiper';

export const Experience: React.FC<{}> = () =>{
    return (
        <div className="fill-color">
            <div className="heading-details">
                <div className="left">
                    <h5>OUR EXPERIENCES</h5>
                    <h1>Experience real, raw nature</h1>
                    <p>Travelling is about more than the places you visit and the things you'll see.
                        it's about people, culture, wildlife, history, and experiecing something you've never done before. With Wilderness you'll walk, boat, barge, float, fly. drive, ride, trek, track and discover a world of adventures.
                    </p>
                </div>
                <div className="right">
                    <div className="card-link-button">
                        <div className="icon"></div>
                        <span>EXPLORE ALL EXPERIENCES</span>
                    </div>
                </div>
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
                className="swiper_container"
                >
                    <SwiperSlide>
                    <div className="card-holder">
                        <div className="card-content">
                            <div className="car-image-holder">
                                <img src={image_gallary_1} alt="flit_1" />
                            </div>
                            <div className="card-details-holder">
                                <div className="card-header">
                                    <h1>Nature walks</h1>
                                </div>
                                <div className="card-paragraph">
                                    <p>
                                        Have your camera ready and lace up your walking shoes - once your feet touch African soil, you’ll understand the magic.
                                    </p>
                                </div>
                                <div className="card-link-button">
                                    <div className="icon"></div>
                                    <span>Nature Walks</span>
                                </div>
                                <div className="card-bottom">
                                    <div className="icon"></div>
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
                                <div className="card-header">
                                    <h1>Nature walks</h1>
                                </div>
                                <div className="card-paragraph">
                                    <p>
                                        Have your camera ready and lace up your walking shoes - once your feet touch African soil, you’ll understand the magic.
                                    </p>
                                </div>
                                <div className="card-link-button">
                                    <div className="icon"></div>
                                    <span>Nature Walks</span>
                                </div>
                                <div className="card-bottom">
                                    <div className="icon"></div>
                                    <span>Namibia, Rwanda</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
            </Swiper>

        
        </div>
        </div>
    )
}