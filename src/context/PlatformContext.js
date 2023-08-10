import { initialMentors } from "../data/data-mentors/initialMentors";
import { createContext, useReducer } from "react";
import { platformReducer } from "./PlatformReducer";

export const PlatformContext = createContext();

export function PlatformProvider({ children }) {
  /* const [user, setUser] = useState({ name: "Adam" }); */

  const initialState = {
    featuredMentors: initialMentors, // homepage
    allMentors: [], // mentors page
    mentorsByCategory: [], // category page with mentors
    mentor: {}, // mentor page
    loading: false,
  };

  const [state, dispatch] = useReducer(platformReducer, initialState);

  return (
    <PlatformContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PlatformContext.Provider>
  );
}
