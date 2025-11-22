import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left column: text */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="text-sm text-slate-300">Hi, I'm</div>

        {/* Name – normal text, “water” effect only on hover */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          <span
            className="hero-name"
            data-text="Sujay Sarvesh K K"
          >
            Sujay Sarvesh K K
          </span>
        </h1>

        <p className="text-slate-300 max-w-xl mt-3">
          A 2025 graduate (B.E. Electronics &amp; Communication) building
          AI-driven systems and full-stack applications. I enjoy designing
          smooth, user-focused experiences and bridging hardware with software.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 mt-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="magnetic"
          >
            <Link to="/projects" className="btn">
              View Projects
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="magnetic"
          >
            <Link to="/resume" className="btn">
              View Resume
            </Link>
          </motion.div>
        </div>

        <div className="mt-4 text-sm text-slate-400">
          <span className="mr-2">📧</span> sujaysarvesh7775@gmail.com •
          <span className="ml-4">📞 +91 8668046547</span>
        </div>
      </motion.div>

      {/* Right column: profile card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card flex items-center gap-6">
          <img
            src={profileImg}
            alt="Sujay Sarvesh"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <div className="text-slate-300">Profile</div>
            <div className="text-xl font-semibold">Sujay Sarvesh</div>
            <div className="text-sm text-slate-400 mt-2">
              B.E. ECE — Sathyabama Institute of Science and Technology
            </div>

            <div className="mt-4 flex gap-2">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/sujaysarveshkk"
                target="_blank"
                rel="noreferrer"
                className="btn magnetic"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/sujay-sarvesh"
                target="_blank"
                rel="noreferrer"
                className="btn magnetic"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#1d4ed8,#2563eb)"
                }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}