"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "The Estate", href: "/estate" },
        { name: "Location", href: "/location" },
        { name: "The Villas", href: "/villas" },
        { name: "Lifestyle", href: "/lifestyle" },
        { name: "Investment", href: "/investment" },
        { name: "Gallery", href: "/gallery" },
    ];

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        Island Rock
                    </Link>

                    <div className={styles.desktopMenu}>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.link}>
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" className={styles.cta}>
                            Enquire
                        </Link>
                    </div>

                    <button
                        className={styles.menuButton}
                        onClick={() => setIsMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        Menu
                    </button>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ""}`}>
                <button
                    className={styles.closeButton}
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={32} />
                </button>

                <Link href="/" className={styles.mobileLink}>
                    Home
                </Link>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={styles.mobileLink}>
                        {link.name}
                    </Link>
                ))}
                <Link href="/contact" className={styles.mobileLink} style={{ marginTop: '1rem', textDecoration: 'underline' }}>
                    Enquire
                </Link>
            </div>
        </>
    );
}
