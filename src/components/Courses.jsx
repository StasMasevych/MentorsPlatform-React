import { courses } from "../data/data-courses/data-courses";

export default function Courses() {
  return (
    <div className="courses">
      <div className="courses__container">
        <div className="courses__text-block">
          <h2 className="courses__title">
            Find also amazing live courses to learn what you love 😍
          </h2>
          <p className="courses__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <ul className="courses__list">
          {courses.map((course) => {
            return (
              <a className="courses__nav" href="link">
                <li className="courses__item item-courses" key={course.id}>
                  <div className="item-courses__image">
                    <img src={course.image} alt="course" />
                  </div>
                  <div className="item-courses__info info-item-courses">
                    <div className="info-item-courses-text">
                      <p className="info-item-courses-text__name">
                        {course.name}
                      </p>
                      <p className="info-item-courses-text__descirption">
                        {course.description}
                      </p>
                    </div>
                    <div className="item-courses__details details-item-courses">
                      <p className="details-item-courses__author">
                        By {course.author}
                      </p>
                      <p className="details-item-courses__duration">
                        ⏰ {course.duration}
                      </p>
                      <p className="details-item-courses__start">
                        🗓️ {course.startDate}
                      </p>
                      <p className="details-item-courses__level">
                        <span>{course.level}</span>
                      </p>
                      <p className="details-item-courses__price">
                        {course.payment}
                      </p>
                    </div>
                  </div>
                </li>
              </a>
            );
          })}
        </ul>
        <button className="button button__courses">Find more courses</button>
      </div>
    </div>
  );
}
