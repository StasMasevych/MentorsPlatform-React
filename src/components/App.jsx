//components
import NavBar from "./Navbar";
import Hero from "./Hero";
import Brands from "./Brands";
import Mentors from "./Mentors";
import Benefits from "./Benefits";
import Reviews from "./Reviews";
import Courses from "./Courses";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <main className="main">
        <Hero />
        <Brands />
        <Mentors />
        <Benefits />
        <Courses />

        <Reviews />
      </main>

      <Footer />
    </div>
  );
}
