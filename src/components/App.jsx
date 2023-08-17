import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages

import Home from "../pages/Home";
import About from "../pages/About";
import BecomeMentor from "../pages/BecomeMentor";
import CreateLiveClass from "../pages/CreateLiveClass";
import Mentor from "../pages/Mentor";
import AllMentors from "../pages/AllMentors";
import CategoryMentors from "../pages/CategoryMentors";
import LiveClass from "../pages/LiveClass";
import LiveClasses from "../pages/LiveClasses";
import Contact from "../pages/Contact";
import BookApplication from "../pages/BookApplication";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

//components
import NavBar from "./Navbar";
import Footer from "./Footer";

//context

import { PlatformProvider } from "../context/PlatformContext";

// глянути вкладени раути - для категорій менторів всредині всіх менторів

export default function App() {
  return (
    <PlatformProvider>
      <div className="wrapper">
        <BrowserRouter>
          <NavBar />

          <main className="main" style={{ overflowY: "hidden" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/become-mentor" element={<BecomeMentor />} />
              <Route path="/create-live-class" element={<CreateLiveClass />} />
              <Route path="/mentor/:name" element={<Mentor />} />
              <Route path="/mentor/:name/apply" element={<BookApplication />} />
              <Route path="/mentors" element={<AllMentors />} />
              <Route
                path="/mentors/categories/:category"
                element={<CategoryMentors />}
              />
              <Route path="/live-classes" element={<LiveClasses />} />
              <Route path="/live-class/:name" element={<LiveClass />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={<Login />}
                /* element={user ? <Navigate to="/"/> : <Login/>} */
              />
              <Route
                path="/signup"
                element={<Signup />}
                /* element={user ? <Navigate to="/"/> : <Login/>} */
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    </PlatformProvider>
  );
}
