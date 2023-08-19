import image from "../assets/learning images/online-meet.png";

import "swiper/swiper-bundle.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export default function BecomeMentor() {
  return (
    <div className="become-mentor">
      <div className="become-mentor__container">
        <div className="become-mentor__header">
          <h5 className="become-mentor__header-message">
            Registration has started! 🎉 🥳 🎊
          </h5>
          <div className="become-mentor__hero hero-become-mentor">
            <div className="hero-become-mentor__image">
              <img src={image} alt="go" />
            </div>
            <div className="hero-become-mentor__content content-hero-become-mentor">
              <h3>Open next chapter in your career by mentoring</h3>
              <p>
                At our platform, mentors are the lifeblood of our community.
                Your knowledge, passion and experience provides our members the
                support they need to build a career they love. Whether you’re a
                first time mentor or a lifelong learner, your mentorship can
                make a massive impact.
              </p>
              <button className="content-hero-become-mentor__button button">
                Become a mentor
              </button>
            </div>
          </div>
        </div>
        <div className="become-mentor__reviews-block reviews-block-become-mentor">
          <h3 className="reviews-block-become-mentor__title">
            Mentoring can help you turn your passion into conversations,
            friendships and network globally
          </h3>
          <div className="reviews-block-become-mentor__reviews">
            <div className="container-box">
              <div className="small-container">
                <Swiper
                  slidesPerView={3}
                  watchSlidesVisibility={true}
                  navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                  autoHeight={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                >
                  <SwiperSlide>
                    <div className="box">slide</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">slide</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">slide</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">slide</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box">slide</div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <FaArrowAltCircleLeft className="arrow-left arrow" />
              <FaArrowAltCircleRight className="arrow-right arrow" />
              {/* <button className="arrow-left arrow">Prev</button>
              <button className="arrow-right arrow">next</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
