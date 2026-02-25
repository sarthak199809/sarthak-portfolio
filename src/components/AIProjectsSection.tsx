"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ExternalLink, X, Workflow } from "lucide-react";
import * as gtag from "@/lib/gtag";

interface Project {
    id: string;
    title: string;
    summary: string;
    description: string;
    n8nScreenshotUrl: string;
    testLink: string;
    toolsUsed: string[];
}

export default function AIProjectsSection({ initialProjects }: { initialProjects?: Project[] }) {
    const [projects, setProjects] = useState<Project[]>(initialProjects || []);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [loading, setLoading] = useState(!initialProjects);

    React.useEffect(() => {
        if (!initialProjects) {
            fetch("/api/projects")
                .then(res => res.json())
                .then(data => {
                    setProjects(data);
                    setLoading(false);
                });
        }
    }, [initialProjects]);

    const selectedProject = projects.find(p => p.id === selectedId);

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
                {projects.map((project: Project) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => {
                            setSelectedId(project.id);
                            gtag.event({
                                action: 'view_ai_project',
                                category: 'Engagement',
                                label: project.title
                            });
                        }}
                        className="bento-card cursor-pointer group hover:shadow-xl transition-all bg-card border-border overflow-hidden relative"
                    >
                        {/* Project Image Preview */}
                        <div className="relative h-48 -mx-1 -mt-1 mb-12 overflow-hidden rounded-b-2xl border-b border-border">
                            {project.n8nScreenshotUrl ? (
                                <img
                                    src={project.n8nScreenshotUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                                    <Cpu size={32} className="text-accent/20" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent pt-32 px-6">
                                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg">
                                    <Cpu size={20} />
                                </div>
                            </div>
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

                        {/* Expand CTA */}
                        <div className="mt-8 flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest opacity-100 transition-all">
                            Learn More
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ExternalLink size={14} />
                            </motion.div>
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
                                    {selectedProject?.n8nScreenshotUrl && (
                                        <img
                                            src={selectedProject.n8nScreenshotUrl}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
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
                                                {selectedProject?.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject?.toolsUsed.map((tool: string) => (
                                                    <span key={tool} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-background px-2 py-1 rounded">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={selectedProject?.testLink}
                                            target="_blank"
                                            className="bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-accent/20"
                                            onClick={() => gtag.event({
                                                action: 'test_automation_click',
                                                category: 'Conversion',
                                                label: selectedProject?.title || 'Unknown'
                                            })}
                                        >
                                            Test Automation
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>

                                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                        {selectedProject?.description}
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
