import { useNavigate } from "react-router-dom";

import { liveClassesArray } from "../data/data-courses/data-liveClasses";

import LiveClassItem from "./LiveClassItem";

export default function LiveClassesList() {
  const liveClassesToShow = liveClassesArray.slice(0, 6);
  const navigate = useNavigate();
  return (
    <div className="courses">
      <div className="courses__container">
        <div className="courses__text-block">
          <h2 className="courses__title">
            Find also amazing live courses to learn what you love 😍
          </h2>
          <p className="courses__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <ul className="courses__list">
          {liveClassesToShow.map((liveClass) => {
            return <LiveClassItem key={liveClass.id} liveClass={liveClass} />;
          })}
        </ul>
        <button
          className="button button__courses"
          onClick={() => navigate("/live-classes")}
        >
          Find more courses
        </button>
      </div>
    </div>
  );
}
