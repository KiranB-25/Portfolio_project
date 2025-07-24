const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Section Glowing Gradient Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-20 rounded-full blur-2xl animate-ping z-0" />

      <div className="relative max-w-5xl mx-auto z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-8 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-10 shadow-lg transition duration-500 hover:shadow-purple-500/30">
          {/* Profile Image */}
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-xl">
            <img
              src="/profile.jpg"
              alt="Syeda Kiran Bukhari"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a passionate and dedicated developer with a strong foundation in modern web technologies. My expertise includes JavaScript, React.js, Tailwind CSS, and various other tools that help me build beautiful and functional web applications.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              I am always eager to learn and grow, constantly exploring new technologies and improving my skills. Whether it's collaborating in a team or working independently, I thrive on solving challenges and delivering high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
