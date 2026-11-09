import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "The Hotel | Island Rock Golf Estate, Mozambique",
    description: "A boutique beachfront hotel at Island Rock Golf Estate in Jangamo, Mozambique — accommodation, dining and spa alongside the golf course and ocean. Currently in development.",
    keywords: ["Mozambique boutique hotel", "Jangamo hotel", "beachfront hotel Mozambique", "golf estate hotel", "Inhambane accommodation"],
    openGraph: { url: "https://islandrockestate.com/hotel" },
};

export default function HotelPage() {
    return (
        <main>
            <Hero
                headline="The Hotel"
                subheadline="A boutique retreat between the fairways and the sea."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            {/* Development notice */}
            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                In Development &nbsp;·&nbsp; Design & concept underway &nbsp;·&nbsp;{' '}
                <Link href="/contact" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Register your interest</Link>
            </div>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>The Concept</span>
                        <h2 className={styles.heading}>Stay, Play, Unwind</h2>
                        <p className={styles.paragraph}>
                            The Island Rock hotel is envisioned as an intimate, low-density retreat — a place to
                            arrive for a weekend of golf, stay for the ocean, and leave already planning a return.
                            <br /><br />
                            Rooms and suites are being designed to open to sea breezes and dune-forest quiet,
                            with dining and spa that draw on the estate&apos;s coastal setting.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src="/images/terrace-ocean-view.jpg"
                            alt="Ocean-view terrace representative of the planned Island Rock hotel"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>What to Expect</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Boutique Rooms</h4>
                            <p>A small collection of rooms and suites, each with ocean or garden outlook.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Dining &amp; Spa</h4>
                            <p>Coastal-inspired dining, a relaxed bar, and a spa built for slow mornings.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Golf &amp; Leisure Packages</h4>
                            <p>Stay-and-play packages linking the hotel to the course, reef and beach.</p>
                        </div>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Room counts, rates and opening dates will be confirmed closer to launch.
                        Details on this page are indicative and subject to change.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Join the Priority List</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Register your interest for opening announcements and early booking offers.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Register Interest</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'The Hotel', href: '/hotel' }]} />
        </main>
    );
}
