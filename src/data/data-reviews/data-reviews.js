import img1 from "../../assets/avatars/anna.png";
import img2 from "../../assets/avatars/john.png";
import img3 from "../../assets/avatars/kim.png";
import img4 from "../../assets/avatars/bravos.png";
import img5 from "../../assets/avatars/kelly.png";
import img6 from "../../assets/avatars/me.jpg";

// add custom photos and texts

export const reviews = [
  {
    id: crypto.randomUUID(),
    authorName: "Andriy",
    authorJob: "Freelance web-developer",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: crypto.randomUUID(),
    authorName: "Anna",
    authorJob: "junior UX/UI designer in X company",
    image: img2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: crypto.randomUUID(),
    authorName: "Kim",
    authorJob: "junior Phyton designer in X company",
    image: img3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: crypto.randomUUID(),
    authorName: "Bravos",
    authorJob: "middle React developer in X company",
    image: img4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: crypto.randomUUID(),
    authorName: "Sara",
    authorJob: "middle project manager in X company",
    image: img5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: crypto.randomUUID(),
    authorName: "Stas",
    authorJob: "founder of startup",
    image: img6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
