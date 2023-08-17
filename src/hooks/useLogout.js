import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export function useLogut() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  async function logout() {
    setError(null);
    setIsPending(true);

    try {
      //update online status, id of doc match with id of user
      /* const { uid } = user;
      await projectFirestore
        .collection("users")
        .doc(uid)
        .update({ online: false }); */

      // sign the user out from Firebase
      await projectAuth.signOut();

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
