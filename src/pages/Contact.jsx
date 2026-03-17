import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Send } from "lucide-react";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const payload = new FormData();
      payload.append("name", formData.fullName);
      payload.append("email", formData.email);
      payload.append("subject", formData.subject);
      payload.append("message", formData.message);
      payload.append("_subject", formData.subject);
      payload.append("_captcha", "false");
      payload.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ajax/kishore22oct@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Unable to send message.");
      }

      setSubmitStatus({
        type: "success",
        message: "Thanks! your mail was submitted sucessfully",
      });
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Submission failed. Please check the FormSubmit verification email and click the latest activation link, then try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative py-20 text-center overflow-hidden"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute top-10 left-16 w-56 h-56 bg-violet-500/25 blur-3xl rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-fuchsia-500/25 blur-3xl rounded-full hidden md:block"></div>

      <div className="section-wrap">
        <div className="text-center mb-10">
          <div className="section-kicker mb-5"><span className="royal-glow-dot" />Contact</div>
          <motion.h2
            className="section-title text-3xl md:text-4xl font-extrabold mb-6 tracking-wide"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            Let’s <span className="section-accent">Connect</span>
          </motion.h2>
          <div className="royal-divider" />

          <motion.p
            className="section-subtitle text-base md:text-lg mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.12, duration: 0.4 }}
          >
            Share your requirements and I will respond through email with clarity and professionalism.
          </motion.p>
        </div>

        <motion.div
          className="mb-10"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 md:p-8 text-left space-y-5 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="meta-label mb-2 block">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl px-4 py-3 bg-violet-950/35 border border-violet-300/20 text-violet-50 placeholder:text-violet-200/45 outline-none focus:border-violet-300/60"
                  placeholder="Enter your full name"
                />
              </label>

              <label className="block">
                <span className="meta-label mb-2 block">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl px-4 py-3 bg-violet-950/35 border border-violet-300/20 text-violet-50 placeholder:text-violet-200/45 outline-none focus:border-violet-300/60"
                  placeholder="name@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="meta-label mb-2 block">Email Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-violet-950/35 border border-violet-300/20 text-violet-50 placeholder:text-violet-200/45 outline-none focus:border-violet-300/60"
                placeholder="Add your subject"
              />
            </label>

            <label className="block">
              <span className="meta-label mb-2 block">Your Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl px-4 py-3 bg-violet-950/35 border border-violet-300/20 text-violet-50 placeholder:text-violet-200/45 outline-none focus:border-violet-300/60 resize-y"
                placeholder="Write your message here"
              />
            </label>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-violet-100/65 text-sm">
                Submit the form to send your message directly to my inbox.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-neon inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Mail"}
              </button>
            </div>

            {submitStatus.message ? (
              <p
                role="status"
                className={`text-sm font-medium ${
                  submitStatus.type === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {submitStatus.message}
              </p>
            ) : null}
          </form>
        </motion.div>

        <motion.a
          href="https://www.linkedin.com/in/kishore-k-0717542a1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, boxShadow: "0 0 18px #8b5cf6" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 btn-neon"
        >
          <Linkedin size={22} />
          Connect on LinkedIn
        </motion.a>
      </div>
    </motion.section>
  );
}