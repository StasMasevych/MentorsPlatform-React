import { reviews } from "../data/data-reviews/data-reviews";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__container">
        <h2 className="reviews__title">
          Our mentors has already helped many people to find jobs and improve
          skills 🥳
        </h2>
        <ul className="reviews__list">
          {reviews.map((review) => {
            return (
              <li className="reviews__item item-reviews" key={review.id}>
                <div className="author-data-item-reviews__person">
                  <div className="author-data-item-reviews__image">
                    <img src={review.image} alt="review" />
                  </div>
                  <div className="author-data-item-reviews__about about-author-data-item-reviews">
                    <p className="about-author-data-item-reviews__name">
                      {review.authorName}
                    </p>
                    <p className="about-author-data-item-reviews__job">
                      {review.authorJob}
                    </p>
                  </div>
                </div>
                <div className="item-reviews__text text-item-reviews">
                  <p className="text-item-reviews__desc">
                    {review.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
