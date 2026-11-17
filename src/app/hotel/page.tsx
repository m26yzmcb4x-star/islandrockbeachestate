import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "The Hotel | Island Rock Golf Estate, Mozambique",
    description: `A ${FACTS.hotel.rooms}-room beachfront hotel at Island Rock Golf Estate, on the beach at the estate's southern tip in Jangamo, Mozambique. Currently in development.`,
    keywords: ["Mozambique hotel", "Jangamo hotel", "beachfront hotel Mozambique", "golf estate hotel", "Inhambane accommodation"],
    openGraph: { url: "https://islandrockestate.com/hotel" },
};

export default function HotelPage() {
    return (
        <main>
            <Hero
                headline="The Hotel"
                subheadline="On the beach, at the estate's southern tip."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            {/* Development notice */}
            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Concept Stage &nbsp;·&nbsp; {FACTS.hotel.rooms} Rooms Planned &nbsp;·&nbsp;{' '}
                <Link href="/contact" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Register your interest</Link>
            </div>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>The Concept</span>
                        <h2 className={styles.heading}>Stay, Play, Unwind</h2>
                        <p className={styles.paragraph}>
                            {FACTS.hotel.position}. A place to arrive for a weekend of golf, stay for the
                            ocean, and leave already planning a return.
                            <br /><br />
                            Rooms and suites are being designed to open to sea breezes, with dining and
                            spa that draw on the estate&apos;s coastal setting. See its position on the{' '}
                            <Link href="/masterplan" className={styles.link}>Masterplan</Link>.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src="/images/hotel-pool-aerial-real.jpg"
                            alt="A tropical resort pool, representative of the style planned for the Island Rock hotel"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.5rem', borderRadius: '2px' }}>
                            Representative Image
                        </div>
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>What to Expect</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>{FACTS.hotel.rooms} Rooms</h4>
                            <p>Reception, pool, rooms and spa all drawn on the current masterplan.</p>
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
                        Rates and opening dates will be confirmed closer to launch. This page accepts
                        registrations of interest only — there is no booking yet.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Join the Priority List</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Register your interest for opening announcements. No booking is available yet.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Register Interest</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'The Hotel', href: '/hotel' }]} />
        </main>
    );
}
