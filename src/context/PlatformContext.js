import { initialMentors } from "../data/data-mentors/initialMentors";
import { createContext, useReducer } from "react";
import { platformReducer } from "./PlatformReducer";

export const PlatformContext = createContext();

export function PlatformProvider({ children }) {
  /* const [user, setUser] = useState({ name: "Adam" }); */

  const initialState = {
    mentors: initialMentors,
    user: {},
  };

  const [state, dispatch] = useReducer(platformReducer, initialState);

  return (
    <PlatformContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PlatformContext.Provider>
  );
}
