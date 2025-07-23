import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with React, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    liveLink: "https://yourportfolio.vercel.app",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-Commerce Store",
    description: "Modern e-commerce site with cart, checkout, and admin dashboard.",
    tags: ["React", "Redux", "Node.js"],
    liveLink: "https://ecommerce.vercel.app",
    githubLink: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog site with markdown support and content management.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    liveLink: "https://blog.vercel.app",
    githubLink: "https://github.com/yourusername/blog-platform",
  },
  {
    title: "Weather App",
    description: "Live weather tracking with OpenWeather API and animated UI.",
    tags: ["React", "API", "CSS Animations"],
    liveLink: "https://weatherapp.vercel.app",
    githubLink: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Task Manager",
    description: "Productivity tool to manage daily tasks with notifications.",
    tags: ["React", "Context API", "Firebase"],
    liveLink: "https://tasks.vercel.app",
    githubLink: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Chat App",
    description: "Real-time messaging app using Socket.io and Express backend.",
    tags: ["React", "Socket.io", "Node.js"],
    liveLink: "https://chatapp.vercel.app",
    githubLink: "https://github.com/yourusername/chat-app",
  },
  {
    title: "Crypto Dashboard",
    description: "Crypto price tracking dashboard with dynamic charts and APIs.",
    tags: ["React", "Chart.js", "CoinGecko API"],
    liveLink: "https://crypto.vercel.app",
    githubLink: "https://github.com/yourusername/crypto-dashboard",
  },
  {
    title: "AI Image Generator",
    description: "Create AI-generated images using OpenAI and Cloudinary.",
    tags: ["React", "OpenAI", "Node.js"],
    liveLink: "https://aigen.vercel.app",
    githubLink: "https://github.com/yourusername/ai-image-generator",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-[#0d1117] transition-colors"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#161b22] rounded-2xl p-6 shadow-lg border border-transparent hover:shadow-xl hover:scale-[1.03] hover:border-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all group"
            >
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition"
                  title="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
                  title="Vercel"
                >
                  <SiVercel size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
