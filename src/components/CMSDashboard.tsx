"use client";

import React, { useState, useEffect } from "react";
import { Plus, ArrowLeft, LogOut, LayoutGrid, GripVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import ProjectForm from "./ProjectForm";
import { motion } from "framer-motion";

export default function CMSDashboard() {
    const [projects, setProjects] = useState<any[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const router = useRouter();

    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/projects");
            if (res.ok) {
                const data = await res.json();
                setProjects(data);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const logout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <button onClick={() => router.push("/")} className="flex items-center gap-2 text-muted-foreground hover:text-accent font-bold text-xs uppercase tracking-widest mb-4 transition-colors">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </button>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
                        CMS <span className="text-accent">DASHBOARD</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => { setSelectedProject(null); setIsFormOpen(true); }}
                        className="bg-accent text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 transition-all active:scale-95"
                    >
                        <Plus size={18} />
                        Add New
                    </button>
                    <button
                        onClick={logout}
                        className="bg-card border border-border text-muted-foreground px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-background transition-all active:scale-95"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide -mx-4 px-4 overflow-y-visible">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        onClick={() => { setSelectedProject(project); setIsFormOpen(true); }}
                        className="flex-shrink-0 w-80 bg-card border border-border rounded-[32px] p-6 cursor-pointer hover:border-accent group transition-all relative z-10"
                    >
                        <div className="aspect-video bg-background rounded-2xl mb-4 overflow-hidden relative border border-border">
                            {project.n8nScreenshotUrl && (
                                <img src={project.n8nScreenshotUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            )}
                            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-white text-accent px-4 py-2 rounded-xl font-bold text-sm shadow-xl">Edit Project</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-black tracking-tight text-foreground truncate pr-2">{project.title}</h3>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-background px-2 py-1 rounded-md border border-border flex-shrink-0">
                                #{project.displayOrder}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 font-medium leading-relaxed">{project.summary}</p>
                        <div className="flex flex-wrap gap-1">
                            {project.toolsUsed.slice(0, 3).map((tool: any) => (
                                <span key={tool} className="text-[9px] uppercase font-bold text-muted-foreground/60 border border-border bg-background/50 px-2 py-1 rounded">
                                    {tool}
                                </span>
                            ))}
                            {project.toolsUsed.length > 3 && (
                                <span className="text-[9px] uppercase font-bold text-muted-foreground/60 px-2 py-1">+ {project.toolsUsed.length - 3}</span>
                            )}
                        </div>
                    </motion.div>
                ))}
                {projects.length === 0 && (
                    <div className="w-full py-24 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-[40px] text-muted-foreground">
                        <Plus size={48} className="mb-4 opacity-20" />
                        <p className="font-bold uppercase tracking-widest text-xs">No projects found. Add your first one!</p>
                    </div>
                )}
            </div>

            <ProjectForm
                isOpen={isFormOpen}
                project={selectedProject}
                onClose={() => setIsFormOpen(false)}
                onRefresh={fetchProjects}
            />
        </div>
    );
}
