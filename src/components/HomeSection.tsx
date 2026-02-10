"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Download, MapPin } from "lucide-react";

export default function HomeSection() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="bg-orange-50 text-[#FF3B00] px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-orange-100">
                        <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
                        Immediately Available
                    </span>
                    <span className="text-gray-500 flex items-center gap-2 text-sm font-medium">
                        <MapPin size={16} />
                        Noida, India
                    </span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 text-black leading-[0.9]">
                    Sarthak Garg.
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-400 mb-8 tracking-tight">
                    Product Manager & Solo Founder
                    <span className="block text-black mt-2">SaaS • E-commerce • Cybersecurity</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium">
                    3.5+ years of driving growth from 0 to 1. Specialized in automating operations,
                    optimizing search success (67% → 92%), and launching enterprise-grade security products.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bento-card flex flex-col justify-between group cursor-default bg-white border-gray-100 shadow-sm hover:shadow-md">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-bold">Connect</p>
                            <div className="flex flex-col gap-4">
                                <a href="https://linkedin.com/in/sarthak-garg-pm" target="_blank" className="flex items-center gap-3 text-black font-bold hover:text-[#FF3B00] transition-colors">
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="mailto:Sarthak199809@gmail.com" className="flex items-center gap-3 text-black font-bold hover:text-[#FF3B00] transition-colors">
                                    <Mail size={20} />
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bento-card md:col-span-2 flex flex-col justify-between bg-black text-white p-8">
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-bold">Actions</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="tel:+918266903656" className="bg-[#FF3B00] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-orange-500/20">
                                    <Phone size={24} />
                                    Call Now
                                </a>
                                <a href="/Sarthak_Garg_Resume.pdf" target="_blank" className="bg-gray-100 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gray-200 transition-all border border-gray-200">
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
