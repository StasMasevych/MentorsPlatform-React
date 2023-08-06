import courseReact from "../../assets/courses images/class_react.png";
import courseMicrfrontend from "../../assets/courses images/class_react2.png";
import courseChatGPT from "../../assets/courses images/class_chatgpt.png";
import courseJava from "../../assets/courses images/class_java.png";
import courseNetflix from "../../assets/courses images/class_netflix.png";
import courseInsta from "../../assets/courses images/class_insta.png";
import courseFlutter from "../../assets/courses images/class_flutter.png";
import courseFigma from "../../assets/courses images/class_figma.png";

export const courses = [
  {
    id: crypto.randomUUID(),
    name: "React course with cool projects",
    image: courseReact,
    author: "Peter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    duration: "1 month",
    payment: 200 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "ChatGPT masterclass with full instruction to use",
    image: courseChatGPT,
    author: "Sam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    duration: "4 hours",
    payment: 500 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Building Netflix clone with React",
    image: courseNetflix,
    author: "Ken",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    duration: "5 hours",
    payment: 150 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Building Telegram Bot with Java",
    image: courseJava,
    author: "Alex",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    duration: "4 hours",
    payment: 150 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Deep dive into mecrofrontend with React",
    image: courseMicrfrontend,
    author: "Andriy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "intermediate",
    startDate: new Date().toLocaleDateString(),
    duration: "3 hours",
    payment: 200 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Build mobile apps fast with Flutter Flow ",
    image: courseFlutter,
    author: "Jack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    duration: "5 hours",
    payment: 150 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Build Instagram clone authentification",
    image: courseInsta,
    author: "Kelly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    duration: "6 hours",
    payment: 250 + " UAH",
  },
  {
    id: crypto.randomUUID(),
    name: "Become Figma superhero masterclass",
    image: courseFigma,
    author: "Deniel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    level: "beginner",
    startDate: new Date().toLocaleDateString(),
    duration: "6 hours",
    payment: 250 + " UAH",
  },
];
