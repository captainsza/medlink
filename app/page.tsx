"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [theme, setTheme] = useState("light");
  
  // Theme toggle functionality
  useEffect(() => {
    // Check system preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(systemTheme ? "dark" : "light");
    
    // Apply theme
    if (systemTheme) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-10 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold">MedLink</span>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              )}
            </button>
            <a href="https://github.com/yourusername/MedLink" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="flex flex-col items-center text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                MedLink
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              AI-Powered Hospital Network Management System
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
              Revolutionizing healthcare delivery by connecting hospitals and streamlining resource management to improve patient care and optimize resource allocation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.a 
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
              </motion.a>
              <motion.a 
                className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="#project-overview"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-800/40 dark:to-purple-800/40 rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center text-sm font-medium bg-white/90 dark:bg-gray-800/90 p-3 rounded-md shadow">
                Platform UI preview coming soon!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Resource Management",
                description: "Monitor hospital assets like beds, equipment, and ventilators in real time.",
                icon: "📊"
              },
              {
                title: "Universal Patient Database",
                description: "Secure storage and easy access to patient histories across the network.",
                icon: "🔒"
              },
              {
                title: "AI Chatbot",
                description: "Rapid query resolution to support doctors in diagnostic and treatment processes.",
                icon: "🤖"
              },
              {
                title: "Inter-Hospital Alerts",
                description: "Automated notifications for resource sharing during emergencies.",
                icon: "🔔"
              },
              {
                title: "Maternal/Child Health Module",
                description: "Targeted support for frontline workers to improve health outcomes.",
                icon: "👨‍👩‍👧"
              },
              {
                title: "Offline Access",
                description: "Continuous functionality in low-connectivity environments.",
                icon: "📱"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="project-overview" className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Project Overview
          </motion.h2>
          
          <motion.div 
            className="prose dark:prose-invert max-w-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Problem Statement</h3>
            <p>Healthcare systems are burdened by:</p>
            <ul>
              <li><strong>Resource Constraints:</strong> Severe shortages in medical staff and equipment, especially in rural areas.</li>
              <li><strong>Delayed Diagnoses:</strong> Inefficient data access contributes to critical delays in patient care.</li>
              <li><strong>Low Scheme Awareness:</strong> Limited enrollment in healthcare insurance and government schemes due to complex processes.</li>
              <li><strong>Maternal and Child Health Challenges:</strong> Under-nutrition and delayed identification of high-risk pregnancies affecting vulnerable populations.</li>
            </ul>
            
            <h3>Our Solution</h3>
            <p>MedLink provides a holistic approach by integrating:</p>
            <ul>
              <li><strong>Universal Patient Database:</strong> A secure, centralized repository of patient records.</li>
              <li><strong>AI-Powered Chatbot:</strong> Immediate, accurate data retrieval and decision support powered by models like Llama 3.</li>
              <li><strong>Resource Management:</strong> Real-time tracking and updates of hospital resources to optimize capacity.</li>
              <li><strong>Inter-Hospital Collaboration:</strong> Automated alerts and notifications to enable resource sharing during shortages.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              "Next.js", "TypeScript", "Python", "MongoDB", "Prisma", "Llama 3"
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <p className="font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Project Status</h2>
            <p className="mb-4">MedLink is currently in development for the Pragati AI for Impact Hackathon 2025.</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
              <div className="bg-blue-600 h-2.5 rounded-full w-[30%]"></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Development Progress: 30%</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">MedLink - Developed by Team QUBITRULES</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
