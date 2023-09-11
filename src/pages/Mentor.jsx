import Spinner from "../components/Spinner";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import { getMentor } from "../context/PlatformActions";

//context

//

import { allMentorsArray } from "../data/data-mentors/allMentorsArray";

//

import { PlatformContext } from "../context/PlatformContext";

// fix issue with loading page - Cannot read properties of undefined (reading 'map')
// fix issue witj loading images at reloading page
// fix issue with calling getMentor not 2 times after click, but 1 time after click, one time after reloading
// if I call only 1 time in mentor page then I see previous profile pic for a while before loading

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
  const navigate = useNavigate();
  const params = useParams();
  const { singleMentor, /* featuredMentors */ dispatch, loading } =
    useContext(PlatformContext);
  console.log("Here, on mentor page we get object from context", singleMentor);
  /* const [mentorData, setMentorData] = useState({}); */

  console.log(
    "mentors array from context",
    allMentorsArray /* featuredMentors */
  );

  useEffect(() => {
    const mentorObject = getMentor(params.name, allMentorsArray);
    console.log("taken object from calling getMentor", mentorObject);
    dispatch({ type: "GET_MENTOR", payload: mentorObject });
    window.scrollTo(0, 0);
  }, []);
  //

  useEffect(
    () => {
      /* dispatch({ type: "SET_LOADING" });
    const mentorObject = getMentor(
      params.name,
      allMentorsArray //featuredMentors 
    );
    console.log("taken object from calling getMentor", mentorObject);
    dispatch({ type: "GET_MENTOR", payload: mentorObject }); */
      window.scrollTo(0, 0);
    },
    [
      /* dispatch, params.name */
    ]
  );

  //
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
      {singleMentor && (
        <div className="mentor-page__container">
          <div className="mentor-page__data">
            <div className="mentor-page__content content-mentor-page">
              {/* 1 row with 2 cols*/}
              <div className="content-mentor-page__item content-mentor-page__image image-content-mentor-page">
                <img src={singleMentor.profileImg} alt="mentor" />
              </div>
              <div className="content-mentor-page__item content-mentor-page__info info-content-mentor-page">
                <div className="info-content-mentor-page__header header-info-content-mentor-page">
                  <div className="header-info-content-mentor-page__avatar">
                    <img src={singleMentor.image} alt="avatar" />
                  </div>
                  <div className="header-info-content-mentor-page__personal-data personal-data-header-info-content-mentor-page">
                    <h3 className="personal-data-header-info-content-mentor-page__fullname">
                      {singleMentor.name}
                    </h3>
                    <p className="personal-data-header-info-content-mentor-page__job">
                      {singleMentor.job}
                    </p>
                  </div>
                </div>
                <div className="info-content-mentor-page__bio bio-info-content-mentor-page">
                  <h4 className="bio-info-content-mentor-page__title">
                    About me
                  </h4>
                  <p className="bio-info-content-mentor-page__text">
                    {singleMentor.about}
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
                    {singleMentor.skills &&
                      singleMentor.skills.map((skill, index) => {
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
                  {singleMentor.experienceTitle}
                </p>
                <p className="resume-content-mentor-page__description">
                  {singleMentor.experienceDescription}
                </p>
                <div className="resume-content-mentor-page__lang">
                  <h5>Languages</h5>
                  {singleMentor.languages &&
                    singleMentor.languages.map((lan) => {
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

                    <button
                      /* to="https://calendly.com/stasmasevych/mentors-session" */
                      className="item-list-booking-info-content-mentor-page__btn-book button"
                      onClick={() => navigate(`/mentor/${params.name}/apply`)}
                    >
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
                      Package of calls/month
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__price">
                      6000 UAH
                    </div>

                    <div className="item-list-booking-info-content-mentor-page__time">
                      6 calls (50 min each)
                    </div>

                    <button className="item-list-booking-info-content-mentor-page__btn-book item-list-booking-info-content-mentor-page__btn-book-last button">
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
                {singleMentor.topics &&
                  singleMentor.topics.map((topic, index) => {
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
