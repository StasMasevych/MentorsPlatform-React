import imgJohn from "../../assets/avatars/john.png";
import imgAnna from "../../assets/avatars/anna.png";
import imgKim from "../../assets/avatars/kim.png";
import imgKelly from "../../assets/avatars/kelly.png";

export const initialMentors = [
  {
    id: crypto.randomUUID(),
    name: "John",
    job: "React developer",
    image: imgJohn,
  },
  {
    id: crypto.randomUUID(),
    name: "Kelly",
    job: "UI/UX designer",
    image: imgKelly,
  },
  {
    id: crypto.randomUUID(),
    name: "Kim",
    job: "Data scientist",
    image: imgKim,
  },
  {
    id: crypto.randomUUID(),
    name: "Anna",
    job: "Phyton developer",
    image: imgAnna,
  },
];
