import { FaTimes } from "react-icons/fa";
import { useState, useContext } from "react";

import { PlatformContext } from "../context/PlatformContext";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";

export default function ModalHelpRequest({ modalOpen, setOpenModal }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputRequest, setInputRequest] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState(null);

  const { dispatch } = useContext(PlatformContext);

  async function onSubmitHandler(e) {
    e.preventDefault();

    if (!inputEmail || !inputRequest) return;

    const requestData = {
      id: crypto.randomUUID(),
      description: inputRequest,
      email: inputEmail,
    };

    dispatch({ type: "GET_REQUEST-TO-HELP", payload: requestData });

    setInputEmail("");
    setInputRequest("");
    setSubmittedEmail(inputEmail);
    console.log(submittedEmail);
    // send to firestore
    const docRef = collection(db, "userRequests");

    const newRequestData = {
      ...requestData,
      timestamp: serverTimestamp(),
    };

    await addDoc(docRef, newRequestData);
  }

  return (
    <div
      className={
        modalOpen ? "help-request-modal show-modal" : "help-request-modal"
      }
    >
      <div
        className={
          !submittedEmail
            ? "help-request-modal__box "
            : "help-request-modal__box-confirmation"
        }
      >
        {!submittedEmail ? (
          <>
            <form
              className="help-request-modal__form form-help-request-modal"
              onSubmit={onSubmitHandler}
            >
              <h2 className="form-help-request-modal__title help-request-modal-form-item">
                📌 Make a request on what is important for you
              </h2>
              <p className="form-help-request-modal__subtitle help-request-modal-form-item">
                Add what topics, mentors or live classes you want to have and we
                will try to help you with that 👋
              </p>
              <textarea
                className="help-request-modal__textarea help-request-modal-form-item"
                type="text"
                placeholder="I want to have ..."
                value={inputRequest}
                onChange={(e) => setInputRequest(e.target.value)}
              />
              <input
                className="help-request-modal__input help-request-modal-form-item"
                type="text"
                placeholder="Enter your email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <button className="help-request-modal__button button help-request-modal-form-item">
                Add
              </button>
            </form>
            <button
              className="help-request-modal__close-modal-btn"
              onClick={() => setOpenModal(false)}
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <div className="help-request-modal__confirmation-message-box">
            <span>🙌 🙌 🙌</span>
            <p className="">
              Thank you! You've succesfully submitted your request! 🙂
            </p>
            <button
              className="help-request-modal__close-modal-btn"
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
