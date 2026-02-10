import Link from "next/link";
import styles from "./Footer.module.css";

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
            </div>

            <div className={styles.bottom}>
                &copy; {new Date().getFullYear()} Island Rock Beach Estate. All rights reserved.
            </div>
        </footer>
    );
}
