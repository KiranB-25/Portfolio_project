const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 bg-gradient-to-b from-white to-slate-100 dark:from-[#0d1117] dark:to-[#0d1117] transition-colors">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/devpic.jpg" // Place this image inside public/
            alt="Female Web Developer"
            className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-800 dark:text-white">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            I'm a passionate and detail-oriented <strong>Web Developer</strong> with a strong foundation in both front-end and back-end technologies. I specialize in building responsive, user-centric, and aesthetically pleasing websites using modern stacks like React, TailwindCSS, and Vite.
          </p>
          <p className="text-lg leading-relaxed">
            With hands-on experience in building real-world projects and portfolios, I combine design thinking with clean code practices. I believe in continuous learning, clean UI/UX, and delivering high-performance web experiences that align with users' needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
