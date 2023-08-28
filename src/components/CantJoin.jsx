import { useState, useContext } from "react";
import { PlatformContext } from "../context/PlatformContext";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";
export default function CantJoin() {
  const [inputText, setInputText] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState(null);

  const { dispatch } = useContext(PlatformContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!inputText) return;

    setSubmittedEmail(inputText);
    dispatch({ type: "GET_SUBSCRIPTION", payload: inputText });
    setInputText("");

    // send to firestore
    const docRef = collection(db, "subscriptions");

    const subscriptionData = {
      email: inputText,
      timestamp: serverTimestamp(),
    };

    await addDoc(docRef, subscriptionData);
  }

  return (
    <>
      {!submittedEmail ? (
        <form className="cant-join" onSubmit={handleSubmit}>
          <h4 className="cant-join__title">You can't join this live class?</h4>
          <p className="cant-join__subtitle">
            Be informed about all future live classes
          </p>
          <input
            className="cant-join__input"
            type="email"
            placeholder="Enter your email"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="cant-join__button button">Add</button>
        </form>
      ) : (
        <div className="cant-join__confirmation-message">
          <span>🎉🎉🎉</span>
          <p>Thank you!</p>
          <p>We are going to inform you on new amazing live classes! 🤩</p>
        </div>
      )}
    </>
  );
}
