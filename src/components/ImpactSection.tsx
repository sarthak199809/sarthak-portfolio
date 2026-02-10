"use client";

import { motion } from "framer-motion";

const impacts = [
    {
        label: "Search Success",
        value: "92%",
        description: "Increased from 67% at Bijnis marketplace.",
        color: "bg-accent/10 text-accent"
    },
    {
        label: "Monthly Revenue",
        value: "50K",
        description: "Scaling The Sticker Project in 4 months.",
        color: "bg-accent/10 text-accent"
    },
    {
        label: "Response Time",
        value: "5m",
        description: "Automated support at SecureLayer7.",
        color: "bg-accent/10 text-accent"
    },
    {
        label: "Engagement Lift",
        value: "18%",
        description: "Via personalization framework at Bijnis.",
        color: "bg-accent/10 text-accent"
    }
];

export default function ImpactSection() {
    return (
        <section id="impact" className="py-32 px-6 md:px-24 bg-background transition-colors duration-300">
            <div className="mb-16">
                <p className="text-accent text-xs uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Highlights
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">Impact at a Glance.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impacts.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bento-card group hover:scale-[1.02] transition-transform bg-card border-border"
                    >
                        <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 font-bold`}>
                            {item.value.includes('%') ? '%' : '#'}
                        </div>
                        <p className="text-4xl md:text-5xl font-black mb-2 tracking-tighter text-foreground">{item.value}</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{item.label}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
