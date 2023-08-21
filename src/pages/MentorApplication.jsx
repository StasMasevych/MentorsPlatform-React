import { useState } from "react";

// step 1

function FirstStep() {
  return (
    <div className="mentor-application">
      <div className="mentor-application__container">
        <h1 className="mentor-application__title">
          Add your name and social media data
        </h1>
        <div className="mentor-application__form-box form-box-mentor-application">
          <form className="form-box-mentor-application__form form-form-box-mentor-application">
            <div className="form-form-box-mentor-application__box">
              <label>Name</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
              />
            </div>
            <div className="form-form-box-mentor-application__box">
              <label>Surname</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
              />
            </div>
            <div className="form-form-box-mentor-application__box">
              <label>Link to LinkedIn profile</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
              />
            </div>
            <div className="form-form-box-mentor-application__box">
              <label>Link to Instagram profile</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 2

function SecondStep() {
  return (
    <div className="mentor-application">
      <div className="mentor-application__container">
        <h1>Add your name and social media data</h1>
        <div>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

// step 3

function ThirdStep() {
  return (
    <div className="mentor-application">
      <div className="mentor-application__container">
        <h1>Add your name and social media data</h1>
        <div>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default function MentorApplication() {
  const [page, setPage] = useState(0);
  console.log(page);
  // make states for all steps here and pass as props to child components
  // make formData general state object and put there all small states, and
  // dispatch it to reducer + send to Firebase as new collection with new docs

  function handleSubmit() {
    setPage(page + 1);
  }

  function conditionalComponent() {
    if (page === 0) {
      return <FirstStep />;
    }

    if (page === 1) {
      return <SecondStep />;
    }

    if (page === 2) {
      return <ThirdStep />;
    }

    return <FirstStep />;
  }
  return (
    <div className="mentor-application__buttons">
      {conditionalComponent()}
      <div className="mentor-application__button-box-right">
        <button
          className="mentor-application__button button"
          onClick={handleSubmit}
        >
          {page === 0 || page === 1 ? "Next" : "Submit"}
        </button>
      </div>

      {page > 0 && (
        <div className="mentor-application__button-box-left">
          <button
            className="mentor-application__button button"
            onClick={() => setPage(page - 1)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
