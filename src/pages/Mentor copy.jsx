import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";

import { getMentor } from "../context/PlatformActions";

//context

import { PlatformContext } from "../context/PlatformContext";
// take mentor obj from reducer by context
// probably put in local state
// use it in UI

// may be add * on free 10min call
// add section on articles and videos with mentor
// add reviews

export default function Mentor() {
  const { user, mentors, dispatch } = useContext(PlatformContext);
  console.log("Here, on mentor page we get object from context", user);

  const params = useParams();
  /* console.log(params); */

  /*  useEffect(() => {
    function getMentorData() {
      const userData = getMentor(params.name, mentors);
      dispatch({ type: "GET_MENTOR", payload: userData });
    }
    getMentorData();
  }, [params, dispatch]); */

  return (
    <div className="mentor-page">
      <div className="mentor-page__container">
        <div className="mentor-page__data">
          <div className="mentor-page__content content-mentor-page">
            {/* 1 row with 2 cols*/}
            <div className="content-mentor-page__item content-mentor-page__image image-content-mentor-page">
              <img
                src="https://imagenes.elpais.com/resizer/9tX1xfFRdQHaWmyBNmogk1RO8LY=/1960x1470/filters:focal(2711x571:2721x581)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z7BKF73AQ5F4DNJRBKAQGDMAQY.jpeg"
                alt="mentor"
              />
            </div>
            <div className="content-mentor-page__item content-mentor-page__info info-content-mentor-page">
              <div className="info-content-mentor-page__header header-info-content-mentor-page">
                <div className="header-info-content-mentor-page__avatar">
                  <img
                    src="https://i.guim.co.uk/img/media/e8cc4010e7b6f9b6f5951ffd0bddb77c07481b44/0_160_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=452d2ea2c75f4d05496dfc3b3330e4e7"
                    alt="avatar"
                  />
                </div>
                <div className="header-info-content-mentor-page__personal-data personal-data-header-info-content-mentor-page">
                  <h3 className="personal-data-header-info-content-mentor-page__fullname">
                    Adam Neumann
                  </h3>
                  <p className="personal-data-header-info-content-mentor-page__job">
                    Founder WeWork
                  </p>
                </div>
              </div>
              <div className="info-content-mentor-page__bio bio-info-content-mentor-page">
                <h4 className="bio-info-content-mentor-page__title">
                  About me
                </h4>
                <p className="bio-info-content-mentor-page__text">
                  David Henzel is the CEO of UpCoach and a veteran entrepreneur
                  who has been building companies in the SaaS and e-commerce
                  space for over 20 years. He's had multiple exits, including
                  MaxCDN. In addition to UpCoach he runs a portfolio of
                  companies and employs more than 400 people. His passion is to
                  help individuals and their organizations reach their full
                  potential.
                </p>
              </div>
              <div className="info-content-mentor-page__separator-block seperator-block">
                <hr />
              </div>
              <div className="info-content-mentor-page__mentor-topics mentor-topics-info-content-mentor-page">
                <h4 className="mentor-topics-info-content-mentor-page__title">
                  Skills
                </h4>
                <ul className="mentor-topics-info-content-mentor-page__list list-mentor-topics-info-content-mentor-page">
                  <li className="list-mentor-topics-info-content-mentor-page__item">
                    React
                  </li>
                  <li className="list-mentor-topics-info-content-mentor-page__item">
                    Javascript
                  </li>
                  <li className="list-mentor-topics-info-content-mentor-page__item">
                    Typescript
                  </li>
                  <li className="list-mentor-topics-info-content-mentor-page__item">
                    Vite
                  </li>
                  <li className="list-mentor-topics-info-content-mentor-page__item">
                    Career
                  </li>
                </ul>
              </div>
              <div className="info-content-mentor-page__separator-block">
                <hr />
              </div>
              {/* <div className="info-content-mentor-page__booking booking-info-content-mentor-page">
                <ul className="booking-info-content-mentor-page__list list-booking-info-content-mentor-page">
                  <li className="list-booking-info-content-mentor-page__item item-list-booking-info-content-mentor-page">
                    <div className="item-list-booking-info-content-mentor-page__title">
                      Video call
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__price">
                      600 UAH/call
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__time">
                      30 min
                    </div>

                    <button className="item-list-booking-info-content-mentor-page__btn-book button">
                      Book now
                    </button>

                    <button className="item-list-booking-info-content-mentor-page__btn-details">
                      How it works
                    </button>
                  </li>
                  <li className="list-booking-info-content-mentor-page__item item-list-booking-info-content-mentor-page">
                    <div className="item-list-booking-info-content-mentor-page__title">
                      Video call
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__price">
                      1200 UAH/call
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__time">
                      50 min
                    </div>

                    <button className="item-list-booking-info-content-mentor-page__btn-book button">
                      Book now
                    </button>

                    <button className="item-list-booking-info-content-mentor-page__btn-details">
                      How it works
                    </button>
                  </li>
                  <li className="list-booking-info-content-mentor-page__item item-list-booking-info-content-mentor-page">
                    <div className="item-list-booking-info-content-mentor-page__title">
                      Montly subscription
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__price">
                      6000 UAH/month
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__time">
                      6 calls (50 min each)
                    </div>

                    <button className="item-list-booking-info-content-mentor-page__btn-book button">
                      Book now
                    </button>

                    <button className="item-list-booking-info-content-mentor-page__btn-details">
                      How it works
                    </button>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* 2 row with 2 cols*/}
            <div className="content-mentor-page__resume resume-content-mentor-page">
              <h3 className="resume-content-mentor-page__title">
                Mentor's resume
              </h3>
              <p className="resume-content-mentor-page__subtitle">
                5 years of experience in React development
              </p>
              <p className="resume-content-mentor-page__description">
                David Henzel is the CEO of UpCoach and a veteran entrepreneur
                who has been building companies in the SaaS and e-commerce space
                for over 20 years. He's had multiple exits, including MaxCDN. In
                addition to UpCoach he runs a portfolio of companies and employs
                more than 400 people. His passion is to help individuals and
                their organizations reach their full potential.
              </p>
              <div className="resume-content-mentor-page__lang">
                <h5>Languages</h5>
                <p>English, Ukrainian</p>
              </div>
            </div>
            <div className="info-content-mentor-page__booking booking-info-content-mentor-page">
              <ul className="booking-info-content-mentor-page__list list-booking-info-content-mentor-page">
                <li className="list-booking-info-content-mentor-page__item item-list-booking-info-content-mentor-page">
                  <div className="item-list-booking-info-content-mentor-page__title">
                    Video call
                  </div>

                  <div className="item-list-booking-info-content-mentor-page__price">
                    600 UAH/call
                  </div>

                  <div className="item-list-booking-info-content-mentor-page__time">
                    30 min
                  </div>

                  <button className="item-list-booking-info-content-mentor-page__btn-book button">
                    Book now
                  </button>

                  <button className="item-list-booking-info-content-mentor-page__btn-details">
                    How it works
                  </button>
                </li>
                <li className="list-booking-info-content-mentor-page__item item-list-booking-info-content-mentor-page">
                  <div className="item-list-booking-info-content-mentor-page__title">
                    Video call
                  </div>

                  <div className="item-list-booking-info-content-mentor-page__price">
                    1200 UAH/call
                  </div>

                  <div className="item-list-booking-info-content-mentor-page__time">
                    50 min
                  </div>

                  <button className="item-list-booking-info-content-mentor-page__btn-book button">
                    Book now
                  </button>

                  <button className="item-list-booking-info-content-mentor-page__btn-details">
                    How it works
                  </button>
                </li>
                <li className="list-booking-info-content-mentor-page__item item-list-booking-info-content-mentor-page">
                  <div className="item-list-booking-info-content-mentor-page__title">
                    Montly subscription
                  </div>

                  <div className="item-list-booking-info-content-mentor-page__price">
                    6000 UAH/month
                  </div>

                  <div className="item-list-booking-info-content-mentor-page__time">
                    6 calls (50 min each)
                  </div>

                  <button className="item-list-booking-info-content-mentor-page__btn-book button">
                    Book now
                  </button>

                  <button className="item-list-booking-info-content-mentor-page__btn-details">
                    How it works
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="content-mentor-page__item  mentor-page__details details-mentor-page">
            <div className="details-mentor-page__resume resume-etails-mentor-page">
              <h3 className="resume-etails-mentor-page__title">
                Mentor's resume
              </h3>
              <p className="resume-etails-mentor-page__subtitle">
                5 years of experience in React development
              </p>
              <p className="resume-etails-mentor-page__description">
                David Henzel is the CEO of UpCoach and a veteran entrepreneur
                who has been building companies in the SaaS and e-commerce space
                for over 20 years. He's had multiple exits, including MaxCDN. In
                addition to UpCoach he runs a portfolio of companies and employs
                more than 400 people. His passion is to help individuals and
                their organizations reach their full potential.
              </p>
              <div className="resume-etails-mentor-page__lang">
                <h5>Languages</h5>
                <p>English, Ukrainian</p>
              </div>
            </div>
            <div className="details-mentor-page__item details-mentor-page__help help-details-mentor-page">
              <h3>I can help you with</h3>
              <ul className="help-details-mentor-page__list">
                <li>react</li>
                <li>react</li>
                <li>react</li>
                <li>react</li>
                <li>react</li>
              </ul>
            </div>
          </div> */}
          <div className="content-mentor-page__item  content-mentor-page__help help-content-mentor-page">
            <h3 className="help-content-mentor-page__title">
              Mentor can help you with such topics 🚀
            </h3>
            <ul className="help-content-mentor-page__list list-help-content-mentor-page">
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
              <li className="list-help-content-mentor-page__item">
                Using Redux for building React applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
