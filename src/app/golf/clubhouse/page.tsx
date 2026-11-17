import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "The Clubhouse | Island Rock Golf Estate, Mozambique",
    description: "The clubhouse at Island Rock Golf Estate sits at the southern end of the course, beside the first tee, open to everyone on the estate. Currently in development.",
    keywords: ["golf clubhouse Mozambique", "Jangamo golf estate clubhouse"],
    openGraph: { url: "https://islandrockestate.com/golf/clubhouse" },
};

export default function GolfClubhousePage() {
    return (
        <main>
            <Hero
                headline="The Clubhouse"
                subheadline="At the southern end of the course, open to everyone."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Concept Stage &nbsp;·&nbsp; Design Underway &nbsp;·&nbsp;{' '}
                <Link href="/golf" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Back to Golf</Link>
            </div>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>The Concept</span>
                        <h2 className={styles.heading}>A Place to Gather</h2>
                        <p className={styles.paragraph}>
                            {FACTS.clubhouse.position}, with its own practice green. It is open to every
                            owner, hotel guest and visiting golfer on the estate — not restricted to
                            villa owners alone.
                            <br /><br />
                            A separate halfway house sits at the northern turn of the course, between the
                            outward and inward nines.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '360px' }}>
                        <Image
                            src="/images/clubhouse-exterior-real.jpg"
                            alt="A golf clubhouse overlooking a green, representative of the setting planned for Island Rock"
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
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Planned Facilities</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Pro Shop &amp; Hire</h4>
                            <p>Club hire and golf essentials, alongside the practice facilities at the course.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Open Access</h4>
                            <p>Open to everyone on the estate — not restricted to villa owners or hotel guests alone.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Halfway House</h4>
                            <p>A separate building at the northern turn, partway through the round.</p>
                        </div>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        The clubhouse&apos;s final scale and design will be published as plans are confirmed.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Register Your Interest</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Get in touch to follow the clubhouse design and the wider golf estate as it develops.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Register Interest</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'Golf', href: '/golf' }, { name: 'Clubhouse', href: '/golf/clubhouse' }]} />
        </main>
    );
}
