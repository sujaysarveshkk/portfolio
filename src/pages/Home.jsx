import React from "react";
import profileImg from "../../profile.png";
import RotatingText from "../components/RotatingText";

const Home = () => {
  const featuredProjects = [
    {
      title: "Nut Sorting & Grading using AI",
      desc: "Designed an AI solution for automating nut quality control using computer vision and YOLOv8 with Python & hardware integration.",
      tags: ["Python", "YOLOv8", "OpenCV", "Embedded"],
    },
    {
      title: "Bluetooth-Controlled River Cleaning Rover",
      desc: "A rover prototype for environmental cleanup, controlled via Bluetooth (HC‑05) using Arduino.",
      tags: ["Arduino", "Bluetooth", "Robotics"],
    },
  ];

  return (
    <section className="bg-slate-950">
      {/* HERO SECTION */}
      <div className="container py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 md:items-stretch">
          {/* LEFT: Profile Card, full height of row */}
          <div className="order-1 flex">
            <div className="card flex flex-col md:flex-row md:items-center gap-6 w-full h-full">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-soft">
                <img
                  src={profileImg}
                  alt="Sujay Sarvesh"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                  Profile
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
                  Sujay Sarvesh K K
                </h2>
                <p className="text-sm text-slate-400 mb-2">
                  B.E. ECE — Sathyabama Institute of Science and Technology
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="https://github.com/sujaysarveshkk"
                    target="_blank"
                    rel="noreferrer"
                    className="btn text-sm px-4 py-2"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/sujay-sarvesh"
                    target="_blank"
                    rel="noreferrer"
                    className="btn text-sm px-4 py-2"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Intro Text, full height of row */}
          <div className="order-2 flex items-center">
            <div className="text-left w-full">
              <p className="text-slate-300 mb-2">Hi, I'm</p>

              {/* Rotating title in fixed-size gradient box */}
              <h1 className="mb-4">
                <RotatingText
                  texts={[
                    "Sujay Sarvesh K K",
                    "Junior Software Developer",
                    "Full‑Stack Developer",
                    "AI & Cloud Enthusiast",
                  ]}
                  mainClassName="
                    flex items-center
                    w-full max-w-[32rem]
                    px-6 py-3
                    rounded-2xl
                    bg-gradient-to-r from-indigo-600 to-blue-600
                    text-white
                    text-2xl md:text-3xl font-bold
                    whitespace-nowrap
                    leading-tight
                  "
                  splitLevelClassName="overflow-hidden"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h1>

              <p className="text-slate-300 mb-6 max-w-xl">
                A 2025 graduate (B.E. Electronics & Communication) building
                AI‑driven systems and full‑stack applications. I enjoy designing
                smooth, user‑focused experiences and bridging hardware with
                software.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#projects" className="btn">
                  View Projects
                </a>
                <a href="#resume" className="btn">
                  View Resume
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span>📧 sujaysarvesh7775@gmail.com</span>
                <span>📞 +91 8668046547</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <div className="container pb-16">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <p className="text-slate-400 mb-6">
          A quick snapshot of my key academic and hobby projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="text-lg font-semibold mb-2 text-slate-50">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;