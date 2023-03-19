import React from "react";

import avatarIImg from '../assets/img/avatar1.jpg';
import avatarIIImg from '../assets/img/avatar2.jpg';
import avatarIIIImg from '../assets/img/avatar3.jpg';
import avatarIVImg from '../assets/img/avatar4.jpg';
import avatarVImg from '../assets/img/avatar5.jpg';
import avatarVIImg from '../assets/img/avatar6.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
function TestimonialSlider() {
    return (
        <>
            <div>
                <Swiper
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 3000 }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: 50,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 150,
                        },
                    }}
                >
                    <SwiperSlide className="swiper-slide">
                        <div style={{ paddingRight: 20, paddingLeft: 20, }} >
                            <div className="testimonials-profile-circle">
                                <img src={avatarIImg} alt="testimonial-avatar" className="testimonial-avatar" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Undedicta, quibusdam dolor eligendi quaerat nulla.</p>
                            <h6 className="review-by">- Jessica Biel </h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div style={{ paddingRight: 20, paddingLeft: 20, }} >
                            <div className="testimonials-profile-circle">
                                <img src={avatarIIImg} alt="testimonial-avatar" className="testimonial-avatar" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Undedicta, quibusdam dolor eligendi quaerat nulla.</p>
                            <h6 className="review-by">- Jeven Martyn </h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div style={{ paddingRight: 20, paddingLeft: 20, }} >
                            <div className="testimonials-profile-circle">
                                <img src={avatarIIIImg} alt="testimonial-avatar" className="testimonial-avatar" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Undedicta, quibusdam dolor eligendi quaerat nulla.</p>
                            <h6 className="review-by">- Jammie White </h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div style={{ paddingRight: 20, paddingLeft: 20, }} >
                            <div className="testimonials-profile-circle">
                                <img src={avatarIVImg} alt="testimonial-avatar" className="testimonial-avatar" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Undedicta, quibusdam dolor eligendi quaerat nulla.</p>
                            <h6 className="review-by">- Adam Youns </h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div style={{ paddingRight: 20, paddingLeft: 20, }} >
                            <div className="testimonials-profile-circle">
                                <img src={avatarVImg} alt="testimonial-avatar" className="testimonial-avatar" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Undedicta, quibusdam dolor eligendi quaerat nulla.</p>
                            <h6 className="review-by">-	Shirley Parker </h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div style={{ paddingRight: 20, paddingLeft: 20, }} >
                            <div className="testimonials-profile-circle">
                                <img src={avatarVIImg} alt="testimonial-avatar" className="testimonial-avatar" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Undedicta, quibusdam dolor eligendi quaerat nulla.</p>
                            <h6 className="review-by">- Maria Reynolds </h6>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}

export default TestimonialSlider;