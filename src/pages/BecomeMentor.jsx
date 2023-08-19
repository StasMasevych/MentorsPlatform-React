import image from "../assets/learning images/online-meet.png";

import "swiper/swiper-bundle.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { allMentorsArray } from "../data/data-mentors/allMentorsArray";
import MentorsList from "../components/MentorsList";
import MentorItem from "../components/MentorItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export default function BecomeMentor() {
  const mentorsReviewArray = allMentorsArray.slice(0, 6);

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
          <div className="reviews-block-become-mentor__slider">
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              autoHeight={true}
              navigation={{
                prevEl: ".prevBtn",
                nextEl: ".nextBtn",
              }}
            >
              {mentorsReviewArray.map((mentor) => {
                return (
                  <SwiperSlide>
                    <MentorItem mentor={mentor} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div
              style={{
                margin: "18px auto",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <button className="prevBtn button-slider">
                <BsArrowLeftCircle size={32} />
              </button>
              <button className="nextBtn button-slider">
                <BsArrowRightCircle size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
