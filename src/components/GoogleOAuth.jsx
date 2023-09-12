import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GoogleIcon from "../assets/icons/google-logo_icon.png";
import { useAuthContext } from "../hooks/useAuthContext";

//firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export default function GoogleOAuth() {
  const [googleUser, setGoogleUser] = useState(null);
  console.log(googleUser);
  /*  const { user } = useAuthContext(); */

  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      // Getting user from Google
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setGoogleUser(user);

      // Check for user if it exists in Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");

      /* window.location.reload(); */

      console.log("Successfully authorized!");
    } catch (error) {
      console.log("Could not authorize with Google");
    }
  }

  /*   useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]); */

  return (
    <button
      className="signup-form__google-button  google-button-signup-form"
      onClick={onGoogleClick}
    >
      <div className="google-button-signup-form__image">
        <img src={GoogleIcon} alt="go" />
      </div>
      <p className="google-button-signup-form__text">Signup with Google</p>
    </button>
  );
}
