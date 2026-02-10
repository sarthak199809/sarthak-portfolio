"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Zap, Code2, Sparkles, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
    { name: "Work", icon: Briefcase, href: "#work" },
    { name: "Impact", icon: Zap, href: "#impact" },
    { name: "Skills", icon: Code2, href: "#skills" },
    { name: "AI", icon: Sparkles, href: "#ai-projects" },
];

export default function FloatingDock() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed inset-x-0 bottom-8 flex justify-center z-50">
            <motion.nav
                layout
                className={cn(
                    "bg-white flex items-center gap-2 p-2 rounded-full shadow-2xl border border-black/5 transition-all duration-300",
                    isScrolled ? "scale-90" : "scale-100"
                )}
                style={{
                    backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
                    borderColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"
                }}
            >
                <div className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onHoverStart={() => setHovered(item.name)}
                            onHoverEnd={() => setHovered(null)}
                            className="relative flex items-center h-12 px-3 rounded-full hover:bg-gray-100 transition-colors"
                            style={{
                                backgroundColor: hovered === item.name ? (theme === "dark" ? "#2a2a2a" : "#f5f5f5") : "transparent"
                            }}
                        >
                            <item.icon size={24} className={theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"} style={{ transition: "color 0.2s" }} />
                            <AnimatePresence>
                                {hovered === item.name && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                                        animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                                        exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                                        className="overflow-hidden whitespace-nowrap text-sm font-bold"
                                        style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    ))}
                </div>

                <div className="h-6 w-[1px] bg-gray-200 mx-2" style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#e5e5e5" }} />

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                    style={{
                        backgroundColor: "transparent",
                        color: theme === "dark" ? "#ffffff" : "#000000"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === "dark" ? "#2a2a2a" : "#f5f5f5"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="h-6 w-[1px] bg-gray-200 mx-2" style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#e5e5e5" }} />

                <a
                    href="#ai-projects"
                    className="bg-black text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-gray-900 transition-all shadow-lg flex items-center gap-2"
                >
                    <Sparkles size={18} className="text-[#FF3B00]" />
                    <span className="hidden md:inline">View AI Projects</span>
                    <span className="md:hidden">AI</span>
                </a>
            </motion.nav>
        </div>
    );
}
