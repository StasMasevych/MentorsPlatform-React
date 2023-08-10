import { useNavigate } from "react-router-dom";
import { allMentorsArray } from "../data/data-mentors/allMentorsArray";

import { useContext } from "react";
import { PlatformContext } from "../context/PlatformContext";

import Categories from "./Categories";
import MentorItem from "./MentorItem";

// add slider

export default function MentorsList() {
  const { featuredMentors } = useContext(PlatformContext);

  const navigate = useNavigate();

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
          {featuredMentors.map((mentor) => {
            return (
              <MentorItem
                key={mentor.id}
                mentor={mentor}
                /* featuresMentorArray={featuredMentors} */
              />
            );
          })}
        </ul>
        <button className="button" onClick={() => navigate("/mentors")}>
          Find more mentors
        </button>
      </div>
    </div>
  );
}
