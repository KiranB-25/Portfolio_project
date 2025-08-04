"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-[#0d1117] transition-colors px-4 sm:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Contact Me
        </h2>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 text-green-700 bg-green-100 dark:bg-green-900/40 dark:text-green-300 px-6 py-3 rounded-xl border border-green-300 dark:border-green-700"
            >
              🎉 Message sent successfully!
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 text-red-700 bg-red-100 dark:bg-red-900/40 dark:text-red-300 px-6 py-3 rounded-xl border border-red-300 dark:border-red-700"
            >
              ❌ Something went wrong. Please try again.
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 shadow-xl space-y-6"
        >
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <input type="hidden" name="subject" value="New Contact Message" />
          <input type="hidden" name="replyto" value="email" />
          <input type="hidden" name="auto_response" value="Thanks! We'll get back to you soon." />
          <input type="hidden" name="template" value="box" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            pattern="^\+?\d{10,15}$"
            title="Enter a valid phone number"
            required
            className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            required
            className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
