import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { getLiveClass } from "../context/PlatformActions";

import { liveClassesArray } from "../data/data-courses/data-liveClasses";
import { PlatformContext } from "../context/PlatformContext";

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
              Enrol now
            </button>
          </div>
          <div className="header-live-class__image">
            <img src={singleLiveClass.image} alt="live-class" />
          </div>
        </div>
      </div>
    </div>
  );
}
