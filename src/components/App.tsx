import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages//ProjectDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Overview from "../pages/Overview";
import Skills from "../pages/Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="projects/:title" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}>
            <Route index element={<Overview />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
