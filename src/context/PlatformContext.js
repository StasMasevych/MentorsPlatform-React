import { allMentorsArray } from "../data/data-mentors/allMentorsArray";
import { createContext, useReducer } from "react";
import { platformReducer } from "./PlatformReducer";

export const PlatformContext = createContext();

export function PlatformProvider({ children }) {
  /* const [user, setUser] = useState({ name: "Adam" }); */

  const initialState = {
    featuredMentors: allMentorsArray.slice(0, 4), // homepage
    allMentors: [], // mentors page
    mentorsByCategory: [], // category page with mentors
    mentorA: {}, // mentor page
    loading: false,
  };

  const [state, dispatch] = useReducer(platformReducer, initialState);

  return (
    <PlatformContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PlatformContext.Provider>
  );
}
