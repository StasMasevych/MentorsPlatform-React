import { allMentorsArray } from "../data/data-mentors/allMentorsArray";
import { liveClassesArray } from "../data/data-courses/data-liveClasses";
import { createContext, useReducer } from "react";
import { platformReducer } from "./PlatformReducer";

export const PlatformContext = createContext();

export function PlatformProvider({ children }) {
  /* const [user, setUser] = useState({ name: "Adam" }); */

  const initialState = {
    featuredMentors: allMentorsArray.slice(0, 4), // homepage
    mentorsByCategory: allMentorsArray, // all mentors array with default array
    liveClasses: liveClassesArray, // all classes with deafult array
    singleMentor: {}, // mentor page
    singleLiveClass: {}, // single liveClass page
    mentorFormData: {}, // mentor application
    subscription: "", // from ModalSubscription
    requestToHelp: "", // from ModalHelpRequest
    loading: false,
  };

  const [state, dispatch] = useReducer(platformReducer, initialState);

  return (
    <PlatformContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PlatformContext.Provider>
  );
}
