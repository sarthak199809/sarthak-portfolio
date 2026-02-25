"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Zap, Code2, Sparkles, Sun, Moon, Phone, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import * as gtag from "@/lib/gtag";

const navItems = [
    { name: "Contact", icon: Phone, href: "#home" },
    { name: "Work", icon: Briefcase, href: "#work" },
    { name: "Impact", icon: Zap, href: "#impact" },
    { name: "Skills", icon: Code2, href: "#skills" },
];

export default function FloatingDock() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState("Home");
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const item = navItems.find((item) => item.href === `#${id}`);
                    if (item) setActiveSection(item.name);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Target sections
        const sections = ["home", "work", "impact", "skills", "ai-projects"];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Mobile Theme Toggle (Top Right) */}
            <div className="fixed top-6 right-6 z-[90] md:hidden">
                <button
                    onClick={() => {
                        toggleTheme();
                        gtag.event({
                            action: 'theme_toggle',
                            category: 'Engagement',
                            label: theme === 'dark' ? 'Light' : 'Dark'
                        });
                    }}
                    className="flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full shadow-lg group backdrop-blur-md"
                    aria-label="Toggle theme"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={theme}
                            initial={{ y: 10, opacity: 0, rotate: 45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -10, opacity: 0, rotate: -45 }}
                            transition={{ duration: 0.2 }}
                            className="text-foreground"
                        >
                            {theme === "dark" ? (
                                <Sun size={20} className="text-orange-400 fill-orange-400/20" />
                            ) : (
                                <Moon size={20} className="text-indigo-600 fill-indigo-600/10" />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>

            <div className="fixed inset-x-0 bottom-8 flex justify-center z-50 px-4 md:px-0">
                <motion.nav
                    layout
                    className={cn(
                        "bg-white flex items-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-full shadow-2xl border border-black/5 transition-all duration-300 max-w-full",
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
                                onClick={() => gtag.event({
                                    action: 'nav_click',
                                    category: 'Navigation',
                                    label: item.name
                                })}
                                className={cn(
                                    "relative flex items-center h-12 px-3 rounded-full transition-all duration-300",
                                    activeSection === item.name
                                        ? (theme === "dark" ? "bg-accent/20 text-accent" : "bg-accent/10 text-accent")
                                        : "hover:bg-gray-100 dark:hover:bg-neutral-800"
                                )}
                            >
                                <item.icon
                                    size={20}
                                    className={cn(
                                        "relative z-10",
                                        activeSection === item.name
                                            ? "text-accent"
                                            : (theme === "dark" ? "text-gray-400" : "text-gray-500")
                                    )}
                                />
                                <AnimatePresence>
                                    {(hovered === item.name || activeSection === item.name) && (
                                        <motion.span
                                            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                                            animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                                            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                                            className="overflow-hidden whitespace-nowrap text-xs font-black uppercase tracking-widest"
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.a>
                        ))}
                    </div>

                    <div className="hidden md:block h-6 w-[1px] bg-gray-200 mx-2" style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#e5e5e5" }} />

                    {/* Desktop Theme Toggle (Hidden on mobile) */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => {
                                toggleTheme();
                                gtag.event({
                                    action: 'theme_toggle',
                                    category: 'Engagement',
                                    label: theme === 'dark' ? 'Light' : 'Dark'
                                });
                            }}
                            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all relative overflow-hidden group"
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ y: 20, opacity: 0, rotate: 45 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: -20, opacity: 0, rotate: -45 }}
                                    transition={{ duration: 0.3, ease: "backOut" }}
                                    className="text-foreground"
                                >
                                    {theme === "dark" ? (
                                        <Sun size={20} className="text-orange-400 fill-orange-400/20" />
                                    ) : (
                                        <Moon size={20} className="text-indigo-600 fill-indigo-600/10" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>

                    <div className="hidden md:block h-6 w-[1px] bg-gray-200 mx-2" style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : "#e5e5e5" }} />

                    <a
                        href="#ai-projects"
                        onClick={() => gtag.event({
                            action: 'nav_click',
                            category: 'Navigation',
                            label: 'View AI Projects'
                        })}
                        className="bg-black text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-gray-900 transition-all shadow-lg flex items-center gap-2 shrink-0"
                    >
                        <Sparkles size={16} className="text-[#FF3B00] md:size-[18px]" />
                        <span className="hidden md:inline">View AI Projects</span>
                        <span className="md:hidden">AI</span>
                    </a>
                </motion.nav>
            </div>
        </>
    );
}
