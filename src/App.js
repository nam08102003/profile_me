import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./views/Home";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutDefault children={<Home />} />} />
        <Route
          path="/aboutme"
          element={<LayoutDefault children={<AboutMe />} />}
        />
        <Route
          path="/education"
          element={<LayoutDefault children={<Education />} />}
        />
        <Route
          path="/project"
          element={<LayoutDefault children={<Project />} />}
        />
        <Route path="/skill" element={<LayoutDefault children={<Skill />} />} />
      </Routes>
    </div>
  );
}

export default App;
