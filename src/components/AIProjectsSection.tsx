"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiProjects } from "@/lib/data";
import { Cpu, ExternalLink, X, Workflow } from "lucide-react";

export default function AIProjectsSection() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section id="ai-projects" className="py-32 px-6 md:px-24 bg-background transition-colors duration-300">
            <div className="mb-16">
                <p className="text-accent text-xs uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Automation
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">AI Projects.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => setSelectedId(project.id)}
                        className="bento-card cursor-pointer group hover:shadow-xl transition-all bg-card border-border"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                                <Cpu size={24} className="text-accent group-hover:text-white transition-colors" />
                            </div>
                            <Workflow size={20} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <h3 className="text-2xl font-black mb-2 text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                            {project.summary}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.toolsUsed.map((tool) => (
                                <span key={tool} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground px-2 py-1 bg-background rounded border border-border">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 cursor-pointer"
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-[60] p-4 pointer-events-none">
                            <motion.div
                                layoutId={selectedId}
                                className="w-full max-w-4xl bg-card border border-border shadow-2xl rounded-[32px] overflow-hidden pointer-events-auto"
                            >
                                <div className="relative aspect-video bg-background border-b border-border overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-xs uppercase tracking-widest font-bold">
                                        n8n Workflow Screenshot
                                    </div>
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-6 right-6 p-2 bg-card rounded-full hover:bg-background transition-colors shadow-sm"
                                    >
                                        <X size={20} className="text-foreground" />
                                    </button>
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-black mb-2 text-foreground">
                                                {aiProjects.find(p => p.id === selectedId)?.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {aiProjects.find(p => p.id === selectedId)?.toolsUsed.map((tool) => (
                                                    <span key={tool} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-background px-2 py-1 rounded">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={aiProjects.find(p => p.id === selectedId)?.testLink}
                                            target="_blank"
                                            className="bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-accent/20"
                                        >
                                            Test Automation
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>

                                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                        {aiProjects.find(p => p.id === selectedId)?.description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
