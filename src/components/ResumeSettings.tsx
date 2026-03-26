"use client";

import React, { useState, useEffect } from "react";
import { FileText, Save, Loader2, Link as LinkIcon, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeSettings() {
    const [resumeLink, setResumeLink] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/settings");
            if (res.ok) {
                const data = await res.json();
                setResumeLink(data.resume_link || "");
            }
        } catch (error) {
            console.error("Failed to fetch settings:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        setMessage({ text: "", type: "" });
        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ key: "resume_link", value: resumeLink }),
            });

            if (res.ok) {
                setMessage({ text: "Resume link updated successfully!", type: "success" });
                setTimeout(() => setMessage({ text: "", type: "" }), 3000);
            } else {
                setMessage({ text: "Failed to update resume link.", type: "error" });
            }
        } catch (error) {
            setMessage({ text: "An error occurred.", type: "error" });
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader2 className="animate-spin text-accent" size={32} />
            </div>
        );
    }

    return (
        <div className="bg-card border border-border rounded-[32px] p-8 mb-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                    <FileText size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-black tracking-tight text-foreground">RESUME MANAGEMENT</h2>
                    <p className="text-sm text-muted-foreground font-medium">Update your public resume PDF link</p>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 px-1">
                        Resume URL (Supabase/Google Drive/etc.)
                    </label>
                    <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent transition-colors">
                            <LinkIcon size={18} />
                        </div>
                        <input
                            type="url"
                            value={resumeLink}
                            onChange={(e) => setResumeLink(e.target.value)}
                            className="w-full bg-background border border-border rounded-2xl py-4 pl-12 pr-4 text-foreground font-medium focus:outline-none focus:border-accent transition-all"
                            placeholder="https://..."
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                    <div className="flex-1">
                        <AnimatePresence>
                            {message.text && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className={`text-sm font-bold ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}
                                >
                                    {message.text}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    <div className="flex gap-3">
                        {resumeLink && (
                            <a 
                                href={resumeLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-background border border-border text-foreground px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-card transition-all active:scale-95"
                            >
                                <ExternalLink size={18} />
                                Preview
                            </a>
                        )}
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="bg-accent text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 disabled:opacity-50 transition-all active:scale-95 shadow-lg shadow-accent/20"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save size={18} />
                                    Save Changes
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
