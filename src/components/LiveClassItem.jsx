import { Link } from "react-router-dom";

export default function LiveClassItem({ liveClass }) {
  return (
    <Link className="courses__nav" to={`/live-class/${liveClass.name}`}>
      <li className="courses__item item-courses" key={liveClass.id}>
        <div className="item-courses__image">
          <img src={liveClass.image} alt="course" />
        </div>
        <div className="item-courses__info info-item-courses">
          <div className="info-item-courses-text">
            <p className="info-item-courses-text__name">{liveClass.name}</p>
            <p className="info-item-courses-text__descirption">
              {liveClass.description}
            </p>
          </div>
          <div className="item-courses__details details-item-courses">
            <p className="details-item-courses__author">
              By {liveClass.author}
            </p>
            <p className="details-item-courses__duration">
              ⏰ {liveClass.duration}
            </p>
            <p className="details-item-courses__start">
              🗓️ {liveClass.startDate}
            </p>
            <p className="details-item-courses__level">
              <span>{liveClass.level}</span>
            </p>
            <p className="details-item-courses__price">{liveClass.payment}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}
