"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    threshold?: number;
    className?: string;
}

export default function ScrollReveal({ 
    children, 
    threshold = 0.1,
    className = "" 
}: ScrollRevealProps) {
    const [ref, isVisible] = useIntersectionObserver(threshold);

    return (
        <div 
            ref={ref} 
            className={`reveal ${isVisible ? "visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
