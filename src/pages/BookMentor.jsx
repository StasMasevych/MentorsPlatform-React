import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PlatformContext } from "../context/PlatformContext";

import {
  useCalendlyEventListener,
  InlineWidget,
  PopupWidget,
  PopupButton,
} from "react-calendly";

// add payment widjet as step 4
// add mentor name as unique id for calendly (before set this at calndly account)

const questions = [
  "What would you like to cover in this session?",
  "What would you like to achieve by the end of the session?",
];

export default function BookMentor() {
  // stepper
  const [step, setStep] = useState(1);

  //Calendly event data
  const [data, setData] = useState(null);
  console.log(data);

  // input value

  const [inputMyGoal, setInputMyGoal] = useState("");
  const [inputMyExpactation, setInputMyExpactation] = useState("");

  // object with input data for backend
  const [userData, setUserData] = useState({});
  console.log(userData);

  // mentor obj local state
  const [mentorBooked, setMentorBooked] = useState({ name: "default" });
  console.log(mentorBooked);
  const params = useParams();
  console.log(params.name);

  const { singleMentor, mentorsByCategory } = useContext(PlatformContext);

  // get mentor obj with needed nickCalendly
  useEffect(() => {
    function getCalendlyforBooking() {
      const filteredMentor = mentorsByCategory.find(
        (mentor) => mentor.name === params.name
      );
      setMentorBooked(filteredMentor);
    }
    getCalendlyforBooking();
    window.scrollTo(0, 0);
  }, []);

  // call function after step 3 to submit user data

  useEffect(() => {
    function getUserData() {
      if (step === 3 && data) {
        const newUserData = {
          id: crypto.randomUUID(),
          userGoal: inputMyGoal,
          userExpectations: inputMyExpactation,
        };

        setUserData(newUserData);
        return newUserData;
      }
    }
    getUserData();
  }, [data]);

  // listenig Calendly events

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => setData(e.data.payload),
  });

  // stepper
  function handlePrevious() {
    setStep((prevStep) => {
      if (step > 1) {
        return prevStep - 1;
      }
      return step;
    });
  }

  function handleNext() {
    setStep((prevStep) => {
      if (step >= 1 && step < 4) {
        return prevStep + 1;
      }
      return step;
    });
  }

  return (
    <div className="booking">
      <div className="booking__container">
        <div className="booking__wrapper">
          <div className="booking__steps steps-booking">
            <div className="steps-booking__heading-text">
              <h2> Book a session</h2>
              <h5> Follow simple steps to book your session</h5>
            </div>
            <div className="steps-booking__numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
              <div className={step >= 4 ? "active" : ""}>4</div>
            </div>

            {step === 1 && (
              <form className="booking__form form-booking">
                <h3 className="form-booking__question">{questions[0]}</h3>
                <p className="form-booking__comment">
                  This can be one main subject, or a list of questions you have
                  for your mentor.
                </p>
                <div className="form-booking__text-area-box">
                  <textarea
                    type="text"
                    placeholder="List all questions you want to discuss with mentor"
                    /* value={inputMyGoal} */
                    onChange={(e) => setInputMyGoal(e.target.value)}
                  />
                </div>
              </form>
            )}
            {step === 2 && (
              <form className="booking__form">
                <h3 className="form-booking__question">{questions[1]}</h3>
                <div className="form-booking__text-area-box">
                  <textarea
                    type="text"
                    /* value={inputMyExpactation} */
                    onChange={(e) => setInputMyExpactation(e.target.value)}
                  />
                </div>
              </form>
            )}
            {step === 3 && (
              <div className="form-booking__select-box select-box-form-booking">
                {!data ? (
                  <>
                    <h3 className="select-box-form-booking__comment">
                      Select date and time for session with mentor
                    </h3>
                    <div className="select-box-form-booking__calendly-form">
                      <InlineWidget url="https://calendly.com/stasmasevych/35min" />
                    </div>
                  </>
                ) : (
                  <p className="select-box-form-booking__submit-message">
                    Thanks for application! Enjoy your session with the mentor
                    soon! 🚀
                  </p>
                )}
              </div>
            )}
            {step === 4 && (
              <div className="select-box-form-booking__payment-widget-box">
                <p>Here, it will be payment widget</p>
              </div>
            )}

            <div className="buttons">
              <button
                className="booking__button button"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button className="booking__button button" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>

          {/* <div className="booking__calendly">
            <p>Select date and time for session with mentor</p>
            <div style={{ height: "800px", maxWidth: "1000px" }}>
              <iframe
                title="calendly"
                src="https://calendly.com/stasmasevych/60min"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </div>
          </div> */}
        </div>
        {/* <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/stasmasevych"
          style={{ minWidth: "320px", height: "700px" }}
        ></div> */}
        {/* <Link
          to={`https://calendly.com/${mentorBooked?.nickCalendly}/${mentorBooked?.typeCalendly}`}
        >
          <button className="button">Select</button>
        </Link> */}
      </div>
    </div>
  );
}
