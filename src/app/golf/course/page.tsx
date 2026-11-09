import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "The Course | Island Rock Golf Estate, Mozambique",
    description: `An ${FACTS.golf.holes}-hole, par ${FACTS.golf.par} course on the Jangamo dunes — the opening holes play along the coast with ocean views, and hole 3 drops into a valley. Routing in development.`,
    keywords: ["Mozambique golf course routing", "Jangamo golf holes", "coastal golf course Mozambique", "dune golf course"],
    openGraph: { url: "https://islandrockestate.com/golf/course" },
};

export default function GolfCoursePage() {
    return (
        <main>
            <Hero
                headline="The Course"
                subheadline="Begin on the dune, with the ocean beside you."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Concept Stage &nbsp;·&nbsp; Routing Underway &nbsp;·&nbsp;{' '}
                <Link href="/golf" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Back to Golf</Link>
            </div>

            <Section background="white">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '0.75rem' }}>{FACTS.golf.holes} Holes, Par {FACTS.golf.par}</h3>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
                        Owned and operated by the developer. Full routing, yardage and a hole-by-hole
                        map will follow the LiDAR contour survey already completed across the estate —
                        details below are the holes confirmed so far.
                    </p>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.introGrid}>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '360px' }}>
                        <Image
                            src="/images/new-coastline-aerial.jpg"
                            alt="Concept image of the dune landscape planned for holes 1 and 2"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>Holes 1 &amp; 2</span>
                        <h3 className={styles.heading}>On the Dune, Ocean in View</h3>
                        <p className={styles.paragraph}>
                            The opening two holes are routed along the top of the dune, with the Indian
                            Ocean visible from the tee on both.
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>Hole 3</span>
                        <h3 className={styles.heading}>A Par 3 Into the Valley</h3>
                        <p className={styles.paragraph}>
                            From the dune top, the course turns inland: hole 3 is a par 3 played down into
                            a valley, the first change of elevation on the round.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '360px' }}>
                        <Image
                            src="/images/villa-coastline-aerial.jpg"
                            alt="Concept image of the valley setting for the par-3 hole 3"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Course Facilities</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Practice &amp; Coaching</h4>
                            <p>Driving range, putting green and a short-game area, with a golf pro or academy on site.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Carts, Caddies &amp; Hire</h4>
                            <p>Carts, caddies and club hire available, with handicap affiliation planned.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Water-Wise Irrigation</h4>
                            <p>Borehole water, solar-pumped, keeping the course light on the estate&apos;s resources.</p>
                        </div>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Holes 4 through {FACTS.golf.holes} will be added here as routing is finalised.
                        All course imagery on this page is a labelled concept, not a built course.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Follow the Routing</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Register your interest to receive updates as the full course design is published.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Register Interest</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'Golf', href: '/golf' }, { name: 'The Course', href: '/golf/course' }]} />
        </main>
    );
}
