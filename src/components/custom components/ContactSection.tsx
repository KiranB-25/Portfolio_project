import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-[#0d1117] transition-colors px-4 sm:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Contact Me
        </h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 shadow-xl space-y-6"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-white placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-white placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-white placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="text"
              placeholder="Your Address"
              className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-white placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white/30 dark:bg-black/30 text-white placeholder:text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              required
            />
          </div>

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
