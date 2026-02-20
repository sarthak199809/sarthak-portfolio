"use client";

import React, { useState } from "react";
import { Lock } from "lucide-react";
import LoginModal from "./LoginModal";
import { motion } from "framer-motion";

export default function CMSLoginTrigger() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-8 left-8 z-[90] w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg group backdrop-blur-md"
                title="CMS Login"
            >
                <Lock size={18} className="group-hover:rotate-12 transition-transform" />
            </motion.button>

            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
