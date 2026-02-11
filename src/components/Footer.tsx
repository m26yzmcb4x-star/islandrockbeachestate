import Link from "next/link";
import styles from "./Footer.module.css";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandCol}>
                    <Link href="/" className={styles.logo}>
                        Island Rock
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
                    <form className={styles.newsletterForm} action="/contact">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className={styles.newsletterInput}
                            required
                        />
                        <button type="submit" className={styles.newsletterButton}>
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.socials} style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram size={20} className={styles.socialIcon} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook size={20} className={styles.socialIcon} />
                    </a>
                </div>
                &copy; {new Date().getFullYear()} Island Rock Beach Estate. All rights reserved.
            </div>
        </footer>
    );
}
