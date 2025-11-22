import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await emailjs.send(
        "service_h6j8jfj",          // ✅ your SERVICE ID
        "template_gnqvtoi",         // ✅ your TEMPLATE ID
        {
          title: "Portfolio Contact", // for {{title}} in subject
          name: form.name,           // for {{name}}
          reply_to: form.email,      // for {{reply_to}}
          message: form.message,     // for {{message}}
        },
        "7ttMnA4ZvE1oBjg8I"          // ✅ your PUBLIC KEY
      );

      console.log("EmailJS success:", result.status, result.text);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <form
      className="card max-w-2xl mx-auto w-full space-y-4"
      onSubmit={sendEmail}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="message"
        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500"
        rows="6"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button className="btn w-full justify-center mt-2" type="submit">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="text-green-400 text-sm mt-3">
          Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div className="text-red-400 text-sm mt-3">
          Failed to send message. Check console for error details.
        </div>
      )}
    </form>
  );
}