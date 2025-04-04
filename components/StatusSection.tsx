"use client";

import { motion } from "framer-motion";

export default function StatusSection() {
  return (
    <section id="status" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-10 -z-10">
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-teal-50 dark:from-teal-900/10 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyan-50 dark:from-cyan-900/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Project Status
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Development Progress</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            MedLink is currently in active development for the Pragati AI for Impact Hackathon 2025.
          </p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto backdrop-blur-md bg-teal-50/80 dark:bg-teal-900/20 rounded-3xl border border-teal-100/80 dark:border-teal-800/80 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">MedLink Progress</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Team QUBITRULES is actively developing core functionalities.
                </p>
              </div>
              <motion.div 
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-medium mt-4 md:mt-0"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                In Development
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">Overall Progress</span>
                  <span className="font-bold">30%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div 
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Database Design", progress: 60 },
                  { name: "UI/UX Design", progress: 45 },
                  { name: "AI Integration", progress: 25 },
                  { name: "API Development", progress: 35 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.name}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-teal-500 dark:bg-teal-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <div className="flex-1 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                  <p className="font-medium mb-1">Next Milestone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Prototype completion by Q3 2024</p>
                </div>
                <div className="flex-1 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                  <p className="font-medium mb-1">Target Launch</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2025 - Initial deployment</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
