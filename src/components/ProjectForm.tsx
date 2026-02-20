"use client";

import React, { useState, useEffect } from "react";
import { X, Save, Trash2, Plus, Tag as TagIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: string;
    title: string;
    summary: string;
    description: string;
    n8nScreenshotUrl: string;
    testLink: string;
    toolsUsed: string[];
    displayOrder: number;
}

interface ProjectFormProps {
    project?: Project;
    isOpen: boolean;
    onClose: () => void;
    onRefresh: () => void;
}

export default function ProjectForm({ project, isOpen, onClose, onRefresh }: ProjectFormProps) {
    const [formData, setFormData] = useState<Partial<Project>>({
        id: "",
        title: "",
        summary: "",
        description: "",
        n8nScreenshotUrl: "",
        testLink: "",
        toolsUsed: [],
        displayOrder: 0
    });
    const [toolInput, setToolInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (project) {
            setFormData(project);
        } else {
            setFormData({
                id: `project-${Date.now()}`,
                title: "",
                summary: "",
                description: "",
                n8nScreenshotUrl: "",
                testLink: "",
                toolsUsed: [],
                displayOrder: 0
            });
        }
    }, [project, isOpen]);

    // Reset confirmDelete when modal closes
    useEffect(() => {
        if (!isOpen) {
            setConfirmDelete(false);
            setError("");
        }
    }, [isOpen]);

    const handleAddTool = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && toolInput.trim()) {
            e.preventDefault();
            if (!formData.toolsUsed?.includes(toolInput.trim())) {
                setFormData({
                    ...formData,
                    toolsUsed: [...(formData.toolsUsed || []), toolInput.trim()]
                });
            }
            setToolInput("");
        }
    };

    const removeTool = (toolToRemove: string) => {
        setFormData({
            ...formData,
            toolsUsed: formData.toolsUsed?.filter(t => t !== toolToRemove)
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const method = project ? "PATCH" : "POST";
            const res = await fetch("/api/projects", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                onRefresh();
                onClose();
            } else {
                const data = await res.json().catch(() => ({}));
                setError(data.error || `Save failed (${res.status}). You may need to log in again.`);
            }
        } catch (err) {
            console.error("Failed to save project:", err);
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!project) return;
        if (!confirmDelete) {
            setConfirmDelete(true);
            return;
        }
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`/api/projects?id=${project.id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                onRefresh();
                onClose();
            } else {
                const data = await res.json();
                setError(data.error || "Failed to delete.");
                setConfirmDelete(false);
            }
        } catch (error) {
            console.error("Failed to delete project:", error);
            setError("Network error. Please try again.");
            setConfirmDelete(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[110] cursor-pointer"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border p-8 rounded-[32px] shadow-2xl z-[111] max-h-[90vh] overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-black tracking-tight text-foreground">
                                {project ? "Edit Project" : "Add New AI Project"}
                            </h3>
                            <button onClick={onClose} className="p-2 hover:bg-background rounded-full transition-colors">
                                <X size={20} className="text-muted-foreground" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Title</label>
                                    <input
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-background border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none text-sm"
                                        placeholder="Project Title"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Display Order</label>
                                    <input
                                        type="number"
                                        value={formData.displayOrder}
                                        onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) })}
                                        className="w-full bg-background border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Summary (Short)</label>
                                <input
                                    required
                                    value={formData.summary}
                                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                    className="w-full bg-background border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none text-sm"
                                    placeholder="Brief overview for the card"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Description (Full)</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-background border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none text-sm resize-none"
                                    placeholder="Detailed project description..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Image URL</label>
                                    <input
                                        required
                                        value={formData.n8nScreenshotUrl}
                                        onChange={(e) => setFormData({ ...formData, n8nScreenshotUrl: e.target.value })}
                                        className="w-full bg-background border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none text-sm"
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Test Link / Redirect</label>
                                    <input
                                        required
                                        value={formData.testLink}
                                        onChange={(e) => setFormData({ ...formData, testLink: e.target.value })}
                                        className="w-full bg-background border border-border rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none text-sm"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Tools / Tech Stack</label>
                                <div className="flex flex-wrap gap-2 p-3 bg-background border border-border rounded-xl min-h-[50px]">
                                    {formData.toolsUsed?.map((tool) => (
                                        <span key={tool} className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-[10px] uppercase font-bold">
                                            {tool}
                                            <button type="button" onClick={() => removeTool(tool)} className="hover:text-red-500">
                                                <X size={12} />
                                            </button>
                                        </span>
                                    ))}
                                    <input
                                        value={toolInput}
                                        onChange={(e) => setToolInput(e.target.value)}
                                        onKeyDown={handleAddTool}
                                        className="flex-1 bg-transparent border-none outline-none text-sm min-w-[100px]"
                                        placeholder="Type tool name and press Enter"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-border mt-8">
                                {error && (
                                    <div className="w-full text-red-500 bg-red-500/10 rounded-xl px-4 py-3 text-sm font-medium mb-0">
                                        ⚠️ {error}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 bg-accent text-white py-4 rounded-2xl font-bold hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    <Save size={18} />
                                    {loading ? "Saving..." : "Save Project"}
                                </button>
                                {project && (
                                    confirmDelete ? (
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setConfirmDelete(false)}
                                                className="flex-1 border border-border text-muted-foreground py-4 rounded-2xl font-bold hover:bg-background transition-all text-sm"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleDelete}
                                                disabled={loading}
                                                className="flex-1 bg-red-500 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                                            >
                                                <Trash2 size={18} />
                                                {loading ? "Deleting..." : "Confirm Delete"}
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleDelete}
                                            disabled={loading}
                                            className="w-16 bg-red-500/10 text-red-500 py-4 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition-all active:scale-95 flex items-center justify-center disabled:opacity-50"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    )
                                )}
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
