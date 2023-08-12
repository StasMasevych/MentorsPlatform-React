import { useEffect } from "react";
import { liveClassesArray } from "../data/data-courses/data-liveClasses";

import LiveClassItem from "../components/LiveClassItem";

// add search for class title, mentor name and expertise
// add reviews like ADPList

export default function LiveClasses() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="classes">
      <div className="classes__container">
        <div className="classes__text-block text-block-classes">
          <h3 className="text-block-classes__title">
            Learn from the best experts
          </h3>
          <p className="text-block-classes__subtitle">
            Unlock your potential with the best experts. Learn live from
            experts, build new skills, create new projects
          </p>
        </div>
        <ul className="classes__list list-classes">
          {liveClassesArray.map((liveClass) => {
            return <LiveClassItem key={liveClass.id} liveClass={liveClass} />;
          })}
        </ul>
        {/* <div className="classes__reviews"></div> */}
        <div className="classes__contact contact-classes">
          <h4 className="contact-classes__title">
            Make subscription to know about all new classes!🤩
          </h4>
          <form className="contact-classes__form form-contact-classes">
            <input
              className="form-contact-classes__input"
              type="text"
              placeholder="Enter your email"
            />
            <button className="form-contact-classes__button button">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
