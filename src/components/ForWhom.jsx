import imageLearning from "../assets/how it works images/learning-man.png";

// add icons/emojies to each p

export default function ForWhom() {
  return (
    <div className="for-whom">
      <div className="for-whom__container">
        <h2 className="for-whom__title">For whom is our platform ?</h2>
        <div className="for-whom__content-block content-block-for-whom">
          <div className="content-block-for-whom__item content-block-for-whom__image">
            <img src={imageLearning} alt="learning" />
          </div>
          <div className="content-block-for-whom__item content-block-for-whom__text">
            <p>
              people who want to switch to IT and need to focus where and how to
              start
            </p>
            <p>beginners in IT who wants to have a regular personal mentor</p>
            <p>
              experts in IT who want to improve skills to the next level with
              personal mentors
            </p>
            <p>
              people who want to build their own products and become startup
              guys{" "}
            </p>
            <p>people who don’t know how to solve certain issues</p>
            <p>
              experts who want to find a dream job in Ukraine or outside Ukraine
              for great companies
            </p>
            <p>
              experts in IT who want to be confident in taking orders on Upwork,
              Fiverr and other freelance platforms by receiving support from
              personal mentor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
