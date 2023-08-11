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
import { paginate } from "../utils/paginate";

// add loading more / pagination

// add isActive is true after clickig category, than conditional rendering - if true this style

export default function AllMentors() {
  const { mentorsByCategory, dispatch } = useContext(PlatformContext);
  /* console.log(mentorsByCategory.length); */

  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(0);

  // pagination

  const newMentorsArrayOfArray = paginate(mentorsByCategory);
  const mentorsPerPage = newMentorsArrayOfArray[page];
  console.log(mentorsPerPage);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > mentorsByCategory.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = mentorsByCategory.length - 1;
      }
      return prevPage;
    });
  };

  // filter by clicking some category

  function onFilterHandler(categoryName) {
    console.log(categoryName);
    const filteredMentorsArr = getMentorsByCategory(
      categoryName,
      allMentorsArray // argument is always full array to filter from full array
    );

    console.log(filteredMentorsArr);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: filteredMentorsArr });
  }

  // at first render after loading/reloading get all mentors array

  useEffect(() => {
    const allMentorsArr = getAllMentors(allMentorsArray);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: allMentorsArr });
    window.scrollTo(0, 0);
  }, []);

  // if mentors length change after filtering, triger new render

  useEffect(() => {
    /* window.scrollTo(0, 0); */
  }, [mentorsByCategory, dispatch]);

  // get input value

  function onSearchHandler(e) {
    setSearchTerm(e.target.value);
  }

  // get mentors by clicking "All" category

  function onGetAllHandler() {
    const allMentorsArr = getAllMentors(allMentorsArray);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: allMentorsArr });
  }

  // get mentors by search

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
              );
            })}
          </ul>
        </div>

        <div className="allMentors-page__title title-allMentors-page">
          <h3> All mentors</h3> {/* add dynamic category */}
        </div>

        <div clallMentors-page="allMentors-page__mentors-content mentors-content-allMentors-page">
          {mentorsPerPage.length > 0 && (
            <ul className="mentors-content-allMentors-page__list">
              {mentorsPerPage.map((singleMentor) => {
                return (
                  <MentorItem key={singleMentor.id} mentor={singleMentor} />
                );
              })}
            </ul>
          )}
          {mentorsPerPage.length === 0 && (
            <h1
              style={{
                margin: "38px 0",
                display: "block",
                fontSize: "28px",
                textAlign: "center",
              }}
            >
              Ahh, currently there is no mentor under this category
            </h1>
          )}
        </div>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {mentorsByCategory.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}