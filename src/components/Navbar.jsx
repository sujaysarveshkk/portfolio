import React, { useState } from "react";
import avatarImg from "../../profile.png";          // your photo at project root
import resumePdf from "../assets/resume.pdf";       // same PDF as Resume.jsx

const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-slate-950/95 border-b border-slate-900">
      <div className="container flex items-center gap-6 py-3">
        {/* LEFT: avatar + name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-700">
            <img
              src={avatarImg}
              alt="Sujay Sarvesh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-100">
              Sujay Sarvesh
            </p>
            <p className="text-xs text-slate-400">
              Junior Software Developer
            </p>
          </div>
        </div>

        {/* CENTER: nav links */}
        <nav className="hidden md:flex flex-1 justify-center gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={
                active === link.id
                  ? "px-4 py-2 rounded-full bg-blue-600 text-white shadow-soft"
                  : "px-2 py-1 text-slate-300 hover:text-blue-400 transition-colors"
              }
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* RIGHT: Download CV */}
        <div className="ml-auto">
          <a
            href={resumePdf}
            download
            className="btn rounded-2xl px-5 py-2 text-sm font-semibold"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;