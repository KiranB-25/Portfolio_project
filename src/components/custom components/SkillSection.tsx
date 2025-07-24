const skills = [
  {
    title: "Front-End Development",
    description:
      "Crafting responsive, accessible, and dynamic user interfaces with React and TailwindCSS.",
  },
  {
    title: "Back-End Development",
    description:
      "Building RESTful APIs and backend logic using Node.js, Express, and MongoDB.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful interfaces with Figma and modern UI principles.",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing speed, accessibility, and SEO using tools like Lighthouse and Vite plugins.",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#0d1117] dark:to-[#0d1117]"
    >
      {/* Glowing background blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 opacity-20 rounded-full blur-2xl animate-ping z-0" />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-14 pb-2">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group [perspective:1000px] h-80 w-full"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 text-white rounded-xl shadow-xl flex items-center justify-center text-lg font-semibold backface-hidden">
                  {skill.title}
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-xl shadow-xl px-4 py-6 text-sm flex items-center justify-center backface-hidden [transform:rotateY(180deg)]">
                  {skill.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
