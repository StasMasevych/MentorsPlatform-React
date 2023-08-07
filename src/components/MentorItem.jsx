export default function MentorItem({ mentor }) {
  return (
    <li className="mentors__item mentor">
      <div className="mentor__image">
        <img src={mentor.image} alt="mentor" />
      </div>
      <div className="mentor__info">
        <h3 className="mentor__name">{mentor.name}</h3>
        <p className="mentor__job">💼 {mentor.job}</p>
        <div className="mentor__status status-mentor">
          <p className="status-mentor__mentorship">⭐️ mentorship</p>
          <p className="status-mentor__classes">🤩 live classes</p>
        </div>
      </div>
    </li>
  );
}
