"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ArchitectureSection() {
  const architectureRef = useRef(null);
  const isArchitectureInView = useInView(architectureRef, { once: true, amount: 0.2 });

  return (
    <section id="architecture" ref={architectureRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-70 dark:opacity-20 -z-10">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-teal-50 dark:bg-teal-900/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/4 h-1/2 bg-cyan-50 dark:bg-cyan-900/20 blur-3xl rounded-full" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isArchitectureInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isArchitectureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
          >
            Architecture
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Microservices Design</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            MedLink utilizes a scalable microservices architecture to ensure flexibility and resilience in healthcare settings.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative max-w-5xl mx-auto backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isArchitectureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-sm font-medium">MedLink System Architecture</p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-3 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 mb-6">
                <p className="text-center font-medium text-gray-700 dark:text-gray-300">Front-End Layer</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <motion.div 
                    className="px-4 py-2 bg-gray-100/80 dark:bg-gray-800/80 rounded shadow-sm backdrop-blur-md text-sm"
                    whileHover={{ y: -2 }}
                  >
                    Next.js
                  </motion.div>
                  <motion.div 
                    className="px-4 py-2 bg-gray-100/80 dark:bg-gray-800/80 rounded shadow-sm backdrop-blur-md text-sm"
                    whileHover={{ y: -2 }}
                  >
                    TypeScript
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="p-4 border border-teal-200 dark:border-teal-900/50 rounded-xl bg-teal-50/80 dark:bg-teal-900/20 backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-medium mb-2 text-teal-700 dark:text-teal-400">Resource Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tracks hospital resources in real-time</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-cyan-200 dark:border-cyan-900/50 rounded-xl bg-cyan-50/80 dark:bg-cyan-900/20 backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-medium mb-2 text-cyan-700 dark:text-cyan-400">Patient Data Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Manages secure patient records</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-green-200 dark:border-green-900/50 rounded-xl bg-green-50/80 dark:bg-green-900/20 backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-medium mb-2 text-green-700 dark:text-green-400">AI Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Powers chatbot and diagnostics</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-red-200 dark:border-red-900/50 rounded-xl bg-red-50/80 dark:bg-red-900/20 backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-medium mb-2 text-red-700 dark:text-red-400">Collaboration Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Facilitates inter-hospital alerts</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-amber-200 dark:border-amber-900/50 rounded-xl bg-amber-50/80 dark:bg-amber-900/20 backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-medium mb-2 text-amber-700 dark:text-amber-400">Maternal/Child Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Specialized health analytics</p>
              </motion.div>
              
              <motion.div 
                className="p-4 border border-indigo-200 dark:border-indigo-900/50 rounded-xl bg-indigo-50/80 dark:bg-indigo-900/20 backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <p className="font-medium mb-2 text-indigo-700 dark:text-indigo-400">Scheme Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Maps patients to healthcare schemes</p>
              </motion.div>
              
              <div className="col-span-3 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 mt-6">
                <p className="text-center font-medium text-gray-700 dark:text-gray-300">Database Layer</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <motion.div 
                    className="px-4 py-2 bg-gray-100/80 dark:bg-gray-800/80 rounded shadow-sm backdrop-blur-md text-sm"
                    whileHover={{ y: -2 }}
                  >
                    MongoDB
                  </motion.div>
                  <motion.div 
                    className="px-4 py-2 bg-gray-100/80 dark:bg-gray-800/80 rounded shadow-sm backdrop-blur-md text-sm"
                    whileHover={{ y: -2 }}
                  >
                    Prisma ORM
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Services communicate via RESTful APIs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
