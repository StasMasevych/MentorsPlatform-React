import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/bgHero.jpg";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__textblock textblock-hero">
          <h1 className="textblock-hero__title">
            Learn and grow with the best mentors in IT
          </h1>
          <h3 className="textblock-hero__subtitle">
            You can book 1:1 video calls with mentors from different categories
            and start your growth now
          </h3>
          <button
            className="textblock-hero__button button"
            onClick={() => navigate("/mentors")}
          >
            Find
          </button>
        </div>
        <div className="hero__image">
          <img src={bgImage} alt="coding" />
        </div>
      </div>
    </section>
  );
}
