import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const categories = ["All", "Programming", "AI/ML", "Tools", "Hardware"];

  const skills = [
    // Programming
    { name: "Python", level: 85, cat: "Programming", desc: "Used for OpenCV, YOLO, data processing & automation." },
    { name: "Java", level: 70, cat: "Programming", desc: "Experience in OOP, DSA and backend basics." },
    { name: "C Language", level: 75, cat: "Programming", desc: "Used for embedded microcontroller logic." },
    { name: "JavaScript", level: 65, cat: "Programming", desc: "React, frontend basics, DOM manipulation." },

    // AI / ML
    { name: "YOLOv8", level: 80, cat: "AI/ML", desc: "Used for nut sorting & image classification tasks." },
    { name: "OpenCV", level: 70, cat: "AI/ML", desc: "Image preprocessing, contouring, thresholding, etc." },
    { name: "Deep Learning Basics", level: 60, cat: "AI/ML", desc: "Understanding CNNs, models, inference flow." },

    // Tools
    { name: "Git & GitHub", level: 85, cat: "Tools", desc: "Version control, branches, GitHub deployment." },
    { name: "VS Code", level: 90, cat: "Tools", desc: "Debugging, extensions, productivity workflows." },
    { name: "SQL", level: 65, cat: "Tools", desc: "Basics of queries, CRUD, joins, normalization." },

    // Hardware
    { name: "Arduino", level: 80, cat: "Hardware", desc: "Used for Rover & embedded control systems." },
    { name: "HC-05 Bluetooth", level: 75, cat: "Hardware", desc: "Bluetooth communication & robotics control." }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedSkill, setExpandedSkill] = useState(null);

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.cat === activeCategory);

  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Interactive Skills</h1>
      <p className="text-slate-300">
        Click, hover and explore my capabilities interactively.
      </p>

      {/* Category Filters */}
      <div className="flex gap-2 flex-wrap mt-4">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeCategory === cat
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <AnimatePresence>
          {filtered.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 150 }}
              className="card cursor-pointer h-full flex flex-col justify-between"
              onClick={() =>
                setExpandedSkill(expandedSkill === s.name ? null : s.name)
              }
            >
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{s.name}</h3>
                  <span className="text-sm text-blue-400">{s.cat}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-3 rounded-full mt-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 0.6 }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg,#4f46e5,#2563eb,#3b82f6)",
                    }}
                  ></motion.div>
                </div>
              </div>

              {/* Expandable Description */}
              <AnimatePresence>
                {expandedSkill === s.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 text-slate-300 text-sm"
                  >
                    {s.desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}