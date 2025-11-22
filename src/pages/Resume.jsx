import React from "react";
import resumePdf from "../assets/resume.pdf"; // <-- correct relative path

export default function Resume() {
  return (
    <div className="space-y-6 px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="text-slate-300">Download a PDF copy or view it below.</p>

      <div className="mt-6">
        <a
          href={resumePdf}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
      </div>

      <div className="mt-6 h-[700px]">
        <iframe
          title="resume"
          src={resumePdf}
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}