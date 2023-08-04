//components
import NavBar from "./Navbar";
import Hero from "./Hero";
import Brands from "./Brands";
import Mentors from "./Mentors";

export default function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <main className="main">
        <Hero />
        <Brands />
        <Mentors />
      </main>

      <footer className="footer">footer</footer>
    </div>
  );
}
