import { useState, useContext } from "react";

import ModalSubscription from "./ModalSubscription";

export default function CantJoin() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="subscription">
      <h4 className="subscription__title">You can't join this time ?</h4>
      <p className="subscription__subtitle">
        Be informed about all future live classes
      </p>
      <input />
      <button
        className="subscription__button button"
        onClick={() => setModalOpen(true)}
      >
        Subscribe
      </button>
    </div>
  );
}
