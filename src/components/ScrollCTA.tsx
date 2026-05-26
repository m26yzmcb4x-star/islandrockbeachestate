"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./ScrollCTA.module.css";
import { X } from "lucide-react";

export default function ScrollCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(() => {
        if (typeof window !== "undefined") {
            return !!sessionStorage.getItem("cta_dismissed");
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 60% of the page
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 60 && !isDismissed) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem("cta_dismissed", "true");
    };

    if (isDismissed || !isVisible) return null;

    return (
        <div className={styles.overlay} onClick={handleDismiss}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close} onClick={handleDismiss} aria-label="Close">
                    <X size={20} />
                </button>
                <span className={styles.label}>Limited Availability</span>
                <h3 className={styles.heading}>Only 20 Beachfront Villas</h3>
                <p className={styles.text}>
                    Secure your position at Island Rock Beach Estate. 
                    Get in touch to learn about available villas and pricing.
                </p>
                <Link href="/contact" className={styles.cta} onClick={handleDismiss}>
                    Enquire Now
                </Link>
            </div>
        </div>
    );
}
