"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import { X } from "lucide-react";

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


    // Combined nav links for consistency
    // Ordered by owner priority: golf and investment lead, villas follow, hotel last.
    const navLinks: { name: string; href: string; children?: { name: string; href: string }[] }[] = [
        {
            name: "Golf", href: "/golf", children: [
                { name: "The Course", href: "/golf/course" },
                { name: "Membership", href: "/golf/membership" },
                { name: "Clubhouse", href: "/golf/clubhouse" },
            ]
        },
        { name: "Investment", href: "/investment" },
        { name: "The Villas", href: "/villas" },
        { name: "Hotel", href: "/hotel" },
        { name: "The Estate", href: "/" },
        { name: "Location", href: "/location" },
        { name: "Lifestyle", href: "/lifestyle" },
        { name: "Gallery", href: "/gallery" },
        { name: "Insights", href: "/blog" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/island-rock-logo.png"
                            alt="Island Rock Golf Estate"
                            width={156}
                            height={116}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    {/* Centered Desktop Menu */}
                    <div className={styles.desktopMenu}>
                        {navLinks.map((link) => (
                            <div key={link.href} className={styles.navItem}>
                                <Link
                                    href={link.href}
                                    className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                                >
                                    {link.name}
                                    {link.children && <span className={styles.caret}>▾</span>}
                                </Link>
                                {link.children && (
                                    <div className={styles.dropdown}>
                                        {link.children.map((child) => (
                                            <Link key={child.href} href={child.href} className={styles.dropdownLink}>
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right-aligned Enquire Button (Always visible on desktop) */}
                    <Link href="/contact" className={styles.rightCta}>Enquire</Link>

                    <button
                        className={styles.menuButton}
                        onClick={() => setIsMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        Menu
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ""}`}>
                <button
                    className={styles.closeButton}
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={32} />
                </button>

                {navLinks.map((link) => (
                    <div key={link.href} className={styles.mobileGroup}>
                        <Link
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.name}
                        </Link>
                        {link.children && link.children.map((child) => (
                            <Link
                                key={child.href}
                                href={child.href}
                                className={styles.mobileSubLink}
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {child.name}
                            </Link>
                        ))}
                    </div>
                ))}
                {/* Enquire in mobile menu as well */}
                <Link 
                    href="/contact" 
                    className={styles.mobileLink} 
                    style={{ marginTop: '1rem', textDecoration: 'underline' }}
                    onClick={() => setIsMobileOpen(false)}
                >
                    Enquire
                </Link>
            </div>
        </>
    );
}
