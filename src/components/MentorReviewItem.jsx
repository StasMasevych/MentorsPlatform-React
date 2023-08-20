import { mentorsReviews } from "../data/data-reviews/data-mentorsReviews";

export function MentorReviewsList() {
  return (
    <>
      {mentorsReviews.map((mentor) => {
        return <MentorReviewItem key={mentor.id} mentor={mentor} />;
      })}
    </>
  );
}

export default function MentorReviewItem({ mentor }) {
  return (
    <li className="mentors-reviews__item mentor-reviews">
      <div className="mentor-reviews__image">
        <img src={mentor.image} alt="mentor" />
      </div>
      <p className="mentor-reviews__text">
        Mentoring is the ultimate evolution of networking: direct, honest,
        growth & value driven. A win-win for everyone, what are you waiting for?
      </p>
      <h3 className="mentor-reviews__name">{mentor.authorName}</h3>
      <p className="mentor-reviews__job">💼 {mentor.authorJob}</p>

      {/* <div className="mentor-reviews__info">
        <h3 className="mentor-reviews__name">{mentor.name}</h3>
        <p className="mentor-reviews__job">💼 {mentor.job}</p>
       
        <div className="mentor-reviews__status status-mentor-reviews">
          <p className="status-mentor-reviews__mentorship">⭐️ mentorship</p>
          <p className="status-mentor-reviews__classes">🤩 live classes</p>
        </div>
      </div> */}
    </li>
  );
}
