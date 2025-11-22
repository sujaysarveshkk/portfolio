import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tags = [] }) {
  return (
    <motion.div
      className="project-card h-full flex flex-col justify-between"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220 }}
    >
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-slate-300 mt-2 text-sm">{desc}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}