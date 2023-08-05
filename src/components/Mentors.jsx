import { initialMentors } from "../data/data-mentors/initialMentors";

import Categories from "./Categories";

export default function Mentors() {
  return (
    <div className="mentors">
      <div className="mentors__container">
        <h2 className="mentors__title"> Discover the famous mentors </h2>
        <p className="mentors__subtitle">
          Just book a mentor for 1:1 video call and get advice from the famous
          experts in tech sector
        </p>
        <Categories />
        <ul className="mentors__list">
          {initialMentors.map((mentor) => {
            return (
              <li className="mentors__item mentor">
                <div className="mentor__image">
                  <img src={mentor.image} alt="mentor" />
                </div>
                <div className="mentor__info">
                  <h3 className="mentor__name">{mentor.name}</h3>
                  <p className="mentor__job">{mentor.job}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
