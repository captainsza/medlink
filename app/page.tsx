"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import StatusSection from "@/components/StatusSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />
        <TechStackSection />
        <StatusSection />
        <TeamSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
