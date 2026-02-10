"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </ThemeProvider>
    );
}
