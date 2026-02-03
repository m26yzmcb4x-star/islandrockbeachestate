"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import styles from "./Section.module.css";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'sand' | 'white' | 'stone';
}

export default function Section({
    children,
    className = "",
    id,
    background = 'white'
}: SectionProps) {
    const [ref, isVisible] = useIntersectionObserver(0.1);

    return (
        <section
            id={id}
            className={`${styles.section} ${styles[background]} ${className}`}
        >
            <div
                ref={ref}
                className={`${styles.container} reveal ${isVisible ? 'visible' : ''}`}
            >
                {children}
            </div>
        </section>
    );
}
