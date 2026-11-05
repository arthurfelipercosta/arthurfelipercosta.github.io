// src/App.tsx

import { useState, useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import "./styles/global.css";

function AppContent() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header
        language={language}
        onToggleLanguage={() => setLanguage((current) => current === "pt" ? "en" : "pt")}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/projects/:id" element={<Project language={language} />} />
          <Route path="/resume" element={<Resume language={language} />} />
          <Route path="*" element={<section className="section"><h1>404</h1></section>} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Arthur Costa</footer>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}