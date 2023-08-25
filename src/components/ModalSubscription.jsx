import { useState, useContext } from "react";

import { PlatformContext } from "../context/PlatformContext";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";

export default function ModalSubscription({ setOpenModal }) {
  const [inputText, setInputText] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState(null);
  console.log(inputText);

  const { dispatch } = useContext(PlatformContext);

  async function onSubmitHandler(e) {
    /* e.preventDefault();

    if (!inputText) return;

    dispatch({ type: "GET_SUBSCRIPTION", payload: inputText });
    setInputText("");
    setSubmittedEmail(inputText); */
    /* console.log(submittedEmail); */
    // send to firestore
    /* const docRef = collection(db, "subscriptions");

    const subscriptionData = {
      email: inputText,
      timestamp: serverTimestamp(),
    };

    await addDoc(docRef, subscriptionData); */
  }

  return (
    <div className="subscription-modal">
      <div className="subscription-modal__box">
        {!submittedEmail ? (
          <form className="subscription-modal__form" onSubmit={onSubmitHandler}>
            <input
              className="subscription-modal__input"
              type="text"
              placeholder="Enter your email"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="subscription-modal__button button">Add</button>
          </form>
        ) : (
          <p style={{ margin: "0 auto", fontSize: "24px" }}>
            Thank you! You've succesfully subscribed!
          </p>
        )}
      </div>
    </div>
  );
}
