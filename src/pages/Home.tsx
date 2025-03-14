import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="/images/image_frontpage.jpg"
          alt="Front Page"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Master Algorithms & Data Structures</h1>
            <p className="text-xl mb-8">Interactive learning platform for aspiring developers</p>
            <Link to="/learn" className="btn-primary text-lg py-3 px-6">Start Learning</Link> {/* Increased button size */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Choose Your Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap */}
            <motion.div
              whileHover={{ scale: 1.1 }} // Slightly increased scale effect
              className="card p-10" // Increased padding for larger card size
            >
              <GraduationCap className="w-16 h-16 text-[var(--primary-100)] mb-4" /> {/* Increased icon size */}
              <h3 className="text-xl font-bold mb-2">Understand Algorithms</h3>
              <p className="text-[var(--text-200)] mb-4">Learn through interactive visualizations and video tutorials</p>
              <Link to="/learn" className="text-[var(--primary-100)] hover:text-[var(--primary-200)]">Get Started →</Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="card p-10"
            >
              <Code2 className="w-16 h-16 text-[var(--accent-100)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Practice Coding</h3>
              <p className="text-[var(--text-200)] mb-4">Test your knowledge with hands-on coding exercises</p>
              <Link to="/practice" className="text-[var(--primary-100)] hover:text-[var(--primary-200)]">Start Practicing →</Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="card p-10"
            >
              <MessageSquare className="w-16 h-16 text-[var(--primary-200)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Ask AI Assistant</h3>
              <p className="text-[var(--text-200)] mb-4">Get personalized help from our AI tutor</p>
              <Link to="/ask-ai" className="text-[var(--primary-100)] hover:text-[var(--primary-200)]">Chat Now →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="mb-8">Have questions? Reach out to us for more information.</p>
          <Link to="/contact" className="btn-primary text-lg py-3 px-6">Get in Touch</Link> {/* Button styled as above */}
        </div>
      </section>
    </div>
  );
};

export default Home;
