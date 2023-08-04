//components
import NavBar from "./Navbar";
import Hero from "./Hero";
import Brands from "./Brands";
import Mentors from "./Mentors";
import Benefits from "./Benefits";

export default function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <main className="main">
        <Hero />
        <Brands />
        <Mentors />
        <Benefits />
      </main>

      <footer className="footer">footer</footer>
    </div>
  );
}
