import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages

import Home from "../pages/Home";
import About from "../pages/About";
import BecomeMentor from "../pages/BecomeMentor";
import MentorApplication from "../pages/MentorApplication";
import CreateLiveClass from "../pages/CreateLiveClass";
import Mentor from "../pages/Mentor";
import AllMentors from "../pages/AllMentors";
import CategoryMentors from "../pages/CategoryMentors";
import LiveClass from "../pages/LiveClass";
import LiveClasses from "../pages/LiveClasses";
import Contact from "../pages/Contact";
import BookMentor from "../pages/BookMentor";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

//components
import NavBar from "./Navbar";
import Footer from "./Footer";

//context

import { PlatformProvider } from "../context/PlatformContext";
import { useAuthContext } from "../hooks/useAuthContext";

// глянути вкладени раути - для категорій менторів всредині всіх менторів

export default function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <PlatformProvider>
      <div className="wrapper">
        {authIsReady && (
          <BrowserRouter>
            <NavBar />
            <main className="main" style={{ overflowY: "hidden" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/become-mentor"
                  //element={<BecomeMentor />}
                  element={<BecomeMentor />}
                />
                <Route
                  path="/application"
                  element={
                    user ? <MentorApplication /> : <Navigate to="/login" />
                  }
                />
                <Route
                  exact
                  path="/create-live-class"
                  //element={<CreateLiveClass />}
                  element={
                    user ? <CreateLiveClass /> : <Navigate to="/login" />
                  }
                />

                <Route path="/mentor/:name" element={<Mentor />} />
                <Route
                  path="/mentor/:name/apply"
                  //element={<BookApplication />}
                  element={user ? <BookMentor /> : <Navigate to="/login" />}
                />
                <Route path="/mentors" element={<AllMentors />} />
                <Route
                  path="/mentors/categories/:category"
                  element={<CategoryMentors />}
                />
                <Route
                  path="/live-classes"
                  //element={<LiveClasses />}
                  element={user ? <LiveClasses /> : <Navigate to="/login" />}
                />

                <Route path="/live-class/:name" element={<LiveClass />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/login"
                  //element={<Login />}
                  element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                  path="/signup"
                  //element={<Signup />}
                  element={user ? <Navigate to="/" /> : <Signup />}
                />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </BrowserRouter>
        )}
      </div>
    </PlatformProvider>
  );
}
