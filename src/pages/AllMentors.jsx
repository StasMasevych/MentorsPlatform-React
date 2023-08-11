import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import {
  getSearchResults,
  getMentorsByCategory,
  getAllMentors,
} from "../context/PlatformActions";
import { PlatformContext } from "../context/PlatformContext";

import { categories } from "../data/data-categories/data-categories";

import MentorItem from "../components/MentorItem";

import { allMentorsArray } from "../data/data-mentors/allMentorsArray";

// add loading more / pagination

// add isActive is true after clickig category, than conditional rendering - if true this style

export default function AllMentors() {
  const { mentorsByCategory, dispatch } = useContext(PlatformContext);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  /* useEffect(() => {
    const filteredMentorsArr = getAllMentors(mentorsByCategory);
    dispatch({ type: "GET_MENTORS", payload: filteredMentorsArr });
    console.log(mentorsByCategory);
    window.scrollTo(0, 0);
  }, []); */

  function onFilterHandler(categoryName) {
    console.log(categoryName);
    const filteredMentorsArr = getMentorsByCategory(
      categoryName,
      allMentorsArray // argument is always full array to filter from full array
    );

    console.log(filteredMentorsArr);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: filteredMentorsArr });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    /* window.scrollTo(0, 0); */
  }, [mentorsByCategory, dispatch]);

  function onSearchHandler(e) {
    setSearchTerm(e.target.value);

    // берем весь масив і фільтруєм
    // дивимся по наявності в нейм співпадіння з серч терм
    // якщо є то фільтруєм, новий відфільтрований масив даєм в діспатч і там в редюсері міняєм стейт
    // витягуєм з контексту новий стейт масиву і рендеремо
  }

  function onGetAllHandler() {
    const allMentors = getAllMentors(allMentorsArray);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: allMentors });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    if (searchTerm === "") {
      alert("Please, enter something");
    } else {
      const searchResults = getSearchResults(searchTerm, allMentorsArray);
      console.log(searchResults);

      dispatch({ type: "GET_FILTERED-MENTORS", payload: searchResults });

      setSearchTerm("");
    }
  }

  return (
    <div className="allMentors-page">
      <div className="allMentors-page__container">
        <form
          className="allMentors-page__search-bar search-bar-allMentors-page"
          onSubmit={onSubmitHandler}
        >
          <div className="search-bar-allMentors-page__container-block">
            <input
              className="search-bar-allMentors-page__input"
              type="text"
              placeholder="name, company, category of a mentor..."
              onChange={onSearchHandler}
              value={searchTerm}
            />
            <button className="search-bar-allMentors-page__button button">
              search
            </button>
          </div>
        </form>

        <div className="allMentors-page__categories categories-allMentors-page">
          <ul className="categories-allMentors-page__list list-categories-allMentors-page">
            <li
              className="list-categories-allMentors-page__item"
              onClick={onGetAllHandler}
            >
              <p>All</p>
            </li>
            {categories.map((category) => {
              return (
                <li
                  className="list-categories-allMentors-page__item"
                  onClick={
                    () => onFilterHandler(category.name)
                    //category.name, mentorsByCategory
                  }
                  key={category.id}
                >
                  <p>{category.name}</p>
                </li>
                /* <Link
                  className="list-categories-allMentors-page__item"
                  to={`/mentors/categories/${category.name}`}
                >
                  <li key={category.id}>
                    <p>{category.name}</p>
                  </li>
                </Link> */
              );
            })}
          </ul>
        </div>

        <div className="allMentors-page__title title-allMentors-page">
          <h3>All mentors</h3>
        </div>

        <div clallMentors-page="allMentors-page__mentors-content mentors-content-allMentors-page">
          {mentorsByCategory.length > 0 && (
            <ul className="mentors-content-allMentors-page__list">
              {mentorsByCategory.map((singleMentor) => {
                return (
                  <MentorItem key={singleMentor.id} mentor={singleMentor} />
                );
              })}
            </ul>
          )}
          {mentorsByCategory.length === 0 && (
            <h1
              style={{
                display: "block",
                fontSize: "28px",
                textAlign: "center",
              }}
            >
              Ahh, currently there is no mentor under this category
            </h1>
          )}
        </div>

        {/*   <Routes>
          <Route path={`categories/React`} element={<CategoryMentors />} />
        </Routes> */}
      </div>
    </div>
  );
}
