import { useState, useContext } from "react";

import ModalSubscription from "./ModalSubscription";

export default function Subscription() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="subscription">
      <h4 className="subscription__title">
        Do you want to stay in touch with us?
      </h4>
      <p className="subscription__subtitle">
        Get updates on new mentors, live classes and platform features
      </p>
      <button
        className="subscription__button button"
        onClick={() => setModalOpen(true)}
      >
        Subscribe
      </button>
      {modalOpen && <ModalSubscription setOpenModal={setModalOpen} />}
    </div>
  );
}
