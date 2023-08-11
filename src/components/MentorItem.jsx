import { useNavigate } from "react-router-dom";

//context

import { useContext } from "react";
import { PlatformContext } from "../context/PlatformContext";

import { getMentor } from "../context/PlatformActions";

/* import { allMentorsArray } from "../data/data-mentors/allMentorsArray"; */

export default function MentorItem({ mentor, featuresMentorArray }) {
  const { mentorsByCategory, dispatch, mentorA } = useContext(PlatformContext);

  /* const featuredMentorsArray = allMentorsArray.slice(0, 4); */
  /* console.log(featuredMentorsArray); */

  const navigate = useNavigate();

  /*  function navigateHandler(mentorName) {
    navigate(`/mentors/${mentorName}`);
  } */
  console.log(mentorsByCategory);
  console.log(mentorA);
  function getMentorData(mentorName, mentorsArray) {
    console.log(
      "getMentorData function is starting work!",
      mentorName,
      mentorsArray
    );
    dispatch({ type: "SET_LOADING" });
    console.log("Loading");
    const mentorObj = getMentor(mentorName, mentorsArray);
    console.log("I am dispatching", mentorObj);
    dispatch({ type: "GET_MENTOR", payload: mentorObj });
    navigate(`/mentor/${mentorName}`);
  }

  /* 

    // possible calling and declaration of one function in this component which will be too big, 
    we cannot just import function as navigate need 
    to be inside component and not other simple function
    
    function getMentor(mentorName, mentorsArray)) {
      console.log("Hi from getMentor function!", mentorName, mentorsArray);

    const findedMentorArray = mentorsArray.filter(
      (mentor) => mentor.name === mentorName
    );
    const [mentorObj] = findedMentorArray;
    dispatch({ type: "GET_MENTOR", payload: mentorObj });
    

    navigate(`/mentors/${mentorName}`);
    return mentorObj;
    }
    
     */

  // берем лише один масив як інішал зі всіма менторами

  // якщо я клікнув по перших 4 елементах одного масиву то дали ми робим копію масиву
  // і даєм туди лише перші 4 елементи а сам новий масив фільтруєм і даєм клікнутий обєкт в діспатч

  // якщо клікнув на інші елементи (більше 4 елемента то робим те саме але з цими лише елементами)

  return (
    <li
      className="mentors__item mentor"
      onClick={() => getMentorData(mentor.name, mentorsByCategory)}
      /* onClick={() => navigateHandler(mentor.name)} */
    >
      <div className="mentor__image">
        <img src={mentor.image} alt="mentor" />
      </div>
      <div className="mentor__info">
        <h3 className="mentor__name">{mentor.name}</h3>
        <p className="mentor__job">💼 {mentor.job}</p>
        {/* <p className="mentor__experience">🥇 Experience {mentor.experience}</p> */}
        {/* add maybe main mentor topic briefly */}
        <div className="mentor__status status-mentor">
          <p className="status-mentor__mentorship">⭐️ mentorship</p>
          <p className="status-mentor__classes">🤩 live classes</p>
        </div>
      </div>
    </li>
  );
}
