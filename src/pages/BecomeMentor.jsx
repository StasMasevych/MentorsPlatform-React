import "swiper/swiper-bundle.css";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { mentorsReviews } from "../data/data-reviews/data-mentorsReviews";

import MentorReviewItem from "../components/MentorReviewItem";

import image from "../assets/learning images/online-meet.png";
import codingImg from "../assets/masterclass/react-session.png";
import designingImg from "../assets/masterclass/figma-session.png";
import pmImg from "../assets/masterclass/pm-session.png";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export default function BecomeMentor() {
  const navigate = useNavigate();
  /*  const mentorsReviewArray = mentorsReviews.slice(0, 6); */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
              <h3>Open next chapter in your career by mentoring ⭐️</h3>
              <p>
                At our platform, mentors are the lifeblood of our community.
                Your knowledge, passion and experience provides our members the
                support they need to build a career they love. Whether you’re a
                first time mentor or a lifelong learner, your mentorship can
                make a massive impact.
              </p>

              <button
                className="content-hero-become-mentor__button button"
                onClick={() => navigate("/application")}
              >
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
          <div className="reviews-block-become-mentor__slider slider-reviews-block-become-mentor">
            <Swiper
              /* slidesPerView={3} */
              /* spaceBetween={10} */
              spaceBetween={5}
              autoHeight={true}
              navigation={{
                prevEl: ".prevBtn",
                nextEl: ".nextBtn",
              }}
              breakpoints={{
                // when window width is >= 576px
                576: {
                  /* width: 676, */
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  /* width: 868, */
                  slidesPerView: 2,
                },
                991: {
                  /* width: 1001, */
                  slidesPerView: 3,
                },
              }}
            >
              {mentorsReviews.map((mentor) => {
                return (
                  <SwiperSlide style={{ listStyle: "none" }}>
                    <MentorReviewItem mentor={mentor} />
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

        <div className="become-mentor__live-session live-session-become-mentor">
          <h3 className="live-session-become-mentor__title">
            Do you have a relevant experience and want to share it with others ?
            Let's go! 🙌
          </h3>
          <p className="live-session-become-mentor__subtitle">
            In our platform youe can share your cool experience in coding,
            design, project managament and more! It's great when you create
            around you a good community of learners!
          </p>
          <div className="live-session-become-mentor__content content-live-session-become-mentor">
            <ul className="content-live-session-become-mentor__list list-content-live-session-become-mentor">
              <li className="list-content-live-session-become-mentor__item item-list-content-live-session-become-mentor">
                <h5 className="item-list-content-live-session-become-mentor__title">
                  Web and mobile development
                </h5>
                <div className="item-list-content-live-session-become-mentor__image">
                  <img src={codingImg} alt="go" />
                </div>
              </li>
              <li className="list-content-live-session-become-mentor__item">
                <h5 className="item-list-content-live-session-become-mentor__title">
                  UX/UI design and prototyping
                </h5>
                <div className="item-list-content-live-session-become-mentor__image">
                  <img src={designingImg} alt="go" />
                </div>
              </li>
              <li className="list-content-live-session-become-mentor__item">
                <h5 className="item-list-content-live-session-become-mentor__title">
                  Project/product management
                </h5>
                <div className="item-list-content-live-session-become-mentor__image">
                  <img src={pmImg} alt="go" />
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="live-session-become-mentor__guide">
            <p>
              Find our guide to become creator of live class under the link -
              link
            </p>
          </div> */}
          <button
            className="live-session-become-mentor__button button"
            onClick={() => navigate("/create-live-class")}
          >
            Become creator of live class
          </button>
        </div>
      </div>
    </div>
  );
}

// Do you have a relevant experience and want to share it with others ? Let's go!

// In our platform youe can share your cool experience in coding, design, project managament and more!
// It's great when you create aroud you good community of learners!
