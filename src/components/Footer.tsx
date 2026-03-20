"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("submitting");
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandCol}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logo.svg"
                            alt="Island Rock Beach Estate"
                            width={160}
                            height={45}
                            className={styles.logoImage}
                        />
                    </Link>
                    <p className={styles.tagline}>
                        A quiet, timeless, accessible-luxury beachfront estate in Jangamo, Mozambique.
                    </p>
                </div>

                <div className={styles.column}>
                    <h4>Sitemap</h4>
                    <div className={styles.links}>
                        <Link href="/estate" className={styles.link}>The Estate</Link>
                        <Link href="/location" className={styles.link}>Location</Link>
                        <Link href="/villas" className={styles.link}>The Villas</Link>
                        <Link href="/lifestyle" className={styles.link}>Lifestyle</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Enquire</h4>
                    <div className={styles.links}>
                        <Link href="/investment" className={styles.link}>Investment</Link>
                        <Link href="/contact" className={styles.link}>Contact Us</Link>
                        <Link href="/gallery" className={styles.link}>Gallery</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4>Newsletter</h4>
                    <p className={styles.tagline} style={{ marginBottom: '1rem' }}>
                        Join our list for exclusive estate updates.
                    </p>
                    {status === "success" ? (
                        <p className={styles.newsletterSuccess}>✓ Subscribed! We&apos;ll keep you updated.</p>
                    ) : (
                        <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={styles.newsletterInput}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className={styles.newsletterButton}
                                disabled={status === "submitting"}
                            >
                                {status === "submitting" ? "..." : "Join"}
                            </button>
                        </form>
                    )}
                    {status === "error" && (
                        <p className={styles.newsletterError}>Something went wrong. Try again.</p>
                    )}
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.socials} style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                    <a href="https://www.instagram.com/island_rock_estate/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram size={20} className={styles.socialIcon} />
                    </a>
                    <a href="https://www.facebook.com/share/19U2vXtcWx/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook size={20} className={styles.socialIcon} />
                    </a>
                </div>
                &copy; {new Date().getFullYear()} Island Rock Beach Estate. All rights reserved.
            </div>
        </footer>
    );
}
