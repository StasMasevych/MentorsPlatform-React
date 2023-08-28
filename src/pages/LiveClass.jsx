import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { getLiveClass } from "../context/PlatformActions";

import { liveClassesArray } from "../data/data-courses/data-liveClasses";
import { PlatformContext } from "../context/PlatformContext";

// why our classes (3-4 cards)
// add reviews
// add FAQ

export default function LiveClass() {
  const { singleLiveClass, dispatch } = useContext(PlatformContext);
  const params = useParams();

  useEffect(() => {
    const LiveClassObject = getLiveClass(params.name, liveClassesArray);

    dispatch({ type: "GET_LIVE-CLASS", payload: LiveClassObject });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="live-class">
      <div className="live-class__container">
        <div className="live-class__header header-live-class">
          <div className="header-live-class__text-block text-block-header-live-class">
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
            <button className="text-block-header-live-class__button button">
              Enroll now
            </button>
          </div>
          <div className="header-live-class__image">
            <img src={singleLiveClass.image} alt="live-class" />
          </div>
        </div>

        <div className="live-class__main main-live-class">
          <div className="main-live-class__content content-main-live-class">
            <h5 className="content-main-live-class__hosted-text">Hosted by</h5>
            <div className="content-main-live-class__creator creator-content-main-live-class">
              <div className="creator-content-main-live-class__image">
                <img
                  src="https://media.npr.org/assets/img/2019/09/24/ap_19267645664475-39a0b4700f0b4127e4f83db26f015b4b42aecd1a.jpg"
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

            <button className="enrol-box-main-live-class__button button">
              Enroll
            </button>
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

          <div className="main-live-class__cant-join-main-live-class">
            <div className="cant-join-main-live-class">
              <h4 className="cant-join-main-live-class__title">
                Do you want to stay in touch with us?
              </h4>
              <p className="cant-join-main-live-class_subtitle">
                Get updates on new mentors, live classes and platform features
              </p>
              <button
                className="cant-join-main-live-class__button button"
                /* onClick={() => setModalOpen(true)} */
              >
                Subscribe
              </button>
              {/* {modalOpen && (
                <ModalSubscription
                  modalOpen={modalOpen}
                  setOpenModal={setModalOpen}
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
