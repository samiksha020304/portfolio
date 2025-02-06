import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-accent min-h-screen text-white font-sans relative">
      {/* Header */}
      <motion.header
        className="fixed w-full top-0 bg-opacity-90 bg-primary shadow-md z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold tracking-wide"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-accent">Samiksha</span>
          </motion.h1>
          <motion.nav
            className="space-x-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col justify-center items-center min-h-screen text-center pt-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Welcome to <span className="text-accent">My World</span>
        </h2>
        <motion.p
          className="mt-6 text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I craft unique web experiences with passion and creativity.
        </motion.p>
        <motion.button
          className="mt-10 bg-accent py-4 px-8 rounded-full text-lg font-bold shadow-lg hover:scale-105 hover:shadow-2xl transform transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/projects">Explore My Work</Link>
        </motion.button>
      </motion.section>
    </div>
  );
}