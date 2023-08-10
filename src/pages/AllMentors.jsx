import { useEffect, useContext } from "react";
import { getAllMentors } from "../context/PlatformActions";
import { PlatformContext } from "../context/PlatformContext";

import { allMentorsArray } from "../data/data-mentors/allMentorsArray";
import { categories } from "../data/data-categories/data-categories";

import MentorItem from "../components/MentorItem";

export default function AllMentors() {
  const { allMentors, dispatch } = useContext(PlatformContext);

  useEffect(() => {
    const allMentorsArr = getAllMentors(allMentorsArray);
    dispatch({ type: "GET_MENTORS", payload: allMentorsArr });
    console.log(allMentors);
  }, []);

  return (
    <div className="allMentors-page">
      <div className="allMentors-page__container">
        <form className="allMentors-page__search-bar search-bar-allMentors-page">
          <div className="search-bar-allMentors-page__container-block">
            <input
              className="search-bar-allMentors-page__input"
              type="text"
              placeholder="Search for mentors"
            />
            <button className="search-bar-allMentors-page__button button">
              search
            </button>
          </div>
        </form>

        <div className="allMentors-page__categories categories-allMentors-page">
          <ul className="categories-allMentors-page__list list-categories-allMentors-page">
            {categories.map((category) => {
              return (
                <a
                  className="list-categories-allMentors-page__item"
                  href="link"
                >
                  <li key={category.id}>
                    <p>{category.name}</p>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>

        <div className="allMentors-page__title title-allMentors-page">
          <h3>All mentors</h3>
        </div>

        <div clallMentors-page="allMentors-page__mentors-content mentors-content-allMentors-page">
          <ul className="mentors-content-allMentors-page__list">
            {allMentorsArray.map((singleMentor) => {
              return <MentorItem key={singleMentor.id} mentor={singleMentor} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
