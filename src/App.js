import React from "react";
import MainNavbar from "./Layout/Component/MainNavbar";
import HomePage from "./Layout/Pages/HomePage";
import AboutPage from "./Layout/Pages/AboutPage";
import TrackPage from "./Layout/Pages/TrackPage";
import BlogPage from "./Layout/Pages/BlogPage";
import ElementPage from "./Layout/Pages/ElementPage";
import ContactPage from "./Layout/Pages/ContactPage";
import MainFooter from "./Layout/Component/MainFooter";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
      <div className="main-app-content">
          <Router>
              <MainNavbar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/track"  element={<TrackPage />} />
                  <Route path="/blog"  element={<BlogPage />} />
                  <Route path="/element"  element={<ElementPage />} />
                  <Route path="/contact"  element={<ContactPage />} />
              </Routes>
              <MainFooter />
          </Router>
      </div>
  );
}
