import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white pt-12">
      {/* Divider Line */}
      <hr className="border-t border-white opacity-30 w-[90%] mx-auto mb-8" />

      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-10 md:flex-row justify-between items-start text-center md:text-left">
        {/* Logo & Tagline */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
            Kiran Bukhari
          </h2>
          <p className="mt-2 text-white text-opacity-90">
            Crafting intuitive and modern web experiences with clean code and creative design.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white text-opacity-90">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect with Me
          </h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-white">
            <a href="https://github.com/KiranB-25" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-yellow-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kiran-bukhari-b967742b9?" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-yellow-200">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@example.com" aria-label="Email" className="hover:text-yellow-200">
              <FaEnvelope />
            </a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:text-yellow-200">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-white text-opacity-70 pb-6">
        © {new Date().getFullYear()} Kiran Bukhari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
