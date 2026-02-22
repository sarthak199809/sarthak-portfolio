"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Download, MapPin } from "lucide-react";

export default function HomeSection() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 bg-background transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="bg-orange-500/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-accent/10">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Immediately Available
                    </span>
                    <span className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
                        <MapPin size={16} />
                        Noida, India
                    </span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 text-foreground leading-[0.9]">
                    Sarthak Garg.
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-8 tracking-tight">
                    Product Manager & Solo Founder
                    <span className="block text-foreground mt-2">SaaS • E-commerce • Cybersecurity</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium">
                    3.5+ years of driving growth from 0 to 1. Specialized in automating operations,
                    optimizing search success (67% → 92%), and launching enterprise-grade security products.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bento-card flex flex-col justify-between group cursor-default bg-card border-border shadow-sm hover:shadow-md transition-all">
                        <div>
                            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4 font-bold">Connect</p>
                            <div className="flex flex-col gap-4">
                                <a href="https://linkedin.com/in/sarthak-garg-pm" target="_blank" className="flex items-center gap-3 text-foreground font-bold hover:text-accent transition-colors">
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="mailto:Sarthak199809@gmail.com" className="flex items-center gap-3 text-foreground font-bold hover:text-accent transition-colors">
                                    <Mail size={20} />
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bento-card md:col-span-2 flex flex-col justify-between bg-foreground text-background p-8 transition-all">
                        <div>
                            <p className="text-[#666666] font-black text-[10px] uppercase tracking-[0.2em] mb-4">Actions</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="tel:+918266903656" className="bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-accent/20">
                                    <Phone size={24} />
                                    Call Now
                                </a>
                                <a href="https://zmucqnfxnsdtevzmjtzb.supabase.co/storage/v1/object/sign/portfoliodata/Sarthak_garg_resume_updated-feb26.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wY2YxNTBhNC1jZDNlLTQzZjItOGU2Zi0yNmY3ZmU5ZGU4ZjIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9kYXRhL1NhcnRoYWtfZ2FyZ19yZXN1bWVfdXBkYXRlZC1mZWIyNi5wZGYiLCJpYXQiOjE3NzE3NTcyODYsImV4cCI6MTgwMzI5MzI4Nn0.lOFK6pRZfSsmMUzmm0W-JyYS_yIkGDjnwUnHrFIJETE" target="_blank" className="bg-background text-foreground px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-card transition-all border border-border">
                                    <Download size={24} />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
