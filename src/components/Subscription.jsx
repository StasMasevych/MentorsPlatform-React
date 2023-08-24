import { useState, useContext } from "react";

import { PlatformContext } from "../context/PlatformContext";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";

export default function Subscription() {
  const [inputText, setInputText] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState(null);
  console.log(inputText);

  const { dispatch } = useContext(PlatformContext);

  async function onSumbitHandler(e) {
    e.preventDefault();

    if (!inputText) return;

    dispatch({ type: "GET_SUBSCRIPTION", payload: inputText });
    setInputText("");
    setSubmittedEmail(inputText);
    /* console.log(submittedEmail); */

    // send to firestore

    const docRef = collection(db, "subscriptions");

    const subscriptionData = {
      email: inputText,
      timestamp: serverTimestamp(),
    };

    await addDoc(docRef, subscriptionData);
  }

  return (
    <div className="live-classes__contact contact-live-classes">
      <h4 className="contact-live-classes__title">
        Get the information about new classes 🤩
      </h4>
      {!submittedEmail ? (
        <form
          className="contact-live-classes__form form-contact-live-classes"
          onSubmit={onSumbitHandler}
        >
          <input
            className="form-contact-live-classes__input"
            type="text"
            placeholder="Enter your email"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="form-contact-live-classes__button button">
            Add
          </button>
        </form>
      ) : (
        <p style={{ margin: "0 auto" }}>
          Thank you! You've succesfully subscribed!
        </p>
      )}
    </div>
  );
}
