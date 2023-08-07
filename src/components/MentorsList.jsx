import { initialMentors } from "../data/data-mentors/initialMentors";

import Categories from "./Categories";
import MentorItem from "./MentorItem";

// add slider

export default function MentorsList() {
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
            return <MentorItem key={mentor.id} mentor={mentor} />;
          })}
        </ul>
        <button className="button">Find more mentors</button>
      </div>
    </div>
  );
}
