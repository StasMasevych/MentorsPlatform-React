import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuthContext() {
  const context = useContext(AuthContext);

  // if try to access ouside tree of wrapped components
  if (!context) {
    throw new Error("useAuthContext shall be inside AuthContextProvider ");
  }

  return context;
}
