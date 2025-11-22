import React from "react";

export default function Footer() {
  return (
    <footer className="bg-card/60 mt-12">
      <div className="container py-6 text-center text-slate-400 text-sm">
        <div className="mb-3">© {new Date().getFullYear()} Sujay Sarvesh</div>
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/sujaysarveshkk" className="social-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
            {/* simple svg github */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.9 3.17 9.07 7.57 10.54.55.1.75-.24.75-.53 0-.26-.01-1-.02-1.96-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.16 1.71 1.16.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.47-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.19 1.14-2.97-.11-.28-.5-1.4.11-2.92 0 0 .93-.3 3.05 1.13.89-.25 1.84-.37 2.79-.37.95 0 1.9.12 2.79.37 2.12-1.43 3.05-1.13 3.05-1.13.61 1.52.22 2.64.11 2.92.71.78 1.14 1.76 1.14 2.97 0 4.25-2.6 5.18-5.07 5.46.4.35.76 1.04.76 2.1 0 1.52-.01 2.75-.01 3.12 0 .29.19.64.76.53C19.08 20.84 22.25 16.67 22.25 11.77 22.25 5.48 17.27.5 12 .5z"/></svg>
          </a>
          <a href="https://linkedin.com/in/sujay-sarvesh" className="social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H17.2V14.65c0-1.367-.028-3.126-1.905-3.126-1.905 0-2.197 1.49-2.197 3.02v5.908H9.012V9h3.068v1.56h.043c.427-.81 1.47-1.66 3.02-1.66 3.232 0 3.828 2.126 3.828 4.89v6.163zM5.337 7.433a1.77 1.77 0 1 1 0-3.54 1.77 1.77 0 0 1 0 3.54zM6.841 20.452H3.833V9h3.008v11.452z"/></svg>
          </a>
        </div>
        <div className="mt-3 text-xs text-slate-500">Built with React, Vite, Tailwind & Framer Motion</div>
      </div>
    </footer>
  );
}
