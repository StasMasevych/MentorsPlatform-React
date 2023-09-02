import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";

import { getLiveClass } from "../context/PlatformActions";

import { liveClassesArray } from "../data/data-courses/data-liveClasses";
import { PlatformContext } from "../context/PlatformContext";
import CantJoin from "../components/CantJoin";

import bgImage from "../assets/how it works images/programming-coffee.png";

// why our classes (3-4 cards)
// add reviews
// add FAQ

export default function LiveClass() {
  // for registartion
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [promo, setPromo] = useState("");
  //
  const { singleLiveClass, dispatch, registrationToLiveClass } =
    useContext(PlatformContext);
  console.log(registrationToLiveClass);
  const params = useParams();

  useEffect(() => {
    const LiveClassObject = getLiveClass(params.name, liveClassesArray);

    dispatch({ type: "GET_LIVE-CLASS", payload: LiveClassObject });
    window.scrollTo(0, 0);
  }, []);

  // registartion form

  async function onSubmitHandler(e) {
    e.preventDefault();

    const formData = {
      name,
      surname,
      email,
      phone,
      promo,
    };

    dispatch({ type: "GET_REGISTRATION-TO-CLASS", payload: formData });

    // send to firestore
    const docRef = collection(db, "registartionsToLiveClasses");

    const registartionData = {
      ...formData,
      timestamp: serverTimestamp(),
    };

    await addDoc(docRef, registartionData);

    setName("");
    setSurame("");
    setEmail("");
    setPhone("");
    setPromo("");
  }

  return (
    <div className="live-class">
      <div className="live-class__container">
        <div className="live-class__header header-live-class">
          <div className="header-live-class__text-block text-block-header-live-class header-live-class__item">
            <span className="header-live-class__text-block__live">
              Live session
            </span>
            <h3 className="text-block-header-live-class__title">
              {singleLiveClass.name}
            </h3>
            <div className="text-block-header-live-class__details details-text-block-header-live-class">
              <p className="details-text-block-header-live-class__category">
                {singleLiveClass.category}
              </p>
              <p className="details-text-block-header-live-class__date">
                🗓️ {singleLiveClass.startDate}
              </p>
              <p className="details-text-block-header-live-class__time">
                ⏰ {singleLiveClass.time}
              </p>
              <p className="details-text-block-header-live-class__duration">
                ⏳ {singleLiveClass.duration}
              </p>
            </div>
            <h5 className="text-block-header-live-class__subtitle">
              {singleLiveClass.shortDescription}
            </h5>
            <a
              className="text-block-header-live-class__button button"
              href="#registration"
            >
              Enroll now
            </a>
          </div>
          <div className="header-live-class__image header-live-class__item">
            <img src={singleLiveClass.image} alt="live-class" />
          </div>
        </div>

        <div className="live-class__main main-live-class">
          <div className="main-live-class__content content-main-live-class">
            <h5 className="content-main-live-class__hosted-text">Hosted by</h5>
            <div className="content-main-live-class__creator creator-content-main-live-class">
              <div className="creator-content-main-live-class__image">
                <img
                  /*  src="https://media.npr.org/assets/img/2019/09/24/ap_19267645664475-39a0b4700f0b4127e4f83db26f015b4b42aecd1a.jpg" */
                  src={singleLiveClass.tutorImg}
                  alt="creator"
                />
              </div>
              <div className="creator-content-main-live-class__text text-creator-content-main-live-class">
                <h6 className="text-creator-content-main-live-class__name">
                  Adam Neumann
                </h6>
                <p className="text-creator-content-main-live-class__job">
                  React developer
                </p>
              </div>
            </div>

            <div className="content-main-live-class__overview overview-content-main-live-class">
              <div className="overview-content-main-live-class__chapter">
                Class overview
              </div>
              <div className="overview-content-main-live-class__title">
                Harness the Potential of AI in Product Management
              </div>
              <div className="overview-content-main-live-class__description description-overview-content-main-live-class">
                <p className="description-overview-content-main-live-class__par">
                  This course provides comprehensive insights into leveraging AI
                  in product management. Gain a deep understanding of how AI can
                  optimize your product development process, improve
                  decision-making, and enhance user experiences.
                </p>
                <p className="description-overview-content-main-live-class__par">
                  Gain hands-on experience with a range of AI tools tailored for
                  product management tasks.
                </p>
                <p className="description-overview-content-main-live-class__par">
                  {" "}
                  Finally, leverage your newfound knowledge to create an
                  AI-driven product and gain recognition on the grand stage of
                  Demo Day.
                </p>
              </div>
            </div>

            <div className="content-main-live-class__separator separator"></div>

            {/* <div className="content-main-live-class__audience audience-content-main-live-class">
              <h4 className="audience-content-main-live-class__title">
                Who is this course for
              </h4>
              <ul className="audience-content-main-live-class__list list-audience-content-main-live-class">
                <li className="list-audience-content-main-live-class__item item-list-audience-content-main-live-class">
                  <span>👨‍💻</span>
                  <h5 className="item-list-audience-content-main-live-class__title">
                    Founders / Entrepreneurs
                  </h5>
                  <p className="item-list-audience-content-main-live-class__text">
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </li>
                <li className="list-audience-content-main-live-class__item">
                  <span>👨‍💻</span>
                  <h5 className="item-list-audience-content-main-live-class__title">
                    Founders / Entrepreneurs
                  </h5>
                  <p className="item-list-audience-content-main-live-class__text">
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </li>
                <li className="list-audience-content-main-live-class__item">
                  <span>👨‍💻</span>
                  <h5 className="item-list-audience-content-main-live-class__title">
                    Founders / Entrepreneurs
                  </h5>
                  <p className="item-list-audience-content-main-live-class__text">
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </li>
                <li className="list-audience-content-main-live-class__item">
                  <span>👨‍💻</span>
                  <h5 className="item-list-audience-content-main-live-class__title">
                    Founders / Entrepreneurs
                  </h5>
                  <p className="item-list-audience-content-main-live-class__text">
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="main-live-class__enrol-box enrol-box-main-live-class">
            <div className="enrol-box-main-live-class__details">
              <p className="enrol-box-main-live-class__price">600 UAH</p>
              <div className="enrol-box-main-live-class__separator"></div>
              <div className="enrol-box-main-live-class__schedule schedule-enrol-box-main-live-class">
                <p className="schedule-enrol-box-main-live-class__text">
                  Shedule
                </p>
                <div className="schedule-enrol-box-main-live-class__info info-schedule-enrol-box-main-live-class">
                  <p className="info-schedule-enrol-box-main-live-class__date">
                    🗓️ {singleLiveClass.startDate}
                  </p>
                  <p className="info-schedule-enrol-box-main-live-class__time">
                    ⏰ {singleLiveClass.time}
                  </p>
                </div>
                <p className="schedule-enrol-box-main-live-class__deadline">
                  🔚 Last day to enrol {singleLiveClass.startDate}
                </p>
              </div>
            </div>

            <a
              className="enrol-box-main-live-class__button button"
              href="#registration"
            >
              Enroll
            </a>
            <div className="enrol-box-main-live-class__include include-enrol-box-main-live-class">
              <h6 className="include-enrol-box-main-live-class__text">
                This live class include
              </h6>
              <p className="include-enrol-box-main-live-class__item">
                ⭐️ Live session with Q&A
              </p>
              <p className="include-enrol-box-main-live-class__item">
                ⏺️ Session recordings
              </p>
              <p className="include-enrol-box-main-live-class__item">
                📚 Exclusive resources
              </p>
            </div>
          </div>

          <div className="main-live-class__audience content-main-live-class__audience audience-content-main-live-class">
            <h4 className="audience-content-main-live-class__title">
              Who is this course for
            </h4>
            <ul className="audience-content-main-live-class__list list-audience-content-main-live-class">
              <li className="list-audience-content-main-live-class__item item-list-audience-content-main-live-class">
                <span>👨‍💻</span>
                <h5 className="item-list-audience-content-main-live-class__title">
                  Founders / Entrepreneurs
                </h5>
                <p className="item-list-audience-content-main-live-class__text">
                  Get ahead of the competition by utilizing the latest AI tools
                  and techniques to create innovative and effective products
                  that stand out from the crowd
                </p>
              </li>
              <li className="list-audience-content-main-live-class__item">
                <span>👨‍💻</span>
                <h5 className="item-list-audience-content-main-live-class__title">
                  Founders / Entrepreneurs
                </h5>
                <p className="item-list-audience-content-main-live-class__text">
                  Get ahead of the competition by utilizing the latest AI tools
                  and techniques to create innovative and effective products
                  that stand out from the crowd
                </p>
              </li>
              <li className="list-audience-content-main-live-class__item">
                <span>👨‍💻</span>
                <h5 className="item-list-audience-content-main-live-class__title">
                  Founders / Entrepreneurs
                </h5>
                <p className="item-list-audience-content-main-live-class__text">
                  Get ahead of the competition by utilizing the latest AI tools
                  and techniques to create innovative and effective products
                  that stand out from the crowd
                </p>
              </li>
              <li className="list-audience-content-main-live-class__item">
                <span>👨‍💻</span>
                <h5 className="item-list-audience-content-main-live-class__title">
                  Founders / Entrepreneurs
                </h5>
                <p className="item-list-audience-content-main-live-class__text">
                  Get ahead of the competition by utilizing the latest AI tools
                  and techniques to create innovative and effective products
                  that stand out from the crowd
                </p>
              </li>
              <li className="list-audience-content-main-live-class__item">
                <span>👨‍💻</span>
                <h5 className="item-list-audience-content-main-live-class__title">
                  Founders / Entrepreneurs
                </h5>
                <p className="item-list-audience-content-main-live-class__text">
                  Get ahead of the competition by utilizing the latest AI tools
                  and techniques to create innovative and effective products
                  that stand out from the crowd
                </p>
              </li>
              <li className="list-audience-content-main-live-class__item">
                <span>👨‍💻</span>
                <h5 className="item-list-audience-content-main-live-class__title">
                  Founders / Entrepreneurs
                </h5>
                <p className="item-list-audience-content-main-live-class__text">
                  Get ahead of the competition by utilizing the latest AI tools
                  and techniques to create innovative and effective products
                  that stand out from the crowd
                </p>
              </li>
            </ul>
            <div className="separator"></div>
          </div>

          <div className="main-live-class__benefits benefits-main-live-class">
            <h2 className="benefits-main-live-class__title">
              What you will get from this live class?
            </h2>
            <ul className="benefits-main-live-class__list list-benefits-main-live-class">
              <li className="list-benefits-main-live-class__item item-list-benefits-main-live-class">
                <span className="item-list-benefits-main-live-class__icon">
                  ✅
                </span>
                <div className="item-list-benefits-main-live-class__text-block">
                  <h5>New skills</h5>
                  <p>
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </div>
              </li>
              <li className="list-benefits-main-live-class__item">
                <span className="item-list-benefits-main-live-class__icon">
                  ✅
                </span>
                <div className="item-list-benefits-main-live-class__text-block">
                  <h5>New skills</h5>
                  <p>
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </div>
              </li>
              <li className="list-benefits-main-live-class__item">
                <span className="item-list-benefits-main-live-class__icon">
                  ✅
                </span>
                <div className="item-list-benefits-main-live-class__text-block">
                  <h5>New skills</h5>
                  <p>
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </div>
              </li>
              <li className="list-benefits-main-live-class__item">
                <span className="item-list-benefits-main-live-class__icon">
                  ✅
                </span>
                <div className="item-list-benefits-main-live-class__text-block">
                  <h5>New skills</h5>
                  <p>
                    Get ahead of the competition by utilizing the latest AI
                    tools and techniques to create innovative and effective
                    products that stand out from the crowd
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="main-live-class__cant-join">
            <CantJoin />
          </div>

          <div className="main-live-class__meet-tutor meet-tutor">
            <h2 className="meet-tutor__title">Meet the tutor</h2>
            <div className="meet-tutor__content content-meet-tutor">
              <div className="content-meet-tutor__image">
                <img src={singleLiveClass.tutorImg} alt="creator" />
              </div>
              <div className="content-meet-tutor__text text-content-meet-tutor">
                <h5 className="text-content-meet-tutor__title">Max Haining</h5>
                <p className="text-content-meet-tutor__description">
                  Founded 100DaysOfNoCode in 2020. Started as a free Twitter
                  challenge, and running cohort-based courses since October 2021
                  with 250+ students from all over the world 🙂
                </p>
                <p className="text-content-meet-tutor__description">
                  Coming from a non-tech background myself, I could never
                  implement my own ideas. Learning to leverage No-Code and AI
                  has unlocked huge leverage over my time and creativity. I'm
                  now on a mission to help more innovators unlock the same
                  freedom in their work 🙌
                </p>
              </div>
            </div>
          </div>

          <div
            className="main-live-class__register register"
            /* name="registration" */
            id="registration"
          >
            {!registrationToLiveClass ? (
              <>
                <h2 className="register__title">Register to live class 🙌</h2>
                <div className="register__content">
                  <form
                    className="register__form form-register"
                    onSubmit={onSubmitHandler}
                  >
                    <h2 className="form-register__title">Registration</h2>
                    <input
                      className="form-register__input"
                      type="text"
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <input
                      className="form-register__input"
                      type="text"
                      placeholder="surname"
                      onChange={(e) => setSurame(e.target.value)}
                      value={surname}
                    />
                    <input
                      className="form-register__input"
                      type="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <input
                      className="form-register__input"
                      type="text"
                      placeholder="phone number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                    <input
                      className="form-register__input"
                      type="text"
                      placeholder="promo code"
                      onChange={(e) => setPromo(e.target.value)}
                      value={promo}
                    />
                    {/* add lter I accept terms and condition checkbox */}
                    <button className="form-register__button button">
                      Register
                    </button>
                  </form>

                  <div className="register__bg-image">
                    <img src={bgImage} alt="bg" />
                  </div>
                </div>
              </>
            ) : (
              <div className="register__confirmation-message confirmation-message-register">
                <h2 className="confirmation-message-register__title">
                  Thank you for registration! 🎉🎉🎉
                </h2>
                <p>The last step is to make payment for live class</p>
                {/* add navidation from button to Payment page / WayForPay */}
                <button className="confirmation-message-register__button button">
                  Pay
                </button>
              </div>
            )}
          </div>

          {/* add reviews later - increase row + 1 in grid container "live-class__main" */}
          {/* add register form to live class - increase row + 1 in grid container "live-class__main"  */}
        </div>
      </div>
    </div>
  );
}
