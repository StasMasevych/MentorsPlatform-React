import imageLearning from "../assets/how it works images/learning-man.png";

export default function ForWhom() {
  return (
    <div className="for-whom">
      <div className="for-whom__container">
        <h2 className="for-whom__title">For whom is our platform ?</h2>
        <div className="for-whom__content-block content-block-for-whom">
          <div className="content-block-for-whom__item content-block-for-whom__image">
            <img src={imageLearning} alt="learning" />
          </div>
          <div className="content-block-for-whom__item content-block-for-whom__text text-content-block-for-whom">
            <div className="text-content-block-for-whom__box">
              <span>🎯</span>
              <p>
                people who want to switch to IT and need to focus where and how
                to start
              </p>
            </div>
            <div className="text-content-block-for-whom__box">
              <span>💪</span>
              <p>beginners in IT who wants to have a regular personal mentor</p>
            </div>
            <div className="text-content-block-for-whom__box">
              <span>🥇</span>
              <p>
                experts in IT who want to improve skills to the next level with
                personal mentors
              </p>
            </div>
            <div className="text-content-block-for-whom__box">
              <span>🤩</span>
              <p>
                people who want to build their own products and become startup
                guys
              </p>
            </div>
            <div className="text-content-block-for-whom__box">
              <span>🙌</span>
              <p>people who don’t know how to solve certain issues</p>
            </div>
            <div className="text-content-block-for-whom__box">
              <span>💼</span>
              <p>
                experts who want to find a dream job in Ukraine or outside
                Ukraine in great companies
              </p>
            </div>
            <div className="text-content-block-for-whom__box">
              <span>👨‍💻</span>
              <p>
                experts in IT who want to be confident in taking orders on
                Upwork, Fiverr and other freelance platforms by receiving
                support from personal mentor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
