"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TechStackSection() {
  const techStackRef = useRef(null);
  const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.2 });
  
  const stackItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { 
      y: -10, 
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      scale: 1.05
    }
  };

  return (
    <section id="tech-stack" ref={techStackRef} className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isTechStackInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isTechStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
          >
            Technology Stack
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Cutting-Edge Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            MedLink leverages modern technologies to create a robust, scalable healthcare platform.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          initial="hidden"
          animate={isTechStackInView ? "visible" : "hidden"}
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
            { 
              name: "Next.js", 
              description: "React framework for server-side rendering", 
              icon: "/next.svg", 
              color: "bg-black dark:bg-white dark:invert" 
            },
            { 
              name: "TypeScript", 
              description: "Typed JavaScript for safer code", 
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              color: "bg-teal-50 dark:bg-teal-900/20" 
            },
            { 
              name: "Python", 
              description: "For analytics and ML tasks", 
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              color: "bg-amber-50 dark:bg-amber-900/20" 
            },
            { 
              name: "MongoDB", 
              description: "NoSQL database solution", 
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              color: "bg-emerald-50 dark:bg-emerald-900/20" 
            },
            { 
              name: "Prisma", 
              description: "Modern database ORM", 
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
              color: "bg-cyan-50 dark:bg-cyan-900/20" 
            },
            { 
              name: "Llama 3", 
              description: "Advanced AI model", 
              icon: "", // No standard icon for Llama 3
              color: "bg-rose-50 dark:bg-rose-900/20",
              textIcon: "🦙" 
            }
          ].map((tech, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 ${tech.color} flex flex-col items-center text-center backdrop-blur-md`}
              variants={stackItemVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech.icon ? (
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={48} 
                    height={48}
                    className={tech.name === "Next.js" ? "dark:invert" : ""}
                  />
                </div>
              ) : (
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-3xl">
                  {tech.textIcon}
                </div>
              )}
              <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
