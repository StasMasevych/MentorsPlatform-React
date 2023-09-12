import imgSreamer from "../assets/masterclass/streamer.webp";
import imgCoding from "../assets/learning images/coding2.png";
import imgLearning from "../assets/learning images/live-class.jpg";

// fix issue with height of images

// add reviews to  text blocks with images and texts

// add new cool images and texts

export default function Benefits() {
  return (
    <div className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title">How mentors can help you ?</h2>
        <p className="benefits__subtitle">
          There are many cases where mentors can make your learning process very
          fast and efficient by 1:1 meetings
        </p>
        <div className="benefits__blocks blocks-benefits">
          <div className="blocks-benefits__content-block content-block-benefits">
            <div className="content-block-benefits__text text-content-block-benefits">
              <h3 className="text-content-block-benefits__title">
                Find quick solution for your specific case
              </h3>
              <p className="text-content-block-benefits__paragraph">
                {" "}
                Do you want to review your code, to know how to connect some API
                or library to your app, explanations for some complicated topic
                or maybe you need to receive advices on getting a great job in
                tech?
              </p>
              <p className="text-content-block-benefits__paragraph">
                Our mentors can help you with such cases! Solve specific work
                issues with mentors when you have lack of experience,
                understanding of some topic or you need to have a fresh view for
                your project
              </p>
            </div>
            <div className="content-block-benefits__image">
              <img src={imgSreamer} alt="pic" />
            </div>
          </div>
          <div className="blocks-benefits__content-block content-block-benefits">
            <div className="content-block-benefits__image">
              <img src={imgLearning} alt="pic" />
            </div>
            <div className="content-block-benefits__text text-content-block-benefits">
              <h3 className="text-content-block-benefits__title">
                Get regular sessions with mentor
              </h3>
              <p className="text-content-block-benefits__paragraph">
                {" "}
                You can have a regular sessions with mentor to learn fast and
                efficiently some topic - new programming language, framework,
                design tools etc., or build your own unique project following
                the rule "learning by doing" which will make your different from
                others!
              </p>
              <p className="text-content-block-benefits__paragraph">
                By regular sessions with mentor several times per week you will
                have a clear road map what you need to learn and receive the new
                knowledge and skills very fast that will open new career
                opportunities!
              </p>
            </div>
          </div>
          <div className="blocks-benefits__content-block content-block-benefits">
            <div className="content-block-benefits__text text-content-block-benefits">
              <h3 className="text-content-block-benefits__title">
                Create smart network to build cool things
              </h3>
              <p className="text-content-block-benefits__paragraph">
                {" "}
                You have an ability to meet with great mentors which will be
                able to support you in many cases whether it is related to
                leraning, corpoarte work or freelancing
              </p>
              <p className="text-content-block-benefits__paragraph">
                Your network create your value as a specialist. Feel free to
                present your ideas for mentors and receive the feedbacks from
                them, take your new community to build something cool!
              </p>
            </div>
            <div className="content-block-benefits__image">
              <img src={imgCoding} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
