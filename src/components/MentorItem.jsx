import { useNavigate } from "react-router-dom";

//context

import { useContext } from "react";
import { PlatformContext } from "../context/PlatformContext";

import { getMentor } from "../context/PlatformActions";

export default function MentorItem({ mentor, initialMentors }) {
  const { user, mentors, dispatch } = useContext(PlatformContext);

  const navigate = useNavigate();

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
    navigate(`/mentors/${mentorName}`);
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

  return (
    <li
      className="mentors__item mentor"
      onClick={() => getMentorData(mentor.name, mentors)}
    >
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
}
