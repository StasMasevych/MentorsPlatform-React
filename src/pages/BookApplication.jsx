import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PlatformContext } from "../context/PlatformContext";

import {
  useCalendlyEventListener,
  InlineWidget,
  PopupWidget,
  PopupButton,
} from "react-calendly";

export default function BookApplication() {
  const [mentorBooked, setMentorBooked] = useState("");
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
  }, [mentorBooked]);

  /* useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  }); */

  return (
    <div>
      <div>
        <form>
          <div>
            <span>Question 1</span>
            <input />
          </div>
          <div>
            <span>Question 2</span>
            <input />
          </div>
        </form>
        <p>Select date and time for session with mentor</p>
        <Link
          to={`https://calendly.com/${mentorBooked?.nickCalendly}/${mentorBooked?.typeCalendly}`}
          className="button"
        >
          Select
        </Link>
        {/*  <div style={{ height: "600px", width: "1000px" }}>
          <iframe
            title="calendly"
            src="https://calendly.com/stasmasevych/60min"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}
