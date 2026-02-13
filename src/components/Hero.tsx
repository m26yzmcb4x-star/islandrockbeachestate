"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

interface HeroProps {
    headline?: string;
    subheadline?: string;
    ctaText?: string;
    ctaLink?: string;
    variant?: 'full' | 'small';
    videoSrc?: string;
}

export default function Hero({
    headline = "Island Rock Beach Estate",
    subheadline = "A rare reef-protected beachfront estate in Jangamo, Mozambique.",
    ctaText = "Enquire",
    ctaLink = "/contact",
    variant = "full",
    videoSrc,
}: HeroProps) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={`${styles.hero} ${styles[variant]}`}>
            {videoSrc ? (
                <video
                    className={styles.videoBackground}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ transform: `translateY(${offset * 0.5}px)` }}
                />
            ) : (
                <div
                    className={styles.backgroundImage}
                    style={{ transform: `translateY(${offset * 0.5}px)` }}
                />
            )}
            <div className={styles.backgroundOverlay} />
            <div className={styles.content}>
                <h1 className={styles.headline}>{headline}</h1>
                <p className={styles.subheadline}>{subheadline}</p>
                <Link href={ctaLink} className={styles.cta}>
                    {ctaText}
                </Link>
            </div>
        </section>
    );
}
