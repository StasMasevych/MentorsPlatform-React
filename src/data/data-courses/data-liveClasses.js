import courseReact from "../../assets/courses images/class_react.png";
import courseMicrfrontend from "../../assets/courses images/class_react2.png";
import courseChatGPT from "../../assets/courses images/class_chatgpt.png";
import courseJava from "../../assets/courses images/class_java.png";
import courseNetflix from "../../assets/courses images/class_netflix.png";
import courseInsta from "../../assets/courses images/class_insta.png";
import courseFlutter from "../../assets/courses images/class_flutter.png";
import courseFigma from "../../assets/courses images/class_figma.png";

export const liveClassesArray = [
  {
    id: crypto.randomUUID(),
    name: "React course with cool projects",
    category: "React",
    image: courseReact,
    author: "Peter",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "2 hours",
    payment: 200 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "ChatGPT masterclass with full instruction to use",
    category: "ChatGPT",
    image: courseChatGPT,
    author: "Sam",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "4 hours",
    payment: 500 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Building Netflix clone with React",
    category: "React",
    image: courseNetflix,
    author: "Ken",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "5 hours",
    payment: 150 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Building Telegram Bot with Java",
    category: "Java",
    image: courseJava,
    author: "Alex",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "4 hours",
    payment: 150 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Deep dive into mecrofrontend with React",
    category: "React",
    image: courseMicrfrontend,
    author: "Andriy",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "intermediate",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "3 hours",
    payment: 200 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Build Instagram clone authentification",
    category: "React",
    image: courseInsta,
    author: "Kelly",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "6 hours",
    payment: 250 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Become Figma superhero masterclass",
    category: "Figma",
    image: courseFigma,
    author: "Deniel",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "6 hours",
    payment: 350 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Build Flutter app",
    category: "Flutter",
    image: courseFlutter,
    author: "Devid",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    time: "19:00 EEST",
    duration: "6 hours",
    payment: 750 + " UAH",
  },
];
