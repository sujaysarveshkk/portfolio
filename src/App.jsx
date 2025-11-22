import React from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navbar only at the top (NOT fixed) */}
      <Navbar />

      {/* Main scroll area */}
      <main className="flex-1 pb-16">
        {/* HOME */}
        <section id="home" className="pt-8">
          <Home />
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="border-t border-slate-800 pt-16 mt-8"
        >
          <Skills />
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-t border-slate-800 pt-16 mt-8"
        >
          <Projects />
        </section>

        {/* RESUME */}
        <section
          id="resume"
          className="border-t border-slate-800 pt-16 mt-8"
        >
          <Resume />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-slate-800 pt-16 mt-8"
        >
          <Contact />
        </section>
      </main>

      {/* Footer at the very bottom */}
      <Footer />
    </div>
  );
}

export default App;