import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import { getMentor } from "../context/PlatformActions";

//context

import { PlatformContext } from "../context/PlatformContext";

// fix issue with loading page - Cannot read properties of undefined (reading 'map')

// take mentor obj from reducer by context
// probably put in local state
// use it in UI

// may be add * on free 10min call
// add grid layouts for profile image - not equal as now
// add amount of mentors sessions to show
// add button "leave an application" for free 10min call
// add mentors topics with title and description
// add section on articles and videos with mentor
// add reviews

export default function Mentor() {
  const { mentor, mentors, dispatch, loading } = useContext(PlatformContext);
  console.log("Here, on mentor page we get object from context", mentor);
  /* const [mentorData, setMentorData] = useState({}); */
  
  console.log("mentors array from context", mentors);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const mentorObject = getMentor(params.name, mentors);
    console.log("taken object from calling getMentor", mentorObject);
    dispatch({ type: "GET_MENTOR", payload: mentorObject });
    window.scrollTo(0, 0);
  }, [dispatch, params.name]);
  /* console.log(params); */

  /*  useEffect(() => {
    function getMentorData() {
      const userData = getMentor(params.name, mentors);
      dispatch({ type: "GET_MENTOR", payload: userData });
    }
    getMentorData();
  }, [params, dispatch]); */

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mentor-page" style={{ overflowY: "scroll" }}>
      {mentor && (
        <div className="mentor-page__container">
          <div className="mentor-page__data">
            <div className="mentor-page__content content-mentor-page">
              {/* 1 row with 2 cols*/}
              <div className="content-mentor-page__item content-mentor-page__image image-content-mentor-page">
                <img src={mentor.profileImg} alt="mentor" />
              </div>
              <div className="content-mentor-page__item content-mentor-page__info info-content-mentor-page">
                <div className="info-content-mentor-page__header header-info-content-mentor-page">
                  <div className="header-info-content-mentor-page__avatar">
                    <img src={mentor.image} alt="avatar" />
                  </div>
                  <div className="header-info-content-mentor-page__personal-data personal-data-header-info-content-mentor-page">
                    <h3 className="personal-data-header-info-content-mentor-page__fullname">
                      {mentor.name}
                    </h3>
                    <p className="personal-data-header-info-content-mentor-page__job">
                      {mentor.job}
                    </p>
                  </div>
                </div>
                <div className="info-content-mentor-page__bio bio-info-content-mentor-page">
                  <h4 className="bio-info-content-mentor-page__title">
                    About me
                  </h4>
                  <p className="bio-info-content-mentor-page__text">
                    {mentor.about}
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
                    {mentor.skills &&
                      mentor.skills.map((skill, index) => {
                        return (
                          <li
                            key={index}
                            className="list-mentor-topics-info-content-mentor-page__item"
                          >
                            {skill}
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="info-content-mentor-page__separator-block">
                  <hr />
                </div>
              </div>
              {/* 2 row with 2 cols*/}
              <div className="content-mentor-page__resume resume-content-mentor-page">
                <h3 className="resume-content-mentor-page__title">
                  Mentor's resume
                </h3>
                <p className="resume-content-mentor-page__subtitle">
                  {mentor.experienceTitle}
                </p>
                <p className="resume-content-mentor-page__description">
                  {mentor.experienceDescription}
                </p>
                <div className="resume-content-mentor-page__lang">
                  <h5>Languages</h5>
                  {mentor.languages &&
                    mentor.languages.map((lan) => {
                      return <p>{lan}</p>;
                    })}
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
                      Package of 6 calls/month
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
                  {/* <li className="list-booking-info-content-mentor-page__item item-list-booking-info-content-mentor-page">
                    <div className="item-list-booking-info-content-mentor-page__title">
                      First session to check whether mentor can help you
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__price">
                      Free
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__time">
                      15 min
                    </div>

                    <button className="item-list-booking-info-content-mentor-page__btn-book button">
                      Apply now
                    </button>

                    <button className="item-list-booking-info-content-mentor-page__btn-details">
                      How it works
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="content-mentor-page__item  content-mentor-page__help help-content-mentor-page">
              <h3 className="help-content-mentor-page__title">
                Mentor can help you with such topics 🚀
              </h3>
              <ul className="help-content-mentor-page__list list-help-content-mentor-page">
                {mentor.topics &&
                  mentor.topics.map((topic, index) => {
                    return (
                      <li
                        key={index}
                        className="list-help-content-mentor-page__item"
                      >
                        {topic}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
