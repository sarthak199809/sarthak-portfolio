"use client";

import FloatingDock from "@/components/FloatingDock";
import HomeSection from "@/components/HomeSection";
import ImpactSection from "@/components/ImpactSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import AIProjectsSection from "@/components/AIProjectsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <FloatingDock />
      <div className="relative z-10">
        <HomeSection />
        <ImpactSection />
        <WorkSection />
        <SkillsSection />
        <AIProjectsSection />
      </div>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-24 border-t border-border bg-background text-center transition-colors duration-300">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-foreground">
            Ready to build the next big thing?
          </h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:Sarthak199809@gmail.com" className="text-muted-foreground font-bold hover:text-accent transition-colors">Email</a>
            <a href="https://linkedin.com/in/sarthak-garg-pm" className="text-muted-foreground font-bold hover:text-accent transition-colors">LinkedIn</a>
          </div>
          <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
            © 2026 Sarthak Garg / Noida, India
          </p>
        </div>
      </footer>
    </main>
  );
}
