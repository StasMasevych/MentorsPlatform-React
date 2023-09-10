import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
/* import { FaSearch } from "react-icons/fa"; */

import {
  getSearchResults,
  getMentorsByCategory,
  getAllMentors,
} from "../context/PlatformActions";
import { PlatformContext } from "../context/PlatformContext";

import { categories } from "../data/data-categories/data-categories";

import MentorItem from "../components/MentorItem";
import HelpRequest from "../components/HelpRequest";

import { allMentorsArray } from "../data/data-mentors/allMentorsArray";
import { paginate } from "../utils/paginate";

// add dispatch mentor object to reducer after clicking

// add icon search (above) close to input

// add isActive is true after clickig category, than conditional rendering - if true this style

export default function AllMentors() {
  const { mentorsByCategory, dispatch } = useContext(PlatformContext);
  /* console.log(mentorsByCategory.length); */

  const [searchTerm, setSearchTerm] = useState(""); //input
  const [page, setPage] = useState(0); //pagination
  const [isActive, setIsActive] = useState(false); // conditional rendering categories

  // pagination

  const newMentorsArrayOfArray = paginate(mentorsByCategory);
  const mentorsPerPage = newMentorsArrayOfArray[page];
  console.log(mentorsPerPage);

  const handlePage = (index) => {
    setPage(index);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > newMentorsArrayOfArray.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = newMentorsArrayOfArray.length - 1;
      }
      return prevPage;
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // filter by clicking some category

  let isClicked;

  function onFilterHandler(categoryName) {
    console.log(categoryName);
    const filteredMentorsArr = getMentorsByCategory(
      categoryName,
      allMentorsArray // argument is always full array to filter from full array
    );

    console.log(filteredMentorsArr);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: filteredMentorsArr });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  // at first render after loading/reloading get all mentors array

  useEffect(() => {
    const allMentorsArr = getAllMentors(allMentorsArray);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: allMentorsArr });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // get mentors by clicking "All" category

  function onGetAllHandler() {
    const allMentorsArr = getAllMentors(allMentorsArray);
    dispatch({ type: "GET_FILTERED-MENTORS", payload: allMentorsArr });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

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
              onChange={(e) => setSearchTerm(e.target.value)}
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
                  /* className={`list-categories-allMentors-page__item ${
                    isClicked ? "active-btn" : null
                  }`} */
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
          {mentorsPerPage && mentorsPerPage.length > 0 && (
            <ul className="mentors-content-allMentors-page__list">
              {mentorsPerPage.map((mentorItem) => {
                return <MentorItem key={mentorItem.id} mentor={mentorItem} />;
              })}
            </ul>
          )}
          {!mentorsPerPage && (
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
          {newMentorsArrayOfArray.map((item, index) => {
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

        <HelpRequest />
      </div>
    </div>
  );
}
