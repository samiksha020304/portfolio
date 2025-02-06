import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white font-sans">
      {/* Header */}
      <motion.header
        className="fixed w-full top-0 bg-gray-800 bg-opacity-80 shadow-md z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-wide">
            <span className="text-accent">Samiksha</span>
          </h1>
          <nav className="space-x-8 text-lg font-medium">
            <a href="/" className="hover:text-accent transition">
              Home
            </a>
            <a href="/about" className="hover:text-accent transition">
              About
            </a>
            <a href="/projects" className="hover:text-accent transition">
              Projects
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Contact Section */}
      <motion.section
        className="flex flex-col justify-center items-center min-h-screen text-center pt-28 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl md:text-7xl font-bold leading-tight">
          Get in <span className="text-accent">Touch</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        <div className="mt-12 flex flex-col items-center space-y-6 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-200"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-200"
          ></textarea>
          <motion.button
            className="bg-accent py-3 px-8 rounded-lg font-bold text-black hover:bg-accent-dark shadow-lg transform transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Samiksha. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
