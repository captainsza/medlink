"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FeaturesSection() {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  
  // Animation variants  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="features" ref={featuresRef} className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
          >
            Key Features
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Comprehensive Healthcare Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            MedLink delivers innovative features designed to address critical challenges in healthcare delivery.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          initial="hidden"
          animate={isFeaturesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            {
              title: "Resource Management",
              description: "Real-time tracking of hospital resources including beds, equipment, and ventilators to optimize capacity and prevent shortages.",
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )
            },
            {
              title: "Universal Patient Database",
              description: "Secure, centralized repository of patient records accessible across the hospital network with proper authorization.",
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              )
            },
            {
              title: "AI-Powered Chatbot",
              description: "Intelligent assistant for healthcare providers, offering rapid data retrieval and diagnostic support using advanced models.",
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              )
            },
            {
              title: "Inter-Hospital Alerts",
              description: "Automated notification system that facilitates resource sharing between hospitals during emergencies and shortages.",
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              )
            },
            {
              title: "Maternal/Child Health Module",
              description: "Specialized tools for frontline workers to identify high-risk pregnancies, provide nutritional guidance, and monitor child development.",
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            },
            {
              title: "Offline Access",
              description: "Local caching capabilities ensure the platform remains functional in areas with limited internet connectivity.",
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="relative backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 p-8 rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 z-10 overflow-hidden group"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500" />
              
              <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-teal-500/5 dark:bg-teal-500/10 
                              group-hover:bg-teal-500/10 dark:group-hover:bg-teal-500/20 transition-all duration-500" />
              
              <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 
                              group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 p-3.5 rounded-xl inline-block text-teal-600 dark:text-teal-400 mb-6 group-hover:shadow-md transition-all duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
