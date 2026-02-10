"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

export default function SkillsSection() {
    return (
        <section id="skills" className="py-32 px-6 md:px-24 bg-background transition-colors duration-300">
            <div className="mb-16">
                <p className="text-accent text-xs uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Expertise
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">Skills & Tools.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {Object.entries(skillsData).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-8 flex items-center gap-4">
                            {category}
                            <span className="h-[1px] flex-1 bg-border" />
                        </h3>

                        <div className="flex flex-col gap-4">
                            {/* @ts-ignore */}
                            {skills.map((skill: string) => (
                                <div key={skill} className="group flex items-center justify-between">
                                    <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground transition-colors transform group-hover:translate-x-2 duration-300">{skill}</span>
                                    <div className="h-2 w-2 rounded-full bg-border group-hover:bg-accent transition-colors" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
