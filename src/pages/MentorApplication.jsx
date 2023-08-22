import { useState, useEffect } from "react";
import { categories } from "../data/data-categories/data-categories";

import Category from "../components/Category";
// step 1

function FirstStep({
  name,
  surname,
  linkedinLink,
  instagramLink,
  onChangeName,
  onChangeSurname,
  onChangeLinkedinLink,
  onChangeInstagramLink,
}) {
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
                onChange={(e) => onChangeName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-form-box-mentor-application__box">
              <label>Surname</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
                onChange={(e) => onChangeSurname(e.target.value)}
                value={surname}
              />
            </div>
            <div className="form-form-box-mentor-application__box">
              <label>Link to LinkedIn profile</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
                onChange={(e) => onChangeLinkedinLink(e.target.value)}
                value={linkedinLink}
              />
            </div>
            <div className="form-form-box-mentor-application__box">
              <label>Link to Instagram profile</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
                onChange={(e) => onChangeInstagramLink(e.target.value)}
                value={instagramLink}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 2

function SecondStep({ job, company, onChangeCompany, onChangeJob }) {
  return (
    <div className="mentor-application">
      <div className="mentor-application__container">
        <h1 className="mentor-application__title">
          What is your job and company ?
        </h1>
        <div className="mentor-application__form-box form-box-mentor-application">
          <form className="form-box-mentor-application__form form-form-box-mentor-application">
            <div className="form-form-box-mentor-application__box">
              <label>Job</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
                onChange={(e) => onChangeJob(e.target.value)}
                value={job}
              />
            </div>
            <div className="form-form-box-mentor-application__box">
              <label>Company</label>
              <input
                className="form-form-box-mentor-application__input"
                type="text"
                onChange={(e) => onChangeCompany(e.target.value)}
                value={company}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 3

function ThirdStep({
  about,
  category,
  topics,
  onChangeAbout,
  onChangeCategory,
  onChangeTopics,
}) {
  const [isActive, setIsActive] = useState(0);

  function handleChangeIsActive(index) {
    setIsActive(index);
    const selectedCategory = categories.find(
      (category, indexCategory) => indexCategory === index
    );

    onChangeCategory(selectedCategory.name);
  }

  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="mentor-application">
      <div className="mentor-application__container">
        <div className="mentor-application__form-box form-box-mentor-application second-step__form-box">
          <form className="form-box-mentor-application__form form-form-box-mentor-application second-step__form">
            <h2 className="mentor-application__title">
              What's your main area of expertise?
            </h2>
            <div className="form-form-box-mentor-application__categories">
              {categories.map((category, index) => {
                return (
                  <div onClick={() => handleChangeIsActive(index)}>
                    <Category
                      key={category.id}
                      category={category}
                      isActive={isActive}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>

            <h2 className="mentor-application__title">
              Please write few sentences about yourself, your main experience
              and years of such experience
            </h2>
            <div className="form-form-box-mentor-application__box second-step-form__box">
              <textarea
                className="form-form-box-mentor-application__textarea"
                type="text"
                onChange={(e) => onChangeAbout(e.target.value)}
                value={about}
              />
            </div>

            <div className="mentor-application__heading-text">
              <h2 className="mentor-application__title">
                What are the main topics that you want to cover as a mentor ?
              </h2>
              <p className="mentor-application__subtitle">
                These topics will be seen in your profile and navigate mantee to
                select a proper topic
              </p>
            </div>

            <div className="form-form-box-mentor-application__box second-step-form__box">
              <textarea
                className="form-form-box-mentor-application__textarea"
                /* placeholder="example, using AI tools to speed-up frontend development, building chatbots with Phyton" */
                type="text"
                onChange={(e) => onChangeTopics(e.target.value)}
                value={topics}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 4

function FourthStep({ session, onChangeSession }) {
  const [isActive, setIsActive] = useState(0);

  function handleChangeIsActive(index) {
    setIsActive(index);

    const selectedSession = sessions.find(
      (session, indexSession) => indexSession === index
    );

    onChangeSession(selectedSession);
  }

  const sessions = [
    "I want to offer a fee for my sessions",
    "I want to offer free sessions",
    "I want to offer both free and paid sessions",
  ];

  return (
    <div className="mentor-application">
      <div className="mentor-application__container">
        <h2 className="mentor-application__title">
          What type of mentor session do you want to offer ?
        </h2>
        <div className="mentor-application__form-box form-box-mentor-application">
          <ul className="form-box-mentor-application__list list-form-box-mentor-application">
            {sessions.map((session, index) => {
              return (
                <li
                  className={
                    isActive === index
                      ? "list-form-box-mentor-application__item-active"
                      : "list-form-box-mentor-application__item"
                  }
                  onClick={() => handleChangeIsActive(index)}
                >
                  {session}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// step 5

function FiveStep({ welcomeMessage, onChangeWelcomeMessage }) {
  return (
    <div className="mentor-application">
      <div className="mentor-application__container">
        <div className="mentor-application__form-box form-box-mentor-application second-step__form-box">
          <form className="form-box-mentor-application__form form-form-box-mentor-application second-step__form">
            <div className="mentor-application__heading-text">
              <h2 className="mentor-application__title">
                Write you welcome message
              </h2>
              <p className="mentor-application__subtitle">
                This message is addressed for mentees to show your interest,
                expertise ans passion to give a value as a mentor
              </p>
            </div>

            <div className="form-form-box-mentor-application__box second-step-form__box">
              <textarea
                className="form-form-box-mentor-application__textarea"
                type="text"
                onChange={(e) => onChangeWelcomeMessage(e.target.value)}
                value={welcomeMessage}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 6

function SixStep() {
  return (
    <div className="mentor-application">
      <div className="mentor-application__container mentor-application__select-photo-container">
        <h2 className="mentor-application__title">
          Select a photo for your profile
        </h2>
        <p className="mentor-application__subtitle">
          The photo shall with good quality and properly demonstrate the person
          of a mentor
        </p>
        <div className="mentor-application__form-box form-box-mentor-application">
          <button className="mentor-application__select-button">
            📸 Select a photo
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MentorApplication() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [topics, setTopics] = useState("");
  const [session, setSession] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  // make states for all steps here and pass as props to child components
  // make formData general state object and put there all small states, and
  // dispatch it to reducer + send to Firebase as new collection with new docs

  function handleSubmit() {
    setPage(page + 1);

    const obj = {
      name,
      surname,
      linkedinLink,
      instagramLink,
      job,
      company,
      category,
      about,
      topics,
      session,
      welcomeMessage,
    };

    console.log(obj);
  }

  function conditionalComponent() {
    if (page === 0) {
      return (
        <FirstStep
          name={name}
          surname={surname}
          linkedinLink={linkedinLink}
          instagramLink={instagramLink}
          onChangeName={setName}
          onChangeSurname={setSurname}
          onChangeLinkedinLink={setLinkedinLink}
          onChangeInstagramLink={setInstagramLink}
        />
      );
    }

    if (page === 1) {
      return (
        <SecondStep
          job={job}
          company={company}
          onChangeJob={setJob}
          onChangeCompany={setCompany}
        />
      );
    }

    if (page === 2) {
      return (
        <ThirdStep
          category={category}
          about={about}
          topic={topics}
          onChangeAbout={setAbout}
          onChangeCategory={setCategory}
          onChangeTopics={setTopics}
        />
      );
    }

    if (page === 3) {
      return <FourthStep session={session} onChangeSession={setSession} />;
    }

    if (page === 4) {
      return (
        <FiveStep
          welcomeMessage={welcomeMessage}
          onChangeWelcomeMessage={setWelcomeMessage}
        />
      );
    }

    if (page === 5) {
      return <SixStep />;
    }

    /* return <FirstStep />; */
  }
  return (
    <div>
      {conditionalComponent()}
      <div className="mentor-application__buttons">
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

        <div className="mentor-application__button-box-right">
          <button
            className="mentor-application__button button"
            onClick={handleSubmit}
          >
            {page === 0 || page === 1 || page === 2 || page === 3 || page === 4
              ? "Next"
              : "Join as a mentor"}
          </button>
        </div>
      </div>
    </div>
  );
}
