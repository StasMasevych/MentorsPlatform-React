import { useState } from "react";

import ModalHelpRequest from "./ModalHelpRequest";

export default function HelpRequest() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="help-request">
      <h4 className="help-request__title">
        You didn't find what you expected? Just keep calm 🧘‍♂️
      </h4>
      <p className="help-request__subtitle">
        Let us know and we will try to help you!
      </p>
      <button
        className="help-request__button button"
        onClick={() => setModalOpen(true)}
      >
        Make request
      </button>
      {modalOpen && (
        <ModalHelpRequest modalOpen={modalOpen} setOpenModal={setModalOpen} />
      )}
    </div>
  );
}
