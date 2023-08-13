import { useEffect, useState, useContext } from "react";
import { liveClassesArray } from "../data/data-courses/data-liveClasses";

import LiveClassItem from "../components/LiveClassItem";
import { PlatformContext } from "../context/PlatformContext";

// add search for class title, mentor name and expertise
// add reviews like ADPList
// subscription will be send to Firebase DB

export default function LiveClasses() {
  const [inputText, setInputText] = useState("");

  const { dispatch } = useContext(PlatformContext);

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  function onSumbitHandler(e) {
    e.preventDefault();

    if (!inputText) return;

    dispatch({ type: "GET_SUBSCRIPTION", payload: inputText });
    setInputText("");
  }

  return (
    <div className="live-classes">
      <div className="live-classes__container">
        <div className="live-classes__text-block text-block-live-classes">
          <h3 className="text-block-live-classes__title">
            Learn from the best experts
          </h3>
          <p className="text-block-live-classes__subtitle">
            Unlock your potential with the best experts. Learn live from
            experts, build new skills, create new projects
          </p>
        </div>
        <ul className="live-classes__list list-live-classes">
          {liveClassesArray.map((liveClass) => {
            return <LiveClassItem key={liveClass.id} liveClass={liveClass} />;
          })}
        </ul>
        {/* <div className="classes__reviews"></div> */}
        <div className="live-classes__contact contact-live-classes">
          <h4 className="contact-live-classes__title">
            Get the information about new classes 🤩
          </h4>
          <form
            className="contact-live-classes__form form-contact-live-classes"
            onSubmit={onSumbitHandler}
          >
            <input
              className="form-contact-live-classes__input"
              type="text"
              placeholder="Enter your email"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="form-contact-live-classes__button button">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
