"use client";

import FloatingDock from "@/components/FloatingDock";
import HomeSection from "@/components/HomeSection";
import ImpactSection from "@/components/ImpactSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import AIProjectsSection from "@/components/AIProjectsSection";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-white overflow-x-hidden">
        <FloatingDock />
        <div className="relative z-10">
          <HomeSection />
          <ImpactSection />
          <WorkSection />
          <SkillsSection />
          <AIProjectsSection />
        </div>

        {/* Footer */}
        <footer className="py-24 px-6 md:px-24 border-t border-gray-100 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-black">
              Ready to build the next big thing?
            </h2>
            <div className="flex justify-center gap-6">
              <a href="mailto:Sarthak199809@gmail.com" className="text-gray-500 font-bold hover:text-[#FF3B00] transition-colors">Email</a>
              <a href="https://linkedin.com/in/sarthak-garg-pm" className="text-gray-500 font-bold hover:text-[#FF3B00] transition-colors">LinkedIn</a>
            </div>
            <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              © 2026 Sarthak Garg / Noida, India
            </p>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}
