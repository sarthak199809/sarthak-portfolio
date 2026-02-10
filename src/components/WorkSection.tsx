"use client";

import { motion } from "framer-motion";
import { careerData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function WorkSection() {
    return (
        <section id="work" className="py-32 px-6 md:px-24 bg-white">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <p className="text-[#FF3B00] text-xs uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FF3B00]" />
                        Professional
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black">My Work.</h2>
                </div>
                <div className="hidden md:block text-gray-500 text-sm max-w-[200px] font-medium">
                    Leading product development and growth across multiple industries.
                </div>
            </div>

            <div className="space-y-32">
                {careerData.map((job) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-[#F5F5F7] border border-gray-100 group-hover:shadow-xl transition-shadow">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-bold">
                                    {job.company} Project Image
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-xs font-black uppercase tracking-widest text-black">{job.company}</span>
                                    <span className="h-[1px] w-8 bg-gray-200" />
                                    <span className="text-xs font-bold text-gray-400">{job.period}</span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight flex items-center gap-4 text-black">
                                    {job.role}
                                    <a href="#" className="p-3 bg-[#FF3B00] text-white rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 shadow-lg shadow-orange-500/30">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </h3>

                                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                                    {job.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 mb-12">
                                    {job.metrics.map((metric) => (
                                        <div key={metric.label}>
                                            <p className="text-3xl font-black mb-1 tracking-tighter text-black">{metric.value}</p>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {job.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] uppercase font-bold tracking-wider text-gray-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
