// router/AppRouter.jsx

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Roadmap from "../pages/Roadmap";
import PhaseGuide from "../pages/PhaseGuide";
import Examples from "../pages/Examples";
import Templates from "../pages/Templates";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import About from "../pages/About";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/phase/:phaseId" element={<PhaseGuide />} />
      <Route path="/examples" element={<Examples />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}