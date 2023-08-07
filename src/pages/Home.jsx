import Hero from "../components/Hero";
import Brands from "../components/Brands";
import MentorsList from "../components/MentorsList";
import HowItWorks from "../components/HowItWorks";
import ForWhom from "../components/ForWhom";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <MentorsList />
      <HowItWorks />
      <ForWhom />
      <Benefits />
      <Courses />
      <Reviews />
    </>
  );
}
