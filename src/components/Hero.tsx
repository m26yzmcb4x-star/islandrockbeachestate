import Link from "next/link";
import styles from "./Hero.module.css";

interface HeroProps {
    headline?: string;
    subheadline?: string;
    ctaText?: string;
    ctaLink?: string;
    variant?: 'full' | 'small';
}

export default function Hero({
    headline = "Island Rock Beach Estate",
    subheadline = "A rare reef-protected beachfront estate in Jangamo, Mozambique.",
    ctaText = "Enquire",
    ctaLink = "/contact",
    variant = "full",
}: HeroProps) {
    return (
        <section className={`${styles.hero} ${styles[variant]}`}>
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
