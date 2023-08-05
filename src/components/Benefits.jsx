import imgCoding1 from "../assets/learning images/coding.jpg";
import imgCoding2 from "../assets/learning images/coding2.png";
import imgLearning from "../assets/learning images/live-class.jpg";

export default function Benefits() {
  return (
    <div className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p className="benefits__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="benefits__blocks blocks-benefits">
          <div className="blocks-benefits__content-block content-block-benefits">
            <div className="content-block-benefits__text text-content-block-benefits">
              <h3 className="text-content-block-benefits__title">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-content-block-benefits__paragraph">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="text-content-block-benefits__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="content-block-benefits__image">
              <img src={imgCoding1} alt="pic" />
            </div>
          </div>
          <div className="blocks-benefits__content-block content-block-benefits">
            <div className="content-block-benefits__image">
              <img src={imgLearning} alt="pic" />
            </div>
            <div className="content-block-benefits__text text-content-block-benefits">
              <h3 className="text-content-block-benefits__title">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-content-block-benefits__paragraph">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="text-content-block-benefits__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="blocks-benefits__content-block content-block-benefits">
            <div className="content-block-benefits__text text-content-block-benefits">
              <h3 className="text-content-block-benefits__title">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-content-block-benefits__paragraph">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="text-content-block-benefits__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="content-block-benefits__image">
              <img src={imgCoding2} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
