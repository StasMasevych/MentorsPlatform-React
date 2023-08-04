import imgUber from "../assets/brands images/uber.svg";
import imgAirbnb from "../assets/brands images/airbnb.svg";
import imgNetflix from "../assets/brands images/netflix.svg";
import imgAmazon from "../assets/brands images/amazon.svg";
import imgGoogle from "../assets/brands images/google.svg";
import imgTinder from "../assets/brands images/tinder.svg";

export default function Brands() {
  return (
    <div className="brands">
      <div className="brands__container">
        <h2 className="brands__title">
          Our mentors joined us from different companies{" "}
        </h2>
        <ul className="brands__list">
          <li className="brands__item">
            <img src={imgUber} alt="brand" />
          </li>
          <li className="brands__item">
            <img src={imgAirbnb} alt="brand" />
          </li>
          <li className="brands__item">
            <img src={imgAmazon} alt="brand" />
          </li>
          <li className="brands__item">
            <img src={imgGoogle} alt="brand" />
          </li>
          <li className="brands__item">
            <img src={imgNetflix} alt="brand" />
          </li>
          <li className="brands__item">
            <img src={imgTinder} alt="brand" />
          </li>
        </ul>
      </div>
    </div>
  );
}
