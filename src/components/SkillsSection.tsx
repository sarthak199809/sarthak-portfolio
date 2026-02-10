"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

export default function SkillsSection() {
    return (
        <section id="skills" className="py-32 px-6 md:px-24 bg-white">
            <div className="mb-16">
                <p className="text-[#FF3B00] text-xs uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF3B00]" />
                    Expertise
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black">Skills & Tools.</h2>
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
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF3B00] mb-8 flex items-center gap-4">
                            {category}
                            <span className="h-[1px] flex-1 bg-gray-200" />
                        </h3>

                        <div className="flex flex-col gap-4">
                            {/* @ts-ignore */}
                            {skills.map((skill: string) => (
                                <div key={skill} className="group flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-500 group-hover:text-black transition-colors transform group-hover:translate-x-2 duration-300">{skill}</span>
                                    <div className="h-2 w-2 rounded-full bg-gray-200 group-hover:bg-[#FF3B00] transition-colors" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
