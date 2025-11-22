import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-300">Want to collaborate? Drop a message.</p>

      <ContactForm />

      <div className="mt-6 text-slate-400 text-sm space-y-1">
        <div>Email: sujaysarvesh7775@gmail.com</div>
        <div>Phone: +91 8668046547</div>
      </div>
    </div>
  );
}