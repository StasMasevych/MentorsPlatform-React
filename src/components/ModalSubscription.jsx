import { FaTimes } from "react-icons/fa";
import { useState, useContext } from "react";

import { PlatformContext } from "../context/PlatformContext";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";

export default function ModalSubscription({ modalOpen, setOpenModal }) {
  const [inputText, setInputText] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState(null);

  const { dispatch } = useContext(PlatformContext);

  async function onSubmitHandler(e) {
    e.preventDefault();

    if (!inputText) return;

    dispatch({ type: "GET_SUBSCRIPTION", payload: inputText });
    setInputText("");
    setSubmittedEmail(inputText);
    console.log(submittedEmail);
    // send to firestore
    const docRef = collection(db, "subscriptions");

    const subscriptionData = {
      email: inputText,
      timestamp: serverTimestamp(),
    };

    await addDoc(docRef, subscriptionData);
  }

  return (
    <div
      className={
        modalOpen ? "subscription-modal show-modal" : "subscription-modal"
      }
    >
      <div
        className={
          !submittedEmail
            ? "subscription-modal__box"
            : "subscription-modal__box-confirmation"
        }
      >
        {!submittedEmail ? (
          <>
            <form
              className="subscription-modal__form form-subscription-modal"
              onSubmit={onSubmitHandler}
            >
              <h2 className="form-subscription-modal__title subscription-form-item">
                {" "}
                📨 Add your email
              </h2>
              <p className="form-subscription-modal__subtitle subscription-form-item">
                We’ll keep you posted on new mentors, live classes and platform
                features
              </p>
              <input
                className="subscription-modal__input subscription-form-item"
                type="text"
                placeholder="Enter your email"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button className="subscription-modal__button button subscription-form-item">
                Add
              </button>
            </form>
            <button
              className="subscription-modal__close-modal-btn"
              onClick={() => setOpenModal(false)}
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <div className="subscription-modal__confirmation-message-box">
            <span>🎉🎉🎉</span>
            <p className="">Thank you! You've succesfully subscribed! 🙂</p>
            <button
              className="subscription-modal__close-modal-btn"
              onClick={() => setOpenModal(false)}
            >
              <FaTimes />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
