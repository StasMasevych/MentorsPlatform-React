import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages

import Home from "../pages/Home";
import About from "../pages/About";
import BecomeMentor from "../pages/BecomeMentor";
import CreateLiveClass from "../pages/CreateLiveClass";
import Mentor from "../pages/Mentor";
import Mentors from "../pages/Mentors";
import LiveClass from "../pages/LiveClass";
import LiveClasses from "../pages/LiveClasses";
import NotFound from "../pages/NotFound";

//components
import NavBar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            <Route path="/create-live-class" element={<CreateLiveClass />} />
            <Route path="/mentors/:id" element={<Mentor />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/live-class:id" element={<LiveClass />} />
            <Route path="/live-classes" element={<LiveClasses />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
