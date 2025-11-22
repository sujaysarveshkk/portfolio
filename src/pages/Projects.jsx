import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const allProjects = [
    {
      title: "Nut Sorting & Grading using AI",
      desc: "AI-based nut quality detection using YOLOv8, Python, and image processing. Integrated with microcontroller for sorting.",
      tags: ["YOLOv8", "Python", "OpenCV"],
    },
    {
      title: "River Cleaning Rover",
      desc: "Bluetooth-controlled rover for cleaning rivers. Used HC-05, Arduino, custom frame and collection mechanism.",
      tags: ["Arduino", "HC-05", "Robotics"],
    },
    {
      title: "Course Advisor Bot",
      desc: "Built using IBM Cloud during Edunet Foundation internship. Helps students choose suitable courses based on interests and goals.",
      tags: ["IBM Cloud", "Chatbot", "Edunet Foundation"],
    },
  ];

  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-slate-300 max-w-3xl">
        A collection of academic and hobby projects demonstrating hardware‑software
        integration, AI/ML skills, and practical problem solving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {allProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}