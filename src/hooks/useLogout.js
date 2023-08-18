import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";

export function useLogut() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  async function logout() {
    setError(null);
    setIsPending(true);

    try {
      // sign the user out from Firebase
      await signOut(auth);

      // dispatch logout action - if logout from Firebase make the user object null in our app
      // like mirror - fristly Firebase than mirror to state
      dispatch({ type: "LOGOUT" });

      // update state only for mounted component
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  }

  // running means cleaning up after unmounting of component what is doing in hook

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
}
