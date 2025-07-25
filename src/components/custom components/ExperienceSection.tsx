import { motion } from "framer-motion";
import { FaCode, FaServer, FaPaintBrush, FaRocket } from "react-icons/fa";


const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 60,
  },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: 0.8,
      delay: i * 0.2,
    },
  }),
};

const experiences = [
  {
    title: "Front-End Development",
    description:
      "Building responsive, pixel-perfect UIs using React, Tailwind CSS, and component-driven design.",
    icon: <FaCode className="text-4xl text-gradient mb-4" />,
  },
  {
    title: "Back-End Integration",
    description:
      "Seamlessly integrating APIs and managing backend logic using Node.js and Express.",
    icon: <FaServer className="text-4xl text-gradient mb-4" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting user-first experiences with modern design tools and usability principles.",
    icon: <FaPaintBrush className="text-4xl text-gradient mb-4" />,
  },
  {
    title: "Deployment & DevOps",
    description:
      "Deploying full-stack apps with Vercel, Netlify, and optimizing performance and CI/CD.",
    icon: <FaRocket className="text-4xl text-gradient mb-4" />,
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#0d1117] dark:to-[#0d1117]"
    >
      {/* Glowing Background Elements */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 opacity-20 rounded-full blur-2xl animate-ping z-0" />

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center z-10">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 pb-2">
          My Experience
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-6 max-w-[320px] mx-auto shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              custom={i}
            >
              <div className="flex flex-col items-center justify-center h-full">
                {exp.icon}
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
