/* export default function CreateLiveClass() {
  return (
    <div className="create-live-class">
      <div className="create-live-class__container">
        <h5 className="create-live-class__header-message">
          We will open an ability to create live classes soon! 🙌
        </h5>
      </div>
    </div>
  );
} */

import { useState, useEffect, useContext } from "react";
import { categories } from "../data/data-categories/data-categories";

import { PlatformContext } from "../context/PlatformContext";

import Category from "../components/Category";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";
import { auth } from "../firebase/config";

// step 1

function FirstStep({
  name,
  surname,
  linkedinLink,
  instagramLink,
  onChangeName,
  onChangeSurname,
  onChangeLinkedinLink,
  onChangeInstagramLink,
}) {
  return (
    <div className="create-live-class">
      <div className="create-live-class__container">
        <h1 className="create-live-class__title">
          Add your name and social media data
        </h1>
        <div className="create-live-class__form-box form-box-create-live-class">
          <form className="form-box-create-live-class__form form-form-box-create-live-class">
            <div className="form-form-box-create-live-class__box">
              <label>Name</label>
              <input
                className="form-form-box-create-live-class__input"
                type="text"
                onChange={(e) => onChangeName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-form-box-create-live-class__box">
              <label>Surname</label>
              <input
                className="form-form-box-create-live-class__input"
                type="text"
                onChange={(e) => onChangeSurname(e.target.value)}
                value={surname}
              />
            </div>
            <div className="form-form-box-create-live-class__box">
              <label>Link to LinkedIn profile</label>
              <input
                className="form-form-box-create-live-class__input"
                type="text"
                onChange={(e) => onChangeLinkedinLink(e.target.value)}
                value={linkedinLink}
              />
            </div>
            <div className="form-form-box-create-live-class__box">
              <label>Link to Instagram profile</label>
              <input
                className="form-form-box-create-live-class__input"
                type="text"
                onChange={(e) => onChangeInstagramLink(e.target.value)}
                value={instagramLink}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 2

function SecondStep({ job, company, onChangeCompany, onChangeJob }) {
  return (
    <div className="create-live-class">
      <div className="create-live-class__container">
        <h1 className="mentor-application__title">
          What is your job and company ?
        </h1>
        <div className="create-live-class__form-box form-box-create-live-class">
          <form className="form-box-create-live-class__form form-form-box-create-live-class">
            <div className="form-form-box-create-live-class__box">
              <label>Job</label>
              <input
                className="form-form-box-create-live-class__input"
                type="text"
                onChange={(e) => onChangeJob(e.target.value)}
                value={job}
              />
            </div>
            <div className="form-form-box-create-live-class__box">
              <label>Company</label>
              <input
                className="form-form-box-create-live-class__input"
                type="text"
                onChange={(e) => onChangeCompany(e.target.value)}
                value={company}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 3

function ThirdStep({
  about,
  category,
  topics,
  onChangeAbout,
  onChangeCategory,
  onChangeTopics,
}) {
  const [isActive, setIsActive] = useState(0);

  function handleChangeIsActive(index) {
    setIsActive(index);
    const selectedCategory = categories.find(
      (category, indexCategory) => indexCategory === index
    );

    onChangeCategory(selectedCategory.name);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="create-live-class">
      <div className="create-live-class__container">
        <div className="create-live-class__form-box form-box-create-live-class second-step__form-box">
          <form className="form-box-create-live-class__form form-form-box-create-live-class second-step__form">
            <h2 className="create-live-class__title">
              What's your main area of expertise?
            </h2>
            <div className="form-form-box-create-live-class__categories categories-form-form-box-create-live-class">
              {categories.map((category, index) => {
                return (
                  <div onClick={() => handleChangeIsActive(index)}>
                    <Category
                      key={category.id}
                      category={category}
                      isActive={isActive}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>

            <h2 className="create-live-class__title categories-form-form-box-create-live-class__title">
              Please write few sentences about yourself, your main experience
              and years of such experience
            </h2>
            <div className="form-form-box-create-live-class__box second-step-form__box">
              <textarea
                className="form-form-box-create-live-class__textarea"
                type="text"
                onChange={(e) => onChangeAbout(e.target.value)}
                value={about}
              />
            </div>

            <div className="create-live-class__heading-text">
              <h2 className="create-live-class__title">
                Give the relevant information about the live class that you want
                to create
              </h2>
              <p className="create-live-class__subtitle">
                Describe the name of the live class and its overview, what is
                the audience to whom it is addressed, the main benefits from the
                live class, date and time of live class
              </p>
            </div>

            <div className="form-form-box-create-live-class__box second-step-form__box">
              <textarea
                className="form-form-box-create-live-class__textarea"
                /* placeholder="example, using AI tools to speed-up frontend development, building chatbots with Phyton" */
                type="text"
                onChange={(e) => onChangeTopics(e.target.value)}
                value={topics}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 4

function FourthStep({ session, onChangeSession }) {
  const [isActive, setIsActive] = useState(0);

  const sessions = [
    "I want to offer a fee for my sessions",
    "I want to offer free sessions",
    "I want to offer both free and paid sessions",
  ];

  function handleChangeIsActive(index) {
    setIsActive(index);

    const selectedSession = sessions.find(
      (session, indexSession) => indexSession === index
    );

    onChangeSession(selectedSession);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="create-live-class">
      <div className="create-live-class__container">
        <h2 className="create-live-class__title">
          What type of live class do you want to offer ?
        </h2>
        <div className="create-live-class__form-box form-box-create-live-class">
          <ul className="form-box-create-live-class__list list-form-box-create-live-class">
            {sessions.map((session, index) => {
              return (
                <li
                  className={
                    isActive === index
                      ? "list-form-box-create-live-class__item-active"
                      : "list-form-box-create-live-class__item"
                  }
                  onClick={() => handleChangeIsActive(index)}
                >
                  {session}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// step 5

function FiveStep({ welcomeMessage, onChangeWelcomeMessage }) {
  return (
    <div className="create-live-class">
      <div className="create-live-class__container">
        <div className="create-live-class__form-box form-box-create-live-class second-step__form-box">
          <form className="form-box-create-live-class__form form-form-box-create-live-class second-step__form">
            <div className="create-live-class__heading-text">
              <h2 className="create-live-class__title">
                Write you welcome message
              </h2>
              <p className="create-live-class__subtitle">
                This message is addressed for students to show your interest,
                expertise ans passion to give a value as a mentor
              </p>
            </div>

            <div className="form-form-box-create-live-class__box second-step-form__box">
              <textarea
                className="form-form-box-create-live-class__textarea"
                type="text"
                onChange={(e) => onChangeWelcomeMessage(e.target.value)}
                value={welcomeMessage}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// step 6

function SixStep({
  onChangeProfileImage,
  onChangeLiveClassImage,
  handleSubmit,
}) {
  /* const [thumbnail, setThumbnail] = useState(null); */
  const [liveClassImage, setLiveClassImg] = useState(null);
  /*   console.log(thumbnail); */
  console.log(liveClassImage);
  const [thumbnailError, setThumbnailError] = useState(null);
  /* console.log(thumbnail); */
  /* console.log(thumbnailError); */

  /* function handleFileProfilePhotoChange(e) {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please, select some file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("The selected file shall be an image");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    onChangeProfileImage(selected);
    console.log("thumbnail updated");
  } */

  function handleFileClassImageChange(e) {
    console.log("changing state inside handleFileClassImageChange");
    setLiveClassImg(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please, select some file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("The selected file shall be an image");
      return;
    }

    setThumbnailError(null);
    setLiveClassImg(selected);
    onChangeLiveClassImage(selected);
    console.log("classImage updated");
  }

  return (
    <div className="create-live-class">
      <div className="create-live-class__container create-live-class__select-photo-container">
        <h2 className="create-live-class__title">
          Select an image for your live class
        </h2>
        <p className="create-live-class__subtitle">
          The photo shall with good quality and properly demonstrate information
          about the live class
        </p>
        <form className="create-live-class__form-box form-box-create-live-class">
          {/* <label
            className="create-live-class__select-input"
            for="inputPhotoTag"
          >
            📸 Select a profile photo
            <input
              id="inputTag"
              type="file"
              name="profilePhotoFile"
              onChange={handleFileProfilePhotoChange}
            />
          </label> */}
          <label className="create-live-class__select-input" for="inputTag">
            🎇 Select a live class image
            <input
              id="inputTag"
              type="file"
              name="liveClassImage"
              onChange={handleFileClassImageChange}
            />
          </label>
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </form>
      </div>
    </div>
  );
}

export default function CreateLiveClass() {
  const [page, setPage] = useState(0);
  /* console.log(page); */

  // make states for all steps here and pass as props to child components

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [topics, setTopics] = useState("");
  const [session, setSession] = useState(
    "I want to offer a fee for my sessions"
  );
  const [welcomeMessage, setWelcomeMessage] = useState("");
  /*  const [profileImage, setProfileImage] = useState(null); */
  const [liveClassBgImage, setLiveClassBgImage] = useState(null);
  /* console.log(profileImage, "profile img"); */
  console.log(liveClassBgImage, "class img");
  // all data
  const [formData, setFormData] = useState({});
  /* console.log(formData); */
  // dispatch obj with all states to reducer + took the UPD obj from context

  const { dispatch, creatorFormData } = useContext(PlatformContext);
  console.log(creatorFormData, "from PlatformContext");

  console.log("This is page ", page); // reflect to render Steps, page 6 its finish

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleAddDataToForm() {
    setPage(page + 1);

    const mentorData = {
      name,
      surname,
      linkedinLink,
      instagramLink,
      job,
      company,
      category,
      about,
      topics,
      session,
      welcomeMessage,
      /* profileImage, */
      liveClassBgImage,
    };

    setFormData(mentorData);

    /* console.log(mentorData); */
    console.log("I am handleAddDataToForm and I am calling");
  }

  async function handleSubmit() {
    setPage(page + 1);
    console.log("Calling handleSubmit");

    const newFormData = {
      ...formData,
      /*      profileImage, */
      liveClassBgImage,
    };
    console.log(newFormData);

    // dispatch obj with all states to reducer + took the UPD obj from context
    dispatch({ type: "GET_CREATOR-FORM-DATA", payload: newFormData });

    // Store image in firebase

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();

        const fileName = `${auth.currentUser.uid}-${
          image?.name
        }-${crypto.randomUUID()}`;

        const storageRef = ref(storage, "images/" + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            // eslint-disable-next-line default-case
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };
    /* const imgUrl = await storeImage(newFormData.profileImage); */
    const imgUrl = await storeImage(newFormData.liveClassBgImage);
    /*  const imgUrl = storeImage(mentorData.profileImage); */
    console.log(imgUrl);

    // send to Firebase as new collection with new docs

    const docRef = collection(db, "liveClassesCreationApplications");

    const updatedFormData = {
      ...newFormData,
      timestamp: serverTimestamp(),
    };
    /* delete updatedFormData.profileImage */
    delete updatedFormData.liveClassBgImage;

    await addDoc(docRef, updatedFormData);
  }

  function conditionalComponent() {
    if (page === 0) {
      return (
        <FirstStep
          name={name}
          surname={surname}
          linkedinLink={linkedinLink}
          instagramLink={instagramLink}
          onChangeName={setName}
          onChangeSurname={setSurname}
          onChangeLinkedinLink={setLinkedinLink}
          onChangeInstagramLink={setInstagramLink}
        />
      );
    }

    if (page === 1) {
      return (
        <SecondStep
          job={job}
          company={company}
          onChangeJob={setJob}
          onChangeCompany={setCompany}
        />
      );
    }

    if (page === 2) {
      return (
        <ThirdStep
          category={category}
          about={about}
          topic={topics}
          onChangeAbout={setAbout}
          onChangeCategory={setCategory}
          onChangeTopics={setTopics}
        />
      );
    }

    if (page === 3) {
      return <FourthStep session={session} onChangeSession={setSession} />;
    }

    if (page === 4) {
      return (
        <FiveStep
          welcomeMessage={welcomeMessage}
          onChangeWelcomeMessage={setWelcomeMessage}
        />
      );
    }

    if (page === 5) {
      return (
        <SixStep
          /* onChangeProfileImage={setProfileImage} */
          onChangeLiveClassImage={setLiveClassBgImage}
          handleSubmit={handleSubmit}
        />
      );
    }

    if (page === 6) {
      return (
        <div className="create-live-class__messages-after-submit">
          <p className="create-live-class__main-message-after-submit">
            Congrats!🎉🎉🎉 You successfully submitted your application!
          </p>
          <p className="create-live-class__second-message-after-submit">
            We are going to check it for validation and contact with you soon!
          </p>
        </div>
      );
    }
  }
  return (
    <div>
      {conditionalComponent()}

      <div className="create-live-class__buttons">
        {page > 0 && page < 6 && (
          <div className="create-live-class__button-box-left">
            <button
              className="create-live-class__button button"
              onClick={() => setPage(page - 1)}
            >
              Back
            </button>
          </div>
        )}

        <div className="create-live-class__button-box-right">
          {page === 6 ? null : (
            <button
              className="create-live-class__button button"
              onClick={() => {
                page === 5 ? handleSubmit() : handleAddDataToForm();
              }}
            >
              {page === 0 ||
              page === 1 ||
              page === 2 ||
              page === 3 ||
              page === 4
                ? "Next"
                : "Create live class"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
