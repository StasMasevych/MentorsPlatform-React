import { initialMentors } from "../data/data-mentors/initialMentors";

import Categories from "./Categories";

// add slider

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
                  <p className="mentor__job">💼 {mentor.job}</p>
                  <div className="mentor__status status-mentor">
                    <p className="status-mentor__mentorship">⭐️ mentorship</p>
                    <p className="status-mentor__classes">🤩 live classes</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="button">Find more mentors</button>
      </div>
    </div>
  );
}
