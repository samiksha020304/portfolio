import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useState } from 'react';

const projects = [
  { title: "Project 1", image: "https://i.imgur.com/XtFxI7q.png" },
  { title: "Project 2", image: "https://i.imgur.com/e4OUvIR.png" },
  { title: "Project 3", image: "https://i.imgur.com/4yRgHr2.png" },
  { title: "Project 4", image: "https://i.imgur.com/SF4j3bK.png" },
  { title: "Project 5", image: "https://i.imgur.com/2OzG94j.png" },
  { title: "Project 6", image: "https://i.imgur.com/KhdXFUI.png" },
];

const fullStackSkills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "🚀" },
  { name: "Node.js", icon: "🌿" },
  { name: "Express.js", icon: "⚡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Android Development", icon: "📱" },
  { name: "React Native", icon: "📱" },
];

const dataScienceSkills = [
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗃️" },
  { name: "Data Science", icon: "📊" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Deep Learning", icon: "🧠" },
  { name: "NLP", icon: "🗣️" },
  { name: "Pandas", icon: "📜" },
  { name: "NumPy", icon: "🔢" },
  { name: "TensorFlow", icon: "🔍" },
  { name: "Scikit-Learn", icon: "📈" },
];

const experiences = [
  { role: "Data Science Graduate", company: "Symbiosis Skills And Professional University", duration: "Aug 2023 - Aug 2025", description: "Specialized in AI and ML." },
  { role: "Full-Stack Developer", company: "A3M NextGen", duration: "June 2023 - Aug 2023", description: "Building scalable web applications" },
  { role: "Data Science Intern", company: "RSL Solutions Pvt Ltd", duration: "June 2024 - Aug 2024", description: "Worked on ML models and data pipelines." },
  { role: "Data Science Intern", company: "HandyHomes", duration: "Jan 2025 - Present", description: "Working with ML and Python" },
];

export default function Home() {
  const [showCV, setShowCV] = useState(false);

  const particlesInit = async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Error initializing tsparticles:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black font-sans text-gray-200">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-screen overflow-hidden"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: { enable: true },
              move: {
                directions: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Samiksha Kathale
          </motion.h1>
          <motion.p
            className="text-xl mt-4 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Data Science Enthusiast | ML Engineer
          </motion.p>
        </div>
      </motion.section>
    
      {/* Projects Section */}
      <section className="py-16 bg-white">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Skills Section */}
       <section className="py-16 bg-white">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        {/* Full Stack & App Development Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Full Stack & App Development</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {fullStackSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="text-center text-3xl border border-gray-600 p-6 rounded-lg shadow-lg bg-gray-700 text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>{skill.icon}</div>
                <p className="mt-4 text-xl font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Data Science Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Data Science & Machine Learning</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {dataScienceSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="text-center text-3xl border border-gray-600 p-6 rounded-lg shadow-lg bg-gray-700 text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>{skill.icon}</div>
                <p className="mt-4 text-xl font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
         {/* Experience Section */}
<section className="py-16 bg-white text-white">
  <motion.h2 className="text-4xl font-bold text-center mb-10 text-black">
    Experience
  </motion.h2>

  {/* Grid Layout for Equal Card Sizes */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {experiences.map((exp, index) => (
      <motion.div 
        key={index} 
        className="flex flex-col justify-between p-6 bg-gray-800 rounded-lg shadow-lg h-[280px] w-full"
      >
        {/* Role & Company */}
        <div>
          <h3 className="text-2xl font-semibold">{exp.role} at {exp.company}</h3>
          <p className="text-sm text-gray-400">{exp.duration}</p>
        </div>

        {/* Description (Limited to prevent uneven sizes) */}
        <p className="text-sm text-gray-300 overflow-hidden line-clamp-3">
          {exp.description}
        </p>
      </motion.div>
    ))}
  </div>
</section>
 
    
     {/* Contact Section */}
<section className="py-16 bg-gray-900">
  <motion.h2
    className="text-4xl font-bold text-center mb-10"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Get in Touch
  </motion.h2>
  <div className="flex justify-center gap-8">
    {[
      { Icon: FaGithub, link: "https://github.com/samiksha020304" },
      { Icon: FaLinkedin, link: "https://www.linkedin.com/in/samiksha-kathale-a62a5a262/" },
      { Icon: FaEnvelope, link: "mailto:samiksha020304@gmail.com" },
    ].map(({ Icon, link }, index) => (
      <motion.a
        key={index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-5xl text-gray-300 hover:text-blue-500 transition-colors"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon />
      </motion.a>
    ))}
  </div>
</section>


      {/* Download CV Section */}
      <div className="text-center py-16 bg-white">
        {!showCV ? (
          <button
            onClick={() => setShowCV(true)}
            className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
          >
            Here is my CV
          </button>
        ) : (
          <a
            href="/Project-images/resume (1).pdf"
            download
            className="text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded"
          >
            Download CV
          </a>
        )}
      </div>

      {/* Footer */}
      <footer className="py-6 bg-white text-center text-white">
        <p>&copy; 2025 Samiksha Kathale. All rights reserved.</p>
      </footer>
    </div>
  );
}
