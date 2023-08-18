import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase/config";

export function useSignup() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  async function signup(email, password, displayName) {
    setError(null);
    setIsPending(true);

    try {
      // signup user - Firebase create its user object and return it to us
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);

      // if invalid response
      if (!res) {
        throw new Error("'Could not complete signup')");
      }

      //updating user name in Firebase user obj (user.current.displaynme)
      updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      // dispatch login action - we take Firebase user object and send it to store

      dispatch({ type: "LOGIN", payload: res.user });

      // update state only for mounted component and stoping update after unmounting
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

  return { signup, error, isPending };
}
