import image from "../assets/learning images/online-meet.png";

export default function BecomeMentor() {
  return (
    <div className="become-mentor">
      <div className="become-mentor__container">
        <h5 className="become-mentor__header-message">
          Registration has started! 🎉 🥳 🎊
        </h5>
        <div className="become-mentor__hero hero-become-mentor">
          <div className="hero-become-mentor__image">
            <img src={image} alt="go" />
          </div>
          <div className="hero-become-mentor__content content-hero-become-mentor">
            <h3>Open next chapter in your career by mentoring</h3>
            <p>
              At our platform, mentors are the lifeblood of our community. Your
              knowledge, passion and experience provides our members the support
              they need to build a career they love. Whether you’re a first time
              mentor or a lifelong learner, your mentorship can make a massive
              impact.
            </p>
            <button className="content-hero-become-mentor__button button">
              Become a mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//NotFound
