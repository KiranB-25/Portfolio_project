import { motion } from "framer-motion"
import { useEffect, useState } from "react"


const images = [
  "/purple.jpg",
  "/pen.jpg",
  "/koituhai.jpg",
  "/pen.jpg",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 py-12 md:px-20 bg-gradient-to-br from-white via-gray-100 to-slate-200 dark:from-[#0f051d] dark:via-[#110827] dark:to-[#030014] transition-colors">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Kiran Bukhari</span>
          </h1>
          <p className="mt-6 text-lg text-gray-800 dark:text-gray-300">
            A passionate and results-driven <strong>Web Developer</strong> specializing in modern web technologies including React, JavaScript, Tailwind CSS, and responsive UI/UX. I love building elegant, accessible, and performant web applications.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => {
              const projectSection = document.getElementById("projects");
            if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth" });
         }
       }}
            >
              Explore My Work
            </button>
            <button
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => window.open("https://calendly.com/kiranbukhari588/discuss-your-project-with-kiran", "_blank")} // 🔁 Replace link
            >
              Book a Meeting With Kiran
            </button>
          </div>
        </div>

        {/* Right Side - Slideshow */}
        <div className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-xl border border-violet-500 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-[#0e0e2c] dark:via-[#14142e] dark:to-[#1f1f3a]">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
