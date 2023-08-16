import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PlatformContext } from "../context/PlatformContext";

import {
  useCalendlyEventListener,
  InlineWidget,
  PopupWidget,
  PopupButton,
} from "react-calendly";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const questions = [
  "What would you like to cover in this session?",
  "What would you like to achieve by the end of the session?",
];

export default function BookApplication() {
  // stepper
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //Calendly event data
  const [data, setData] = useState(null);
  console.log(data);

  const [mentorBooked, setMentorBooked] = useState({ name: "default" });
  console.log(mentorBooked);
  const params = useParams();
  console.log(params.name);

  const { singleMentor, mentorsByCategory } = useContext(PlatformContext);

  useEffect(() => {
    function getCalendlyforBooking() {
      const filteredMentor = mentorsByCategory.find(
        (mentor) => mentor.name === params.name
      );
      setMentorBooked(filteredMentor);
    }
    getCalendlyforBooking();
  }, []);

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
      if (step >= 1 && step < 3) {
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
            <div className="steps-booking__numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
              {/*  <div className={step >= 4 ? "active" : ""}>4</div> */}
            </div>

            {step === 1 && (
              <form className="booking__form">
                <h3>{questions[0]}</h3>
                <p>
                  This can be one main subject, or a list of questions you have
                  for your mentor.
                </p>
                <div className="form-booking__text-area-box">
                  <textarea
                    type="text"
                    placeholder="List all questions you want to discuss with mentor"
                  />
                </div>
              </form>
            )}
            {step === 2 && (
              <form className="booking__form">
                <h3>{questions[1]}</h3>
                <div className="form-booking__text-area-box">
                  <textarea />
                </div>
              </form>
            )}
            {step === 3 && (
              <div className="form-booking__select-box select-box-form-booking">
                {!data ? (
                  <>
                    <h3>Select date and time for session with mentor</h3>
                    <div className="select-box-form-booking__calendly-form">
                      <InlineWidget url="https://calendly.com/stasmasevych/60min" />
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

            {/* data && step === 3 && <p>Thanks for application!</p> */}
            {/* <p className="message">
              Step {step}: {messages[step - 1]}
            </p> */}

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
          {/* <form className="booking__form">
            <div>
              <span>Question 1</span>
              <input />
            </div>
            <div>
              <span>Question 2</span>
              <input />
            </div>
          </form> */}

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
