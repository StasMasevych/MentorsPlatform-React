import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export function useLogin() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  async function login(email, password) {
    setError(null);
    setIsPending(true);

    try {
      // sign the user in Firebase and get this object
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // like mirror - fristly Firebase than mirror to state
      dispatch({ type: "LOGIN", payload: res.user });

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

  return { login, error, isPending };
}
