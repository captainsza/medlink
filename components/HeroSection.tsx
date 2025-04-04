"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function HeroSection() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const pulseVariant = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        repeatType: "reverse" as const 
      }
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen px-6 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10"
        style={{ opacity }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500" />
      
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10 -z-10">
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-teal-200 dark:bg-teal-900 blur-3xl" />
        <div className="absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full bg-cyan-200 dark:bg-cyan-900 blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-7xl pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div>
                <motion.div 
                  className="inline-block px-4 py-2 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 text-sm font-semibold mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Healthcare Innovation
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" }
                    }
                  }}
                >
                  <span className="block">Revolutionizing</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 animate-gradient">
                    Healthcare Delivery
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.3, duration: 0.8 }
                    }
                  }}
                >
                  MedLink uses AI to connect hospitals, streamline resource management, and improve patient care through centralized data and intelligent assistance.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { delay: 0.5 }
                  }
                }}
              >
                <motion.a 
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                </motion.a>
                <motion.a 
                  className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  href="#project-overview"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 pt-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { delay: 0.7 }
                  }
                }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Team QUBITRULES</span> - Pragati AI for Impact Hackathon 2025
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div 
              className="relative w-full aspect-square max-w-lg mx-auto"
              style={{ scale }}
            >
              {/* 3D-like visualization placeholder */}
              <motion.div 
                className="absolute inset-0 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
                animate={{ rotateY: [0, 5, 0], rotateX: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 dark:from-teal-600/40 dark:to-cyan-600/40" />
                
                <div className="relative w-full h-full bg-white dark:bg-gray-900 p-6">
                  <div className="absolute right-4 top-4 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">ML</span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">MedLink Dashboard</span>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <motion.div 
                        className="col-span-2 h-24 rounded-lg bg-gray-100 dark:bg-gray-800 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded m-3" />
                        <div className="flex gap-2 mx-3">
                          <div className="h-3 w-16 bg-teal-200 dark:bg-teal-900 rounded" />
                          <div className="h-3 w-12 bg-cyan-200 dark:bg-cyan-900 rounded" />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="h-32 rounded-lg bg-gray-100 dark:bg-gray-800 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                      >
                        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded m-3" />
                        <div className="flex flex-col gap-2 mx-3 mt-4">
                          <div className="h-3 w-full bg-teal-200 dark:bg-teal-900 rounded" />
                          <div className="h-3 w-4/5 bg-teal-300 dark:bg-teal-800 rounded" />
                          <div className="h-3 w-3/5 bg-teal-400 dark:bg-teal-700 rounded" />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="h-32 rounded-lg bg-gray-100 dark:bg-gray-800 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 p-3"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
                      >
                        <div className="w-full h-full rounded-md bg-gradient-to-br from-teal-500/30 to-cyan-500/30 dark:from-teal-500/20 dark:to-cyan-500/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full border-4 border-teal-500/50 border-t-transparent animate-spin" />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="col-span-2 h-20 rounded-lg bg-gray-100 dark:bg-gray-800 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      >
                        <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded m-3" />
                        <div className="flex justify-between mx-3">
                          <div className="h-3 w-16 bg-green-200 dark:bg-green-900 rounded" />
                          <div className="h-3 w-24 bg-red-200 dark:bg-red-900 rounded" />
                          <div className="h-3 w-20 bg-yellow-200 dark:bg-yellow-900 rounded" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-xl backdrop-blur-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20"
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-10 -left-10 w-16 h-16 rounded-full backdrop-blur-xl bg-teal-500/10 dark:bg-teal-500/20 border border-teal-500/20"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 right-20 w-24 h-12 rounded-lg backdrop-blur-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20"
                animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            { value: "30%", label: "Development Progress" },
            { value: "6+", label: "Key Features" },
            { value: "2025", label: "Target Release" },
            { value: "24/7", label: "Healthcare Support" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6 } 
                }
              }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <motion.p 
                className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500"
                variants={pulseVariant}
                animate="pulse"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-center justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
